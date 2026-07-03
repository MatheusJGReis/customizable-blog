from django.urls import URLPattern, URLResolver, path
from . import views


app_name: str = 'statuses'


urlpatterns: list[URLPattern|URLResolver] = [
    path('', views.list, name='list'),
]