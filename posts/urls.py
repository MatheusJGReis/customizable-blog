from django.urls import URLPattern, URLResolver, path
from . import views


app_name: str = 'posts'


urlpatterns: list[URLPattern|URLResolver] = [
    path('', views.list, name='list'),
    path('partial/', views.list_partial, name='list_partial'),
    path('<slug:slug>', views.focus, name='focus'),
]