from django.shortcuts import render

from .serializers import CommandSerializer
from .models import RepoModel

import re

from rest_framework.response import Response
from rest_framework.views import APIView

from . import utilities

# Create your views here.


class CommandAPIView(APIView):
    def post(self, request):
        serializer = CommandSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        command = serializer.validated_data["command"]
        response = {}

        create_repo_pattern = re.compile(
            (
                r"^create_repo (?P<name>\S+)"
                r"( --vis (?P<visibility>\S*))?"
                r"( --desc (?P<description>\S*))?"
                r"( --gitignore (?P<gitignore_template>\S*))?"
                r"( --license (?P<license_template>\S*))?"
                r"( --home (?P<homepage>\S*))?"
            )
        )

        if match := re.match(create_repo_pattern, command):
            try:
                response = utilities.create_repo(match)
                instance = RepoModel()
                instance.name = response["name"]
                instance.url = response["url"]
                instance.save()

            finally:
                return Response(response)

    def delete(self, request):
        serializer = CommandSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        command = serializer.validated_data["command"]
        response = {}

        delete_repo_pattern = re.compile(r"delete_repo (?P<repo>.+)")

        if match := re.match(delete_repo_pattern, command):
            response = utilities.delete_repo(match)

        if response:
            response = dict()
            response["message"] = "Repository deleted"
            instance = RepoModel.objects.get(name=match.group("repo"))
            instance.delete()

        else:
            response = dict()
            response["message"] = "Repository not found"

        return Response(response)
