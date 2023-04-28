from django.contrib import admin
from django.urls import path, include, re_path
from product.views import *


# from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),    
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
     path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
]


# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
    # path('admin/', admin.site.urls),
    # path('api/products/', ProductViewSet.as_view({'get': 'list', 'post': 'create'})),
    # path('api/products/<int:pk>/', ProductViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    # path('api/products/', ProductAPIList.as_view()),
    # path('api/products/<int:pk>/', ProductAPIUpdate.as_view()),
    # path('api/productdelete/<int:pk>/', ProductAPIDestroy.as_view()),
    # path('api/products/<int:pk>/image/images/', ProductImageUploadView.as_view(), name='product_image_upload'),