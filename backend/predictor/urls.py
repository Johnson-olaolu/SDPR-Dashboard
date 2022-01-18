from django.urls import path
from .views import StudentDataAPIView

urlpatterns = [
    path('predictor/', StudentDataAPIView.as_view())
]