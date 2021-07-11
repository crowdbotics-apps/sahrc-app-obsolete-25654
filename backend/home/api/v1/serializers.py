from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer

from home.models import CustomText, HomePage

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    gender = serializers.ChoiceField(choices=User.GenderChoices)
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name', 'dob', 'gender', 'zip_code', 'school_code', 'picture')
        extra_kwargs = {
            'password': {'write_only': True, 'style': {'input_type': 'password'}},
            'email': {'required': True, 'allow_null': False, 'allow_blank': False},
            'first_name': {'required': True, 'allow_null': False, 'allow_blank': False},
            'last_name': {'required': True, 'allow_null': False, 'allow_blank': False},
            'dob': {'required': True, 'allow_null': False},
            'gender': {'required': True, 'allow_null': False},
            'zip_code': {'required': True, 'allow_null': False, 'allow_blank': False},
            'school_code': {'required': True, 'allow_null': False, 'allow_blank': False},
            'picture': {'required': False, 'allow_null': True}
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            dob=validated_data.get('dob'),
            gender=validated_data.get('gender'),
            zip_code=validated_data.get('zip_code'),
            school_code=validated_data.get('school_code'),
            picture=validated_data.get('picture'),
            username=generate_unique_username([
                validated_data.get('name'),
                validated_data.get('email'),
                'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = '__all__'


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    gender = serializers.ChoiceField(choices=User.GenderChoices)
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'dob', 'gender', 'zip_code', 'school_code', 'picture']
        extra_kwargs = {
            'email': {'read_only': True,},
            'first_name': {'required': True, 'allow_null': False, 'allow_blank': False},
            'last_name': {'required': True, 'allow_null': False, 'allow_blank': False},
            'dob': {'required': True, 'allow_null': False},
            'gender': {'required': True, 'allow_null': False},
            'zip_code': {'required': True, 'allow_null': False, 'allow_blank': False},
            'school_code': {'required': True, 'allow_null': False, 'allow_blank': False},
            'picture': {'required': True, 'allow_null': False}
        }


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm
