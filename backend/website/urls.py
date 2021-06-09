from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

urlpatterns = [
    path("admin/", admin.site.urls),
    # url(r"^user/", include("account.urls")),
    url(r"^command/", include("cli.urls")),
    url(r"^project/", include("project.urls")),
]
