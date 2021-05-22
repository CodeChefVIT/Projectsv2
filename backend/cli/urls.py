from django.conf.urls import url
from . import views

urlpatterns = [
    url(r"^execute", views.CommandAPIView.as_view(), name="execute_command"),
]
