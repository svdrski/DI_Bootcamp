from django.http import HttpResponse

def home(req):
    return HttpResponse('<h1>Blog home</h1>')

def about(req):
    return HttpResponse('<h1>About</h1>')