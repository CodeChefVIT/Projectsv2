import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import exceptions
from rest_framework.authentication import BaseAuthentication


class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        User = get_user_model()
        authorisation_header = request.headers.get("Authorization")

        if not authorisation_header:
            return None

        try:
            access_token = authorisation_header.split(" ")[1]
            payload = jwt.decode(
                access_token, settings.SECRET_KEY, algorithms=["HS256"]
            )

        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed("Access token has expired!")

        except IndexError:
            raise exceptions.AuthenticationFalied("Token missing!")

        user = User.objects.get(uuid=payload["uuid"])

        if not user:
            raise exceptions.AuthenticationFalied("User does not exist!")

        return (user, None)
