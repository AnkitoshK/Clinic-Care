# serializers.py

from rest_framework import serializers
from django.conf import settings
from .models import Appointment
from .models import ContactMessage
from .models import ContactPageText
from .models import Blog
from .models import Service
from .models import AboutUs
from .models import ServiceHome
from .models import ImageSlider, BlogHome,GalleryImage,Testimonial,GalleryMain


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['name', 'phone', 'appointment_date_time', 'doctor', 'service', 'description', 'payment_screenshot']

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']

class ContactPageTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactPageText
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = [ 'title', 'description', 'image']


class ServiceSerializer(serializers.ModelSerializer):
    symptoms = serializers.SerializerMethodField()
    cure = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = ['title', 'description', 'symptoms', 'cure', 'image']

    def get_symptoms(self, obj):
        return obj.symptoms.split(",") if obj.symptoms else []

    def get_cure(self, obj):
        return obj.cure.split(",") if obj.cure else []

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = [
            'main_title', 'subheading', 'description',
            'image_1', 'image_2', 'image_3',
            'blog_title_1', 'blog_description_1', 'blog_image_1',
            'blog_title_2', 'blog_description_2', 'blog_image_2',
            'blog_title_3', 'blog_description_3', 'blog_image_3'
        ]
class ServiceHomeSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url)

    class Meta:
        model = ServiceHome
        fields = ['id', 'title', 'description', 'image']


class BlogHomeSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogHome
        fields = ('id', 'title', 'content', 'image_url')

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.image.url)
        return None

class ImageSliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageSlider
        fields = '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = ['image']  # Exclude 'id'

    def get_image(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url)

class GalleryMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryMain
        fields = ['id', 'image', 'alt_text']  # Adjust the fields as needed


class TestimonialSerializer(serializers.ModelSerializer):
    avatar = serializers.SerializerMethodField()

    class Meta:
        model = Testimonial
        fields = ['id', 'avatar', 'text', 'author', 'rating']

    def get_avatar(self, obj):
        # Returns the full URL for the avatar image
        request = self.context.get('request')
        return request.build_absolute_uri(obj.avatar.url) if obj.avatar else None