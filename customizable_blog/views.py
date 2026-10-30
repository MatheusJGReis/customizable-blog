from django.db.models.manager import BaseManager
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from posts.models import Post
from statuses.models import Status


def home(request: HttpRequest) -> HttpResponse:
    posts: BaseManager[Post] = Post.objects.order_by('-created_at')[:3]
    statuses: BaseManager[Status] = Status.objects.order_by('-created_at')[:4]

    return render(request, 'home.html', { 'posts': posts, 'statuses': statuses })


def about(request: HttpRequest) -> HttpResponse:
    return render(request, 'about.html')
