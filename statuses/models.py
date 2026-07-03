from django.db import models
from django.contrib.auth.models import User


class Status(models.Model):
    body: models.TextField = models.TextField()
    created_at: models.DateTimeField = models.DateTimeField(auto_now_add=True)
    updated_at: models.DateTimeField = models.DateTimeField(auto_now=True)
    author: models.ForeignKey = models.ForeignKey(User, on_delete=models.CASCADE, default=None)

    def __str__(self: Status) -> str:
        return f'{self.body[0:32]}... | {self.created_at.strftime("%Y-%m-%d %H:%M:%S")}'

    class Meta:
        verbose_name_plural: str = "statuses"
