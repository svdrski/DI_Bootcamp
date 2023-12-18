from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.

def index(request):
    return HttpResponse("RREEESSSPSPPSP.")

def kuku(request):
    return HttpResponse('KUKUKU')

def helloPage(req):
    print(req)
    context = {'hello': [1,3,4,5]}
    template = loader.get_template("../templates/hello.html")
    return HttpResponse(template.render(context, req))

    # return render(req,"../templates/hello.html", {})

def year(req, year):
    print(year)
    return HttpResponse('KUKUKU')


def About(req):
    user = {
        'first_name' : "John",
        'last_name' : "Doe"
    }

    subjects = [
        {
            'title' : "How to setup Django",
            'author': "Maria"
        },
        {
            'title' : "How to cake an amazing pie",
            'author' : "Chef Mark"
        }
    ]

    context = {
        'user' : user,
        'subjects': subjects
    }


    return render(req, "../templates/hello.html", context)

