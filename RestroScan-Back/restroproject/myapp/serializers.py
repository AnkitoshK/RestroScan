from rest_framework import serializers
from .models import Restaurant
from .models import Contact
from .models import HomePageContent,PricingContent
from .models import Benefit,SuccessStorySection,ContactUsSection
from .models import Feature,AboutUs,AboutUsSection,AboutUsSection1,AboutUsIndustriesSection
from .models import RestaurantConnected
from .models import GalleryItem ,GalleryInfo

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class HomePageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePageContent
        fields = ['title', 'description']

class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = ['id', 'title', 'description']

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ['id', 'title', 'image']

class RestaurantConnectedSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantConnected
        fields = ['name', 'icon']

class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = ['title', 'description', 'image']

class GalleryInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryInfo
        fields = ['title', 'description']

class PricingContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PricingContent
        fields = '__all__'

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ['title', 'description']

class AboutUsSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsSection
        fields = ['title', 'paragraphs', 'roots_title', 'roots_content']

class AboutUsSection1Serializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsSection1
        fields = ['title', 'paragraphs']

class AboutUsIndustriesSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsIndustriesSection
        fields = ['title', 'industries_list']

class SuccessStorySectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStorySection
        fields = ['title', 'paragraphs']

class ContactUsSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsSection
        fields = ['title', 'description', 'company_name', 'company_address']