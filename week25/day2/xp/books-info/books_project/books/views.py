from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from django.utils.dateparse import parse_date
from .models import Book, BookReview
from .models import ReviewLike
from django.shortcuts import get_object_or_404

from django.db.models import Avg

from django.db import models
from django.contrib.auth.models import User  # Correct import for User model
from django.core.exceptions import ValidationError
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(BookReview, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} likes {self.review}'



def book_list(request):
    books = Book.objects.annotate(avg_rating=Avg('reviews__rating')).order_by('-avg_rating')

def list_books(req):
    books = Book.objects.all()
    data = [{'title': i.title, 'author': i.author, 'published_date': i.published_date} for i in books]
    return JsonResponse(data)

def book_detail(req, book_id):
    book = Book.objects.get(id=book_id)
    result = f'{book.title}, {book.author}, {book.categories}, {book.description}'
    return HttpResponse(result)
@csrf_exempt
def create_book(request):
    if request.method == 'POST':
        try:
            data = request.POST
            title = data['title']
            author = data['author']
            published_date = parse_date(data['published_date'])
            description = data['description']
            page_count = int(data['page_count'])
            categories = data['categories']
            thumbnail_url = data.get('thumbnail_url', '')

            if not all([title, author, published_date, description, categories]):
                raise ValidationError("All required fields must be provided.")

            if page_count <= 0:
                raise ValidationError("Page count must be a positive integer.")

            new_book = Book.objects.create(
                title=title,
                author=author,
                published_date=published_date,
                description=description,
                page_count=page_count,
                categories=categories,
                thumbnail_url=thumbnail_url,
            )

            return JsonResponse({'success': True, 'message': 'Book created successfully'}, status=201)
        except ValidationError as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)
    else:
        return HttpResponse("Only POST requests are allowed", status=405)


@csrf_exempt
def create_review(request):
    if request.method == 'POST':
        book_id = request.POST.get('book_id')
        rating = request.POST.get('rating')
        review_text = request.POST.get('review_text')

        book = get_object_or_404(Book, id=book_id)

        if rating and review_text:
            review = BookReview.objects.create(
                book=book,
                user=request.user,
                rating=rating,
                review_text=review_text,
            )
            return JsonResponse({'success': True, 'message': 'Отзыв успешно создан'}, status=201)
        else:
            return JsonResponse({'success': False, 'message': 'Требуется указать рейтинг и текст отзыва'}, status=400)
    else:
        return JsonResponse({'success': False, 'message': 'Разрешены только запросы POST'}, status=405)

@csrf_exempt
def edit_review(request, id):
    review = get_object_or_404(BookReview, id=id)

    if request.method == 'POST':
        rating = request.POST.get('rating')
        review_text = request.POST.get('review_text')

        if rating and review_text:
            review.rating = rating
            review.review_text = review_text
            review.save()
            return JsonResponse({'success': True, 'message': 'Отзыв успешно отредактирован'})
        else:
            return JsonResponse({'success': False, 'message': 'Требуется указать рейтинг и текст отзыва'}, status=400)
    else:
        return JsonResponse({'success': False, 'message': 'Разрешены только запросы POST'}, status=405)

@csrf_exempt
def delete_review(request, id):
    review = get_object_or_404(BookReview, id=id)

    if request.method == 'DELETE':
        review.delete()
        return JsonResponse({'success': True, 'message': 'Отзыв успешно удален'})
    else:
        return JsonResponse({'success': False, 'message': 'Разрешены только запросы DELETE'}, status=405)


@csrf_exempt
def add_like(request):
    if request.method == 'POST':
        user_id = request.POST.get('user')
        review_id = request.POST.get('review')

        user = get_object_or_404(User, id=user_id)
        review = get_object_or_404(BookReview, id=review_id)

        like, created = Like.objects.get_or_create(user=user, review=review)

        if created:
            return JsonResponse({'success': True, 'message': 'Like added successfully'}, status=201)
        else:
            return JsonResponse({'success': False, 'message': 'User already liked this review'}, status=400)
    else:
        return JsonResponse({'success': False, 'message': 'Only POST requests are allowed'}, status=405)



@csrf_exempt
def remove_like(request, id):
    like = get_object_or_404(ReviewLike, id=id)

    if request.method == 'DELETE':
        like.delete()
        return JsonResponse({'success': True, 'message': 'Like removed successfully'})
    else:
        return JsonResponse({'success': False, 'message': 'Only DELETE requests are allowed'}, status=405)


from django.db.models import Count

def top_books(request):
    books = Book.objects.annotate(avg_rating=Avg('reviews__rating')).order_by('-avg_rating')[:10]
    # Serialize books and return JsonResponse
    ...

def active_users(request):
    users = User.objects.annotate(num_reviews=Count('reviews')).order_by('-num_reviews')[:10]


@csrf_exempt
def search_books(request):
    query = request.GET.get('q', '')
    books = Book.objects.filter(
        Q(title__icontains=query) | Q(authors__name__icontains=query) | Q(categories__name__icontains=query)
    )
