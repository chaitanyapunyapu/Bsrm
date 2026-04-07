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
import jwt
import datetime
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


from rest_framework import status

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'message': 'User registered successfully'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.filter(username=username).first()

        if user is None:
            return Response({'error': 'User not found!'}, status=status.HTTP_404_NOT_FOUND)

        if not user.check_password(password):
            return Response({'error': 'Incorrect password!'}, status=status.HTTP_401_UNAUTHORIZED)

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        # It's better to use an environment variable for the secret in production
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        # BSRM frontend expects 'token' in the JSON response
        response.data = {
            'token': token,
            'jwt': token
        }
        return response
    
class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            # Check Authorization header as fallback if cookies aren't used
            auth_header = request.headers.get('Authorization')
            if auth_header and auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]
            else:
                return Response({'error': 'Unauthenticated!'}, status=status.HTTP_401_UNAUTHORIZED)

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Token expired!'}, status=status.HTTP_401_UNAUTHORIZED)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid token!'}, status=status.HTTP_401_UNAUTHORIZED)

        user = User.objects.filter(id=payload['id']).first()
        if not user:
            return Response({'error': 'User not found!'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
