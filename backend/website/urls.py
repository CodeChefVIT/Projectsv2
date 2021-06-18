from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("admin/", admin.site.urls),
    url(r"^user/", include("account.urls")),
    url(r"^command/", include("cli.urls")),
    url(r"^project/", include("project.urls")),
]
