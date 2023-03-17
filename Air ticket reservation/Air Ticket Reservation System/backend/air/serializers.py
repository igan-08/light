from rest_framework import serializers

from .models import Flight,Ticket,Login, Register,ContactMessage

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = ('id','source','destination','departure_time','arrival_time',
                    'airline','price')


class TicketSerializer(serializers.ModelSerializer):
    airline = serializers.SerializerMethodField()

    class Meta:
        model = Ticket
        fields = ('id','flight', 'passenger_name', 'passenger_age', 'passenger_gender',
                  'seat_number', 'booking_date', 'airline')

    def get_airline(self, obj):
        return obj.flight.id

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('username', 'password')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ('username', 'password', 'email')
    
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ('name', 'email','message')