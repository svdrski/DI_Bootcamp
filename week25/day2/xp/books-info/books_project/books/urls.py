from . import views
from  django.urls import path
urlpatterns = [
    path('all/', views.list_books),
    path('create_book', views.create_book),
    path('book_detail/<int:book_id>', views.book_detail),
    path('books/review/create/', views.create_review),
    path('books/review/edit/<int:id>/', views.edit_review),
    path('books/review/delete/<int:id>/', views.delete_review)
]
