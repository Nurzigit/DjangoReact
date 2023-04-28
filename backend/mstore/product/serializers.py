from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image', 'category']

    def create(self, validated_data):
        category_data = validated_data.pop('category', None)
        if category_data:
            category_serializer = CategorySerializer(data=category_data)
            category_serializer.is_valid(raise_exception=True)
            category = category_serializer.save()
        else:
            category = None
        product = Product.objects.create(category=category, **validated_data)
        return product
    
    def update(self, instance, validated_data):
        category_data = validated_data.pop('category')
        category_serializer = CategorySerializer(instance.category, data=category_data)
        if category_serializer.is_valid():
            category_serializer.save()
        return super().update(instance, validated_data)
