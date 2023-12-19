from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Person, Post

def home(req):
    print(Person.objects.first())
    context = {
        'user': Person.objects.first()
    }
    return render(req, '../templates/home.html', context)


person = Person.objects.filter(first_name="Maria", last_name = "Fez").first()

# ... the index function is here

def posts(request):
    context = {
        'user' : person,
# we retrieve the person variable (created outside of the function)
        'page_title' : "Posts",
        'posts' : Post.objects.filter(
            author__first_name=person.first_name,
            author__last_name=person.last_name)
    }

    return render(request, '../templates/posts.html', context)