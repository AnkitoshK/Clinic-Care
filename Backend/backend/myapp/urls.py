from django.urls import path
from .views import AppointmentCreateView
from .views import ContactMessageView
from .views import ContactPageTextView
from .views import BlogListView
from .views import ServiceListView
from .views import AboutUsView
from .views import ServiceHomeList
# from .views import ImageSliderList, BlogList, AddressList
from .views import GalleryImageView,TestimonialListView
from .views import BlogHomeView, ImageSliderView,GalleryMainView



urlpatterns = [
    path('appointment/', AppointmentCreateView.as_view(), name='create-appointment'),
    path('contact/', ContactMessageView.as_view(), name='contact'),
    path('contact-text/', ContactPageTextView.as_view(), name='contactpagetext'),
    path('blogs/', BlogListView.as_view(), name='blog-list'),
    path('services/', ServiceListView.as_view(), name='service-list'),
    path('about-us/', AboutUsView.as_view(), name='about-us'),
    path('servicehome/', ServiceHomeList.as_view(), name='service-list'),
    path('gallery-main/', GalleryMainView.as_view(), name='gallery-main'),
    path('gallery-images/', GalleryImageView.as_view(), name='gallery-images'),
    path('testimonials/', TestimonialListView.as_view(), name='testimonial-list'),
    path('bloghome/', BlogHomeView.as_view(), name='blog-list'),
    path('imageslider/', ImageSliderView.as_view(), name='slider-list'),
    # path('address/', AddressView.as_view(), name='address-list'),
]
