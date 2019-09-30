from django.urls import path, include
from rest_framework.routers import DefaultRouter

from recipe import views

# default router registers all appropriate urls in our viewset
router = DefaultRouter()
router.register('tags', views.TagViewSet)
router.register('ingredients', views.IngredientViewSet)

app_name = 'recipe'

urlpatterns = [
    path('', include(router.urls))
]
