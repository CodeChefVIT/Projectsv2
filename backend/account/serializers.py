from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    uuid = serializers.UUIDField()


class RefreshSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()
