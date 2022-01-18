from django.shortcuts import render
from .serializers import StudentDataSerializers
from .models import StudentData
from django.views.decorators.csrf import csrf_exempt
# from rest_framework.decorators import api_views
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
# Create your views here.


class StudentDataAPIView(APIView) :

    def get(self, request) :
        student_data = StudentData.objects.all()
        serializer = StudentDataSerializers(student_data, many = True)
        return Response(serializer.data)

    def post(self, request) :
        print (request.FILES['file'])
        return Response({})