	
from datetime import datetime
from email.mime import message
from email.policy import default
from operator import mod
from time import time
from django.db import models

# Create your models here.
# model for all users 
class   myUser(models.Model):
    usert=(
        ("ngo","NGO"),("doner","Doner"),("consumer","consumer")
    )
    usertype=models.CharField(max_length=10,default='',choices=usert)
    username=models.CharField(max_length=50)
    email=models.CharField(max_length=50,default='')
    password=models.CharField(max_length=50)
    
    def __str__(Self):
        return Self.username





class userdetail(models.Model):
    fullname=models.CharField(max_length=50,default='')
    phoneno=models.CharField(max_length=50,default = '')
    aadhar=models.CharField(max_length=50,default = '')
    address=models.CharField(max_length=500,default='')
    city=models.CharField(max_length=500,default='')
    state=models.CharField(max_length=500,default='')
    zip=models.CharField(max_length=50,default='')
    user=models.ForeignKey(myUser,on_delete=models.CASCADE)
    def __str__(Self):
        return Self.fullname

class donation(models.Model):
    foodt=(
        ("Rice","Rice"),("Wheat","Wheat"),("Corn","Corn"),
        ("Jowar","Jowar"),("Bajri","Bajri"),("Moong Dal","Moong Dal"),
        ("Masoor Dal","Masoor Dal"),("Urad Dal","Urad Dal"),("Chana Dal","Chana Dal"),
        ("Toor Dal","Toor Dal"),("Rajma","Rajma"),("Soy Bean","Soy Bean")
    )
    donate_date=models.DateTimeField(default=datetime.now) 
    foodtype=models.CharField(max_length=50,default='',choices=foodt)
    quantity=models.IntegerField(default=0)
    dateofc=models.DateField(default='')
    timeofc=models.TimeField(default='')
    # image = models.ImageField(upload_to='images',default='')
    address=models.CharField(max_length=500,default='')
    status=models.CharField(max_length=10,default='Pending')  
    user=models.ForeignKey(userdetail,on_delete=models.CASCADE)
    def __str__(Self):
        return Self.foodtype

class fooddata(models.Model):
    foodtype=models.CharField(max_length=50,default='')
    quantity=models.IntegerField(default=0)
    available=models.BooleanField(default=False)
    message=models.BooleanField(default=False)
    # image = models.ImageField(upload_to='images',default='')
    def __str__(Self):
        return Self.foodtype





class foodpack(models.Model):
    foodt=(
        ("Rice","Rice"),("Wheat","Wheat"),("Corn","Corn"),
        ("Jowar","Jowar"),("Bajri","Bajri"),("Moong Dal","Moong Dal"),
        ("Masoor Dal","Masoor Dal"),("Urad Dal","Urad Dal"),("Chana Dal","Chana Dal"),
        ("Toor Dal","Toor Dal"),("Rajma","Rajma"),("Soy Bean","Soy Bean")
    )
    packName=models.CharField(max_length=50,default='')
    food1=models.CharField(max_length=50,default='',choices=foodt)
    food2=models.CharField(max_length=50,default='',choices=foodt) 
    food3=models.CharField(max_length=50,default='',choices=foodt) 
    food4=models.CharField(max_length=50,default='',choices=foodt)
    quantity=models.CharField(max_length=10,default='') 
    available=models.BooleanField(default=False)
    message=models.BooleanField(default=False) 
    def __str__(Self):
        return Self.packName       
# cart model

class cart(models.Model):
    user=models.ForeignKey(userdetail,on_delete=models.CASCADE)
    created_date=models.DateTimeField(default=datetime.now)
    def __str__(Self):
        return Self.user.fullname

class cartItem(models.Model):
    foodtype=models.ForeignKey(fooddata,on_delete=models.CASCADE)
    quantity=models.CharField(max_length=10,default=0)
    cart=models.ForeignKey(cart,on_delete=models.CASCADE)
    status=models.CharField(max_length=10,default='Pending')
    order_date=models.DateTimeField(default=datetime.now) 
    def __str__(Self):
        return Self.foodtype.foodtype

class packCart(models.Model):
    foodpack=models.ForeignKey(foodpack,on_delete=models.CASCADE)
    quantity=models.CharField(max_length=10,default=0)
    cart=models.ForeignKey(cart,on_delete=models.CASCADE)
    status=models.CharField(max_length=10,default='Pending')
    order_date=models.DateTimeField(default=datetime.now) 
    def __str__(Self):
        return Self.foodpack.packName

class feedback(models.Model):

    desc=models.CharField(max_length=500)
    pic=models.ImageField(upload_to="images",null=True)
    user=models.ForeignKey(userdetail,on_delete=models.CASCADE)
    def __str__(self):
        return self.user.fullname

class gallarypics(models.Model):
    pics=models.ImageField(upload_to="img")
    # def __str__(self):
    #     return self.user.fullname


class cookedmeald(models.Model):
    name=models.CharField(max_length=50,default='')        
    datedonation=models.DateTimeField(default=datetime.now)
    quantity=models.IntegerField(default=0)
    dateofc=models.DateField(default='')
    timeofc=models.TimeField(default='')
    address=models.CharField(max_length=500,default='')
    status=models.CharField(max_length=10,default='Pending')  
    user=models.ForeignKey(userdetail,on_delete=models.CASCADE)
    def __str__(Self):
        return Self.name