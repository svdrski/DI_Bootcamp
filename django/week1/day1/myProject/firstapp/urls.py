from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('p', views.kuku),
    path('e', views.helloPage),
    path('hello', views.helloPage),
    path('articles/<int:year>/', views.year),
    path('about_website', views.About)

]
