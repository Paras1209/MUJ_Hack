from rest_framework import viewsets
from .models import Artisan
from .serializers import ArtisanSerializer

# Create your views here.

class ArtisanViewSet(viewsets.ModelViewSet):
    queryset = Artisan.objects.all()
    serializer_class = ArtisanSerializer
