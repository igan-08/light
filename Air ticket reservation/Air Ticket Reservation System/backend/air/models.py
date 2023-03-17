from django.db import models

# Create your models here.

class Flight(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    source = models.CharField(max_length=50)
    destination = models.CharField(max_length=50)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    airline = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
class Ticket(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    passenger_name = models.CharField(max_length=50)
    passenger_age = models.IntegerField()
    passenger_gender = models.CharField(max_length=10)
    seat_number = models.IntegerField()
    booking_date = models.DateTimeField(auto_now_add=True)
    airline = models.CharField(max_length=50, blank=True)

class Login(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

class Register(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.EmailField()

class ContactMessage(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    message = models.TextField()

