from django.contrib import admin
from .models import Flight, Ticket, Login, Register,ContactMessage

class FlightAdmin(admin.ModelAdmin):
    list_display = ('id','source', 'destination', 'departure_time','airline','price')

class TicketAdmin(admin.ModelAdmin):
    list_display = ('flight', 'passenger_name', 'passenger_age', 'passenger_gender', 'seat_number', 'booking_date')

class LoginAdmin(admin.ModelAdmin):
     list_display = ('username', 'password')

class RegisterAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email')
# Register your models here.

admin.site.register(Flight, FlightAdmin)
admin.site.register(Ticket, TicketAdmin)
admin.site.register(Login, LoginAdmin)
admin.site.register(Register, RegisterAdmin)