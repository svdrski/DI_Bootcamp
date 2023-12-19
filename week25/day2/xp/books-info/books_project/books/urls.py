from . import views
from  django.urls import path
urlpatterns = [
    path('all/', views.list_books),
    path('create_book', views.create_book),
    path('book_detail/<int:book_id>', views.book_detail)
]
