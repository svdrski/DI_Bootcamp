from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
from django.utils.dateparse import parse_date
from .models import Book, BookReview

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
