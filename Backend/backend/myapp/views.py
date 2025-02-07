# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from .models import Appointment
from .serializers import AppointmentSerializer
from .serializers import ContactMessageSerializer
from .models import ContactPageText
from .serializers import ContactPageTextSerializer
from .models import Blog
from .serializers import BlogSerializer
from .models import Service
from .serializers import ServiceSerializer
from .models import AboutUs
from .serializers import AboutUsSerializer
from .models import ServiceHome
from .serializers import ServiceHomeSerializer
from .models import ImageSlider, BlogHome
from .serializers import ImageSliderSerializer, BlogHomeSerializer
from .models import GalleryImage
from .serializers import GalleryImageSerializer
from .models import Testimonial
from .serializers import TestimonialSerializer
from .serializers import GalleryMain
from .serializers import GalleryMainSerializer

class AppointmentCreateView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)  # Debugging step to print incoming data
        print(request.FILES)  # Print the file data for debugging

        # Handle the file and other data
        serializer = AppointmentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# In your ContactMessageView
class ContactMessageView(APIView):
    def post(self, request):
        print("Received request for /contact/")  # Check if the view is hit
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Your message has been received!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ContactPageTextView(APIView):
    def get(self, request):
        try:
            contact_text = ContactPageText.objects.first()  # Assuming only one entry exists
            if contact_text:
                serializer = ContactPageTextSerializer(contact_text)
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({"error": "Contact page data not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class BlogListView(APIView):
    def get(self, request):
        blogs = Blog.objects.all().order_by('-created_at')
        serializer = BlogSerializer(blogs, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

# @csrf_exempt
class ServiceListView(APIView):
    def get(self, request):
        services = Service.objects.all().order_by('-created_at')
        serializer = ServiceSerializer(services, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

class AboutUsView(APIView):
    def get(self, request):
        try:
            about_us = AboutUs.objects.first()  # We assume only one About Us entry
            serializer = AboutUsSerializer(about_us)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except AboutUs.DoesNotExist:
            return Response({"error": "About Us data not found."}, status=status.HTTP_404_NOT_FOUND)

class ServiceHomeList(APIView):
    def get(self, request):
        services = ServiceHome.objects.all()
        serializer = ServiceHomeSerializer(services, many=True, context={'request': request})
        return Response(serializer.data)

class BlogHomeView(APIView):
    def get(self, request):
        blogs = BlogHome.objects.all()
        serializer = BlogHomeSerializer(blogs, many=True, context={'request': request})  # Pass request context
        return Response(serializer.data)

class ImageSliderView(APIView):
    def get(self, request):
        images = ImageSlider.objects.all()
        serializer = ImageSliderSerializer(images, many=True, context={'request': request})
        return Response(serializer.data)

class GalleryImageView(APIView):
    def get(self, request):
        images = GalleryImage.objects.all()
        serializer = GalleryImageSerializer(images, many=True, context={'request': request})
        return Response(serializer.data)

class GalleryMainView(APIView):
    def get(self, request):
        gallery_images = GalleryMain.objects.all()
        serializer = GalleryMainSerializer(gallery_images, many=True)
        return Response(serializer.data)

class TestimonialListView(APIView):
    def get(self, request):
        testimonials = Testimonial.objects.all()
        serializer = TestimonialSerializer(testimonials, many=True, context={'request': request})
        return Response(serializer.data)