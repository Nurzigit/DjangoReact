from django.shortcuts import render

from rest_framework import generics
from .models import Product
from rest_framework import viewsets
from .serializers import ProductSerializer
from rest_framework.parsers import MultiPartParser
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = [MultiPartParser]
