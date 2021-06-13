from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    # username = models.CharField(max_length=20, unique=True)
    uuid = models.UUIDField(unique=True, primary_key=True)
    is_admin = models.BooleanField(default=False)
    is_user = models.BooleanField(default=True)

    USERNAME_FIELD = "uuid"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.username
