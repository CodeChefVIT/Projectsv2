import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import LoginSerializer, RefreshSerializer
from .utilities import generate_access_token, generate_refresh_token

# Create your views here.


class AuthAdminAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        User = get_user_model()

        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        uuid = serializer.validated_data["uuid"]

        User.objects.get_or_create(uuid=uuid, role="admin")

        access_token = generate_access_token(uuid, "admin")
        refresh_token = generate_refresh_token(uuid, "admin")

        response = {
            "access": access_token,
            "refresh": refresh_token,
        }

        return Response(response)



class AuthAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        User = get_user_model()

        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        uuid = serializer.validated_data["uuid"]

        User.objects.get_or_create(uuid=uuid)

        access_token = generate_access_token(uuid, "user")
        refresh_token = generate_refresh_token(uuid, "user")

        response = {
            "access": access_token,
            "refresh": refresh_token,
        }

        return Response(response)


class RefreshAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = RefreshSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        refresh_token = serializer.validated_data["refresh_token"]

        try:
            payload = jwt.decode(
                refresh_token, settings.SECRET_KEY, algorithms=["HS256"]
            )

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Token Expired!")

        access_token = generate_access_token(payload["uuid"], payload["role"])

        response = {
            "access": access_token,
            "refresh": refresh_token,
        }

        return Response(response)
