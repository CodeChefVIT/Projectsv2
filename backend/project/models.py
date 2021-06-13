from django.db import models


# Create your models here.
class RepoModel(models.Model):
    name = models.CharField(max_length=100, unique=True)
    url = models.URLField()  # This is the API url of the repo
