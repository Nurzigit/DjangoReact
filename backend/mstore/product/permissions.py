from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly

# class IsAuthenticatedOrCreateOnly(IsAuthenticated):
#     """
#     Дополнение класса IsAuthenticated, который разрешает POST-запросы
#     для создания ресурсов только для авторизованных пользователей.
#     """
#     def has_permission(self, request, view):
#         if request.method == 'POST':
#             return request.user and request.user.is_authenticated
#         return super().has_permission(request, view)


class ReadOnlyOrIsAuthenticated(AllowAny):
    """
    Разрешение на чтение данных неавторизованным пользователям,
    на запись - только авторизованным пользователям.
    """
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True
        return request.user and request.user.is_authenticated
    
from rest_framework.permissions import AllowAny

class AllowAll(AllowAny):
    """
    Разрешение на чтение и запись данных всем пользователям.
    """
    pass

class AllowAllChange(IsAuthenticatedOrReadOnly):
    """
    Разрешение на изменение и создание данных всем авторизованным пользователям.
    """
    pass