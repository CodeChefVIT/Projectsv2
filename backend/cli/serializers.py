from rest_framework import serializers


class CommandSerializer(serializers.Serializer):
    command = serializers.CharField()
