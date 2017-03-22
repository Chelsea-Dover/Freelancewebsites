"""daassite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticViewSitemap
from django.http import HttpResponse
from django.conf.urls.static import static
from gc2 import views

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    url(r'^$', views.home, name='home'),
    # url(r'^$', include('gc2.urls', namespace='')),
    url(r'^about_dina', views.about, name='about'),
    url(r'^resources', views.resources, name='resources'),
    url(r'^consulting', views.consulting, name='consulting'),
    url(r'^coaching', views.coaching, name='coaching'),
    url(r'^testimonials', views.testimonials, name='testimonials'),
    url(r'^Diversity_Champion_2015', views.image, name='image'),

    # url(r'^sitemap\.xml$', 'django.contrib.sitemaps.views.sitemap', {'sitemaps': sitemaps}),
    # url(r'^robots.txt', lambda x: HttpResponse("User-Agent: *\nDisallow:", content_type="text/plain"),
    #     name="robots_file")
]
