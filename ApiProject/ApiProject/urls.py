"""ApiProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from apiapp import views

router = routers.DefaultRouter()
router.register(r'honda', views.Hondaviewset)
router.register(r'bajaj',views.Bajajviewset)
router.register(r'hero',views.Heroviewset)
router.register(r'ktm',views.Ktmviewset)
router.register(r'rc',views.Rcviewset)
router.register(r'suzuki',views.Suzukiviewset)
router.register(r'yamaha',views.Yamahaviewset)
router.register(r'tvs',views.Tvsviewset)
router.register(r'logo',views.Logoviewset)

# router.register(r'users',views.UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/',include('apiapp.urls')),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
]
