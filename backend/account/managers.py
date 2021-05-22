from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy


class UserManager(BaseUserManager):
    def create_user(self, username, password, **info):

        if not username:
            raise ValueError(ugettext_lazy("The username must be set"))
        user = self.model(username=username, **info)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password, **info):

        info.setdefault("is_staff", True)
        info.setdefault("is_superuser", True)
        info.setdefault("is_active", True)

        if info.get("is_staff") is not True:
            raise ValueError(ugettext_lazy("Superuser must have is_staff=True."))
        if info.get("is_superuser") is not True:
            raise ValueError(ugettext_lazy("Superuser must have is_superuser=True."))
        return self.create_user(username, password, **info)
