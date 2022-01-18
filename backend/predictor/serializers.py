from rest_framework import serializers
from .models import StudentData

class StudentDataSerializers(serializers.Serializer) :
    studentID = serializers.CharField()
    Complete1 = serializers.IntegerField()
    CompleteCIP1  = serializers.IntegerField()
    CompleteDevEnglish = serializers.IntegerField()
    CompleteDevMath = serializers.IntegerField()
    CumGPA = serializers.DecimalField(max_digits=1000000, decimal_places=5)
    CumLoanAtEntry = serializers.DecimalField(max_digits=1000000, decimal_places=5)
    Dropout = serializers.IntegerField()
    EngPlacement = serializers.IntegerField()
    EnrollmentStatus = serializers.IntegerField()
    FathersHighestGradeLevel = serializers.IntegerField()
    GatewayEnglishStatus = serializers.IntegerField()
    HSDip = serializers.IntegerField()
    HighDeg = serializers.IntegerField()
    Major1 = serializers.IntegerField()
    NumColCredAcceptTransfer = serializers.IntegerField()
    NumColCredAttemptTransfer = serializers.IntegerField()
    TermGPA = serializers.DecimalField(max_digits=1000000, decimal_places=5)
    TotalGrant  = serializers.DecimalField(max_digits=1000000, decimal_places=5)
    TotalScholarship  = serializers.DecimalField(max_digits=1000000, decimal_places=5)
    TotalLoan   = serializers.DecimalField(max_digits=1000000, decimal_places=5)
    TotalWorkStudy  = serializers.DecimalField(max_digits=1000000, decimal_places=5)