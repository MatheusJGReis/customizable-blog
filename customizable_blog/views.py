from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.db import models
from posts.models import Post


def home(request: HttpRequest) -> HttpResponse:
    posts: models.BaseManager[Post] = Post.objects.order_by('-created_at')[:3]

    return render(request, 'home.html', { 'posts': posts })


def about(request: HttpRequest) -> HttpResponse:
    return render(request, 'about.html')