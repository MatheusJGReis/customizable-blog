from typing import Optional
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator, Page
from django.db import models
from django.db.models import Q
from .models import Post


def list(request: HttpRequest) -> HttpResponse:
    query: str = request.GET.get('q', '').strip()

    posts: models.BaseManager[Post] = Post.objects.all().order_by('-created_at')

    if query:
        posts = posts.filter(
            Q(title__icontains=query) | Q(body__icontains=query)
        )

    paginator: Paginator = Paginator(posts, 8)
    page_number: Optional[str] = request.GET.get('page')
    page_obj: Page = paginator.get_page(page_number)

    return render(request, 'posts/list.html', {
        'posts': page_obj,
        'page_obj': page_obj,
        'is_paginated': page_obj.has_other_pages(),
    })


def list_partial(request: HttpRequest) -> HttpResponse:
    query: str = request.GET.get('q', '').strip()

    posts: models.BaseManager[Post] = Post.objects.all().order_by('-created_at')

    if query:
        posts = posts.filter(
            Q(title__icontains=query) | Q(body__icontains=query)
        )

    paginator: Paginator = Paginator(posts, 8)
    page_obj: Page = paginator.get_page(request.GET.get('page'))

    return render(request, 'posts/list_partial.html', {
        'posts': page_obj,
        'page_obj': page_obj,
        'is_paginated': page_obj.has_other_pages(),
        'q': query,
    })


def focus(request: HttpRequest, slug: str) -> HttpResponse:
    post: Post = get_object_or_404(Post, slug=slug)

    return render(request, 'posts/focus.html', { 'post': post })