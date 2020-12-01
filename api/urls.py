from django.urls import path
from .views import *

urlpatterns = [
    path("", ArtistView.as_view()),
    path("customer/", CustomerView.as_view()),
    path("test/", baseView),
]
