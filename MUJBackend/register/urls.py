# api/urls.py
from django.urls import path
from register.views import ArtisanRegistrationView

urlpatterns = [
    path('register/artisians/', ArtisanRegistrationView.as_view(), name='register_artisan'),  # Fixed typo
]