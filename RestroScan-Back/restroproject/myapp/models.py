from django.db import models
from django.utils import timezone
# Create your models here.
class Restaurant(models.Model):
    owner_name = models.CharField(max_length=100)
    restaurant_name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(default=timezone.now, editable=False)

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now()
        super().save(*args, **kwargs)
    def __str__(self):
        return self.restaurant_name

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile = models.CharField(max_length=15)
    queries = models.TextField()
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(default=timezone.now, editable=False)

    def save(self, *args, **kwargs):
        self.updated_at = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    
from django.db import models

class HomePageContent(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

# models.py
from django.db import models

class Benefit(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title

class Feature(models.Model):
    title = models.CharField(max_length=100)
    # description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='feature_images/', blank=True, null=True)

    def __str__(self):
        return self.title

class RestaurantConnected(models.Model):
    name = models.CharField(max_length=255)
    icon = models.ImageField(upload_to='restaurant_icons/' , blank=True, null=True)

    def __str__(self):
        return self.name
    
class GalleryInfo(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class GalleryItem(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='gallery_images/' , blank=True, null=True)

    def __str__(self):
        return self.title
    
class PricingContent(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='pricing_images/')
    
    def __str__(self):
        return self.title

class AboutUs(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class AboutUsSection(models.Model):
    title = models.CharField(max_length=255)
    paragraphs = models.TextField()  
    roots_title = models.CharField(max_length=255, default='', blank=True)  
    roots_content = models.TextField(default='', blank=True)

    def __str__(self):
        return self.title

class AboutUsSection1(models.Model):
    title = models.CharField(max_length=255)
    paragraphs = models.TextField()

    def __str__(self):
        return self.title

class AboutUsIndustriesSection(models.Model):
    title = models.CharField(max_length=255)
    industries_list = models.TextField()

    def __str__(self):
        return self.title
    
class SuccessStorySection(models.Model):
    title = models.CharField(max_length=255)
    paragraphs  = models.TextField()

    def __str__(self):
        return self.title

class ContactUsSection(models.Model):
    title = models.CharField(max_length=255)  # h2 tag
    description = models.TextField()  # First p tag
    company_name = models.CharField(max_length=255)  # h5 tag
    company_address = models.TextField()  # Second p tag

    def __str__(self):
        return self.title