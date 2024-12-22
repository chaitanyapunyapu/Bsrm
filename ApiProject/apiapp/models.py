from django.db import models

from django.contrib.auth.models import AbstractUser

# Create your models here.
def upload_path(instance, filname):
    return '/'.join(['covers', str(instance.title), filname])

class Honda(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Bajaj(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Hero(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Ktm(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Rc(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Suzuki(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Tvs(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Yamaha(models.Model):
    Model=models.CharField(max_length=32)
    Type=models.CharField(max_length=256)
    price=models.IntegerField()
    Engine=models.CharField(max_length=256)
    Gears=models.CharField(max_length=256)
    vimg=models.CharField(max_length=500)
    # cover=models.ImageField(blank=True, null=True, upload_to=upload_path)
    def __str__(self):
        return self.Model
    
class Logo(models.Model):
    logo=models.CharField(max_length=500)
    alt=models.CharField(max_length=100)
    link=models.CharField(max_length=100)
    
    def __str__(self):
        return self.alt
    
    
# class User(AbstractUser):
#     name = models.CharField(max_length=255)
#     email = models.CharField(max_length=255, unique=True)
#     password = models.CharField(max_length=255)
#     username = None

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []
    