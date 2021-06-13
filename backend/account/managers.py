from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy


class UserManager(BaseUserManager):
    def create_user(self, uuid, password, **info):

        if not uuid:
            raise ValueError(ugettext_lazy("The uuid must be set"))
        user = self.model(uuid=uuid, **info)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, uuid, password, **info):

        info.setdefault("is_user", True)
        info.setdefault("is_admin", True)
        # info.setdefault("is_active", True)

        if info.get("is_user") is not True:
            raise ValueError(ugettext_lazy("Superuser must have is_user=True."))
        if info.get("is_admin") is not True:
            raise ValueError(ugettext_lazy("Superuser must have is_admin=True."))
        return self.create_user(uuid, password, **info)
