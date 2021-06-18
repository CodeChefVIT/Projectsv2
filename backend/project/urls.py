from django.conf.urls import url

from . import views

urlpatterns = [
    url(r"get_data/", views.ProjectDataAPIView.as_view(), name="project_data")
]
