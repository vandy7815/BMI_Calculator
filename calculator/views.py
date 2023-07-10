# calculator/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User

@api_view(['POST'])
def calculate_bmi(request):
    name = request.data.get('name')
    age = request.data.get('age')
    height = int(request.data.get('height'))
    weight = int(request.data.get('weight'))
    mobile_number = request.data.get('mobile_number')

    user = User.objects.create(
        name=name,
        age=age,
        height=height,
        weight=weight,
        mobile_number=mobile_number
    )
    user.calculate_bmi()

    return Response({'bmi_category': user.get_bmi_category()})
