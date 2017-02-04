from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def home(request):
    return render(request, 'home.html')
    # return render(request, 'home.html')


def about(request):
    return render(request, 'about.html')


def image(request):
    return render(request, 'image.html')


def resources(request):
    return render(request, 'resources.html')


def consulting(request):
    return render(request, 'consulting.html')

def coaching(request):
    return render(request, 'coaching.html')


def testimonials(request):
    return render(request, 'testimonials.html')