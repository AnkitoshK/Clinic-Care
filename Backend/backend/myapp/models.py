from django.db import models

from django.db import models

class Appointment(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    email = models.EmailField()  # Ensure this is required or has null=True if optional
    appointment_date_time = models.DateTimeField()
    doctor = models.CharField(max_length=255)
    service = models.CharField(max_length=255)
    description = models.TextField()
    payment_screenshot = models.ImageField(upload_to="payments/")

    def __str__(self):
        return f"{self.name} - {self.service}"

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

class ContactPageText(models.Model):
    clinic_name = models.CharField(max_length=200)
    address = models.TextField()
    phone1 = models.CharField(max_length=15)
    phone2 = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField()

    def __str__(self):
        return self.clinic_name

class Blog(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='blog_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    symptoms = models.TextField()
    cure = models.TextField()
    image = models.ImageField(upload_to='service_images/')
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set on creation

    def __str__(self):
        return self.title

class AboutUs(models.Model):
    # Main Title (e.g., Dr. Nayab Anjum)
    main_title = models.CharField(max_length=255)

    # Subheading (e.g., MBBS, M.D)
    subheading = models.CharField(max_length=255)

    # Description (about the doctor or service)
    description = models.TextField()

    # Images for the page (you can upload these images)
    image_1 = models.ImageField(upload_to='about_us_images/', null=True, blank=True)
    image_2 = models.ImageField(upload_to='about_us_images/', null=True, blank=True)
    image_3 = models.ImageField(upload_to='about_us_images/', null=True, blank=True)

    # Blog section (this can be dynamic too)
    blog_title_1 = models.CharField(max_length=255)
    blog_description_1 = models.TextField()
    blog_image_1 = models.ImageField(upload_to='about_us_images/', null=True, blank=True)

    blog_title_2 = models.CharField(max_length=255)
    blog_description_2 = models.TextField()
    blog_image_2 = models.ImageField(upload_to='about_us_images/', null=True, blank=True)

    blog_title_3 = models.CharField(max_length=255)
    blog_description_3 = models.TextField()
    blog_image_3 = models.ImageField(upload_to='about_us_images/', null=True, blank=True)

    def __str__(self):
        return self.main_title

class ServiceHome(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')

    def __str__(self):
        return self.title
# Slider Model
class ImageSlider(models.Model):
    image = models.ImageField(upload_to='sliders/')
    def __str__(self):
        return str(self.image)  # To display the image path in the admin panel

# Model for Blog Section
class BlogHome(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to='blogs/')  # Ensure 'upload_to' is set

    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url
        return None

class GalleryImage(models.Model):
    image = models.ImageField(upload_to='gallery/')

    def __str__(self):
        return str(self.image)  # To display the image path in the admin panel

class GalleryMain(models.Model):
    image = models.ImageField(upload_to='gallery_images/')
    alt_text = models.CharField(max_length=255)

    def __str__(self):
        return self.alt_text


class Testimonial(models.Model):
    avatar = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    text = models.TextField()
    author = models.CharField(max_length=255)
    rating = models.CharField(max_length=5)

    def __str__(self):
        return f"Testimonial by {self.author}"