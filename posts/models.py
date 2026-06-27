from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title: models.CharField = models.CharField(max_length=80)
    body: models.TextField = models.TextField()
    slug: models.SlugField = models.SlugField(unique=True)
    created_at: models.DateTimeField = models.DateTimeField(auto_now_add=True)
    updated_at: models.DateTimeField = models.DateTimeField(auto_now=True)
    banner: models.ImageField = models.ImageField(blank=True)
    author: models.ForeignKey = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    tags: models.ManyToManyField = models.ManyToManyField(
        'Tag',
        blank=True,
        related_name='posts'
    )

    def __str__(self: Post) -> str:
        return f'{self.title} | {self.created_at.strftime("%Y-%m-%d %H:%M:%S")}'
    

class Tag(models.Model):
    name: models.CharField = models.CharField(max_length=40)

    def __str__(self: Tag) -> str:
        return self.name