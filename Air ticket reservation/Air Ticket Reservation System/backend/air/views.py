from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FlightSerializer, TicketSerializer, LoginSerializer, RegisterSerializer,ContactMessageSerializer
from .models import Flight, Ticket, Login, Register,ContactMessage



# Create your views here.
class FlightView(viewsets.ModelViewSet):
    serializer_class = FlightSerializer
    queryset = Flight.objects.all()
    



class TicketView(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()

    def perform_create(self, serializer):
        flight = serializer.validated_data.get('flight')
        serializer.save(airline=flight.name)

    def perform_update(self, serializer):
        flight = serializer.validated_data.get('flight')
        serializer.save(airline=flight.name)

class LoginView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer
    queryset = Login.objects.all()

class RegisterView(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = Register.objects.all()
    
class ContactMessageView(viewsets.ModelViewSet):
    serializer_class = ContactMessageSerializer
    queryset = ContactMessage.objects.all()