from rest_framework import viewsets
from .models import Artisan
from .serializers import ArtisanSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.views import View

# Create your views here.

class ArtisanViewSet(viewsets.ModelViewSet):
    queryset = Artisan.objects.all()
    serializer_class = ArtisanSerializer
    def get_serializer_class(self):
        return self.serializer_class

    def create(self, request, *args, **kwargs):
        parser_classes = (MultiPartParser, FormParser)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ArtisanRegistrationView(View):
    def get(self, request):
        return JsonResponse({"message": "Artisan registration endpoint"})

    def post(self, request):
        # Example implementation for POST
        return JsonResponse({"message": "Artisan registered successfully"}, status=201)

