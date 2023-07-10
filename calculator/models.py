# calculator/models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    mobile_number = models.CharField(max_length=20)
    bmi = models.FloatField(null=True)

    def calculate_bmi(self):
        height_in_meters = self.height / 100  # assuming height is in centimeters
        self.bmi = self.weight / (height_in_meters * height_in_meters)
        self.save()

    def get_bmi_category(self):
        if self.bmi < 18.5:
            return 'Underweight'
        elif self.bmi < 25:
            return 'Normal'
        elif self.bmi < 30:
            return 'Overweight'
        else:
            return 'Obese'
