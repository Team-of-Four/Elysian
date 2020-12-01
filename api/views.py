from django.shortcuts import render
from rest_framework import generics

# Create your views here.
from .models import *
from .serializers import *


class ArtistView(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class CustomerView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


def baseView(request):
    return render(request, "api/base.html")
