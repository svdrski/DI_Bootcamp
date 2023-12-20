from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Avg
from .models import BookReview

@receiver(post_save, sender=BookReview)
@receiver(post_delete, sender=BookReview)
def update_book_avg_rating(sender, instance, **kwargs):
    book = instance.book
    book.avg_rating = BookReview.objects.filter(book=book).aggregate(Avg('rating'))['rating__avg']
    book.save()
