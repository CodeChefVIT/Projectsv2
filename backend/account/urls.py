from django.conf.urls import url

from . import views

urlpatterns = [
    url(r"^login/$", views.LoginAPIView.as_view(), name="login"),
    url(r"^login/refresh/$", views.RefreshAPIView.as_view(), name="refresh"),
]
