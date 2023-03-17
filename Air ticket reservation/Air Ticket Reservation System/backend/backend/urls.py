from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from air import views




router = routers.DefaultRouter()
router.register(r'Flights', views.FlightView, 'Flights')
router.register(r'tickets', views.TicketView, 'ticket')
router.register(r'login', views.LoginView, 'login')
router.register(r'register', views.RegisterView, 'Register')
router.register(r'ContactUs', views.RegisterView, 'ContactUs')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),

    
]

