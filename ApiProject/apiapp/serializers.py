from rest_framework import serializers
from .models import *


from django.contrib.auth.models import User

class HondaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Honda
        fields = '__all__'
        
class BajajSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bajaj
        fields = '__all__'
        
class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = '__all__'
        
class KtmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ktm
        fields = '__all__'
        
class RcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rc
        fields = '__all__'
        
class SuzukiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suzuki
        fields = '__all__'
        
class TvsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tvs
        fields = '__all__'
        
class YamahaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Yamaha
        fields = '__all__'
        
class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = '__all__'
        
        
        
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     # password = serializers.CharField(write_only=True)
#     # confirm_password = serializers.CharField(write_only=True)
#     class Meta:
#         model = User 
#         fields = ('id', 'username', 'email', 'password')
#         extra_kwargs = {'password' : {'write_only':True, 'required':True}}
        
#     # def validate(self, data):
#     #     if data['password'] != data.pop('confirm_password'):
#     #         raise serializers.ValidationError("Passwords do not match")
#     #     return data
    
#     # def validate(self, attrs):
#     #     if attrs['password'] != attrs['confirm_password']:
#     #         raise serializers.ValidationError("Passwords do not match")
#     #     return attrs
        
#     def create(self, validated_data):
#         # manager = self.Meta.model.objects  # get the manager for the User model
#         user = User.objects.create_user(**validated_data)
#         return user
    
#     # def create(self, validated_data):
#     #     password = validated_data.pop('password')
#     #     user = User(**validated_data)
#     #     user.set_password(password)
#     #     user.save()
#     #     return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def to_representation(self, instance):
        """Ensure password is never returned in the representation."""
        representation = super().to_representation(instance)
        representation.pop('password', None)
        return representation
