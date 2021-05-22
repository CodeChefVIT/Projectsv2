from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django import forms
from .models import User


class UserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = User
        fields = ("username",)


class UserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ("username",)


# class SignupForm(forms.ModelForm):
#     class Meta:
#         model = User
#         fields = ('username','password')

#         help_texts = {
#             'email':'',
#             'password':'',
#             'phone':'',
#         }
