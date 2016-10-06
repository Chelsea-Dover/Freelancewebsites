__author__ = 'Chelsea'


from django.conf.urls import include, url
from django.contrib import admin
from gc2 import views


urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'about/', views.about, name='about'),
    url(r'resources/', views.resources, name='resources'),
    url(r'services/', views.services, name='services'),
    url(r'testimonials/', views.testimonials, name='testimonials'),
]