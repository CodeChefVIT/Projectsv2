from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=20)
    uuid = models.UUIDField(unique=True, primary_key=True)
    is_active = models.BooleanField(default=True)
    ROLE_CHOICES = (
        ("user", "User"),
        ("admin", "Admin"),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default="user")

    USERNAME_FIELD = "uuid"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.username
