from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.core.paginator import Paginator, Page
from django.db import models
from .models import Status


def list(request: HttpRequest) -> HttpResponse:
    statuses: models.BaseManager[Status] = Status.objects.all().order_by('-created_at')
    paginator: Paginator = Paginator(statuses, 12)
    page_obj: Page = paginator.get_page(request.GET.get('page'))

    return render(request, 'statuses/list.html', {
        'statuses': page_obj,
        'page_obj': page_obj,
        'is_paginated': page_obj.has_other_pages()
    })
