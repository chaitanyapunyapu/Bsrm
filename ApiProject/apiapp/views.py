from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets

from django.contrib.auth.models import User

# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from jwt import decode  
from rest_framework import exceptions

from django.http import JsonResponse

# Create your views here.

class Hondaviewset(viewsets.ModelViewSet):
    queryset=Honda.objects.all()
    serializer_class=HondaSerializer
    
class Bajajviewset(viewsets.ModelViewSet):
    queryset=Bajaj.objects.all()
    serializer_class=BajajSerializer
    
class Heroviewset(viewsets.ModelViewSet):
    queryset=Hero.objects.all()
    serializer_class=HeroSerializer
    
class Ktmviewset(viewsets.ModelViewSet):
    queryset=Ktm.objects.all()
    serializer_class=KtmSerializer
    
class Rcviewset(viewsets.ModelViewSet):
    queryset=Rc.objects.all()
    serializer_class=RcSerializer
    
class Suzukiviewset(viewsets.ModelViewSet):
    queryset=Suzuki.objects.all()
    serializer_class=SuzukiSerializer
    
class Tvsviewset(viewsets.ModelViewSet):
    queryset=Tvs.objects.all()
    serializer_class=TvsSerializer
    
class Yamahaviewset(viewsets.ModelViewSet):
    queryset=Yamaha.objects.all()
    serializer_class=YamahaSerializer

class Logoviewset(viewsets.ModelViewSet):
    queryset=Logo.objects.all()
    serializer_class=LogoSerializer
    
# class UserViewSet(viewsets.ModelViewSet):
#     queryset=User.objects.all().order_by('date_joined')
#     serializer_class=UserSerializer
#     # authentication_classes=(TokenAuthentication,)
#     # permission_classes=(IsAuthenticated,)


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response
    
    
    
from rest_framework import exceptions
import jwt

class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise exceptions.AuthenticationFailed('Unauthenticated!')

        try:
            payload = decode(token, 'secret', algorithms=['HS256'])
        except jwt.exceptions.ExpiredSignatureError:
    # handle the expired signature error here

            raise exceptions.AuthenticationFailed('Token expired!')
        except jwt.InvalidSignatureError:
            raise exceptions.AuthenticationFailed('Invalid token!')

        user = User.objects.filter(id=payload['id']).first()
        if not user:
            raise exceptions.AuthenticationFailed('User not found!')

        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
