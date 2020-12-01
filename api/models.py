from django.db import models


class Artist(models.Model):
    artist_name = models.CharField(max_length=100, unique=False)
    username_artist = models.CharField(max_length=100, unique=True)
    emailId = models.EmailField(max_length=100, default="")
    upiId = models.CharField(max_length=20, default="")
    groupName = models.CharField(max_length=100, default="", unique=False)
    contactNo_art = models.CharField(max_length=13, default="", unique=False)
    city = models.CharField(max_length=100, default="", unique=False)
    state = models.CharField(max_length=100, default="", unique=False)
    country = models.CharField(max_length=100, default="", unique=False)
    profile_pic = models.ImageField(default="")
    artist_category = models.CharField(max_length=100, blank=False, unique=False)
    artist_bio = models.CharField(max_length=600, default="", unique=False)
    is_Booked = models.BooleanField(default="True")


class Customer(models.Model):
    customer_name = models.CharField(max_length=100, unique=False)
    username_cust = models.CharField(max_length=100, unique=True)
    emailId_cust = models.EmailField(max_length=100, default="")
    contactNo_cust = models.CharField(max_length=13, default="", unique=False)
    city = models.CharField(max_length=100, default="", unique=False)
    state = models.CharField(max_length=100, default="", unique=False)
    country = models.CharField(max_length=100, default="", unique=False)
    profile_pic = models.ImageField(default="")


""" 
-----------------------------------
    work sample photo
    work sample video


"""

"""
CUSTOMER :
    name
    emailID
    profile pic
    contactNo
    city 
    state
    country


    ("Singer", "Singer"),
        ("Dance", "Dancer"),
        ("Folk Singer", "Folk Singer"),
        ("Folk Dancer", "Folk Dancer"),
        ("Potter", "Potter"),
        ("Painter", "Painter"),
        ("Painter", "Painter"),
"""
