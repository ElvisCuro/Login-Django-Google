
from django.urls import path, include
from django.http import HttpResponse
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render
from django.urls import re_path
from . import views
from django.views.generic import TemplateView

def index_view(request):
    return render(request,'../front-reduxToolKit/dist/index.html')

urlpatterns = [
    path('',index_view,name='index'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^(?!static/).*$', TemplateView.as_view(template_name='../front-reduxToolKit/dist/index.html')),
]


# urlpatterns += [re_path(r'^.*/$', index_view)]