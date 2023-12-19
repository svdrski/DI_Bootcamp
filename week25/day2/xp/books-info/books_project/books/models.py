
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Book(models.Model):
    title = models.CharField(max_length=200, blank=False)
    author = models.CharField(max_length=200, blank=False)
    published_date = models.DateField(blank=False)
    description = models.TextField(blank=False)
    page_count = models.PositiveIntegerField()
    categories = models.CharField(max_length=200, blank=False)
    thumbnail_url = models.URLField()

    def __str__(self):
        return f'{self.title} by {self.author}'

class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, blank=False)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE, blank=False)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    thumbnail_url = models.URLField()
    review_text = models.TextField(blank=False, validators=[MinValueValidator(10)])

    def __str__(self):
        return f'Review for {self.book.title} by {self.user.username}'
