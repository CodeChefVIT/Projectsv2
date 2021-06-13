from django.conf.urls import url

from . import views

urlpatterns = [
    url(r"^auth/xyz/$", views.AuthAdminAPIView.as_view(), name="auth_admin"),
    url(r"^auth/$", views.AuthAPIView.as_view(), name="auth"),
    url(r"^auth/refresh/$", views.RefreshAPIView.as_view(), name="refresh"),
]
