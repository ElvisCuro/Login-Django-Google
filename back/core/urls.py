
from django.urls import path, include
from django.http import HttpResponse
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render
from django.urls import re_path
from . import views

def index_view(request):
    return render(request,'dist/index.html')

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('admin/', admin.site.urls),
    path('',index_view,name='index'),

]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


# urlpatterns += [re_path(r'^.*/$', index_view)]