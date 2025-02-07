from django.contrib import admin
from .models import Appointment,ContactMessage,ContactPageText,Blog,Service, AboutUs
from .models import ServiceHome
from .models import ImageSlider, BlogHome,GalleryImage,Testimonial,GalleryMain


class AppointmentAdmin(admin.ModelAdmin):
    list_display = [ 'name','phone','appointment_date_time','doctor','service','description','payment_screenshot']

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'message']  # Update fields based on your Contact model

class ContactPageTextAdmin(admin.ModelAdmin):
    list_display = ('clinic_name','address', 'phone1','phone2', 'email')

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'description','image')

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'description','symptoms','cure','image')  #

class AboutUsAdmin(admin.ModelAdmin):
    # List of fields to display in the list view of the admin panel
    list_display = ['main_title', 'subheading', 'description']

    # Fields to display in the form view for creating or editing AboutUs entries
    fields = ['main_title', 'subheading', 'description',
              'image_1', 'image_2', 'image_3',
              'blog_title_1', 'blog_description_1', 'blog_image_1',
              'blog_title_2', 'blog_description_2', 'blog_image_2',
              'blog_title_3', 'blog_description_3', 'blog_image_3']


class ServiceHomeAdmin(admin.ModelAdmin):
    list_display = ('title', 'description','image')

# Blog Model Admin
class BlogHomeAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'image')  # Fields to display in the list view


# Slider Model Admin
class ImageSliderAdmin(admin.ModelAdmin):
    list_display = ('image',)  # Fields to display in the list view
    def image_display(self, obj):
        return obj.image.url  # Adjust if needed to display the image URL
    image_display.short_description = 'Image URL'
# Check if the model is already registered before registering again
if not admin.site.is_registered(ImageSlider):
    admin.site.register(ImageSlider, ImageSliderAdmin)

# Gallery Model Admin
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('image_display',)

    def image_display(self, obj):
        return obj.image.url  # Adjust if needed to display the image URL
    image_display.short_description = 'Image URL'
# Check if the model is already registered before registering again
if not admin.site.is_registered(GalleryImage):
    admin.site.register(GalleryImage, GalleryImageAdmin)

# Gallery Model Admin
class GalleryMainAdmin(admin.ModelAdmin):
    list_display = ['id', 'image', 'alt_text']

admin.site.register(GalleryMain, GalleryMainAdmin)

class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['avatar', 'text', 'author', 'rating']

# Register the model
admin.site.register(Appointment,AppointmentAdmin)
admin.site.register(ContactMessage,ContactMessageAdmin)
admin.site.register(ContactPageText,ContactPageTextAdmin)
admin.site.register(Blog,BlogAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(AboutUs, AboutUsAdmin)
admin.site.register(ServiceHome, ServiceHomeAdmin)
# admin.site.register(ImageSlider, ImageSliderAdmin)
admin.site.register(BlogHome, BlogHomeAdmin)
# admin.site.register(Address, AddressAdmin)
admin.site.register(Testimonial, TestimonialAdmin)


