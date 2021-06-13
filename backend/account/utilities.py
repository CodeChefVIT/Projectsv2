import datetime

import jwt
from django.conf import settings


def generate_access_token(uuid, is_admin):

    payload = {
        "uuid": str(uuid),
        "is_admin": is_admin,
        "exp": datetime.datetime.now() + datetime.timedelta(hours=1),
        "iat": datetime.datetime.now(),
    }

    access_token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

    return access_token


def generate_refresh_token(uuid, is_admin):

    payload = {
        "uuid": str(uuid),
        "is_admin": is_admin,
        "exp": datetime.datetime.now() + datetime.timedelta(days=1),
        "iat": datetime.datetime.now(),
    }

    refresh_token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

    return refresh_token
