from rest_framework import viewsets
from .models import Contact
from .models import Restaurant
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RestaurantSerializer
from .serializers import ContactSerializer,SuccessStorySectionSerializer
from .models import HomePageContent,SuccessStorySection
from .serializers import HomePageContentSerializer
from .models import Benefit,AboutUs,AboutUsSection
from .serializers import BenefitSerializer,PricingContentSerializer
from .models import Feature,AboutUsSection1,PricingContent,AboutUsIndustriesSection
from .serializers import FeatureSerializer,AboutUsSerializer,AboutUsSectionSerializer,AboutUsSection1Serializer,AboutUsIndustriesSectionSerializer
from .serializers import RestaurantConnectedSerializer
from .models import RestaurantConnected,ContactUsSection
from .models import GalleryItem ,GalleryInfo
from .serializers import GalleryItemSerializer , GalleryInfoSerializer,ContactUsSectionSerializer

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class HomePageContentView(APIView):
    def get(self, request):
        content = HomePageContent.objects.first()  # assuming you only have one entry for now
        if content:
            serializer = HomePageContentSerializer(content)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"error": "Content not found"}, status=status.HTTP_404_NOT_FOUND)

class BenefitsView(APIView):
    def get(self, request):
        benefits = Benefit.objects.all()
        serializer = BenefitSerializer(benefits, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)            
    
class FeaturesView(APIView):
    def get(self, request):
        features = Feature.objects.all()
        serializer = FeatureSerializer(features, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RestaurantConnectedListView(APIView):
    def get(self, request):
        restaurants = RestaurantConnected.objects.all()
        serializer = RestaurantConnectedSerializer(restaurants, many=True)
        return Response(serializer.data)

class GalleryInfoView(APIView):
    def get(self, request):
        info = GalleryInfo.objects.first()
        serializer = GalleryInfoSerializer(info)
        return Response(serializer.data)

class GalleryListView(APIView):
    def get(self, request):
        gallery_items = GalleryItem.objects.all()
        serializer = GalleryItemSerializer(gallery_items, many=True)
        return Response(serializer.data)
    
class PricingContentListView(APIView):
    def get(self, request):
        pricing_content_items = PricingContent.objects.all()
        serializer = PricingContentSerializer(pricing_content_items, many=True)
        return Response(serializer.data)

class AboutUsListView(APIView):
    def get(self, request):
        about_us_items = AboutUs.objects.all()
        serializer = AboutUsSerializer(about_us_items, many=True)
        return Response(serializer.data)

class AboutUsSectionView(APIView):
    def get(self, request):
        sections = AboutUsSection.objects.all()
        serializer = AboutUsSectionSerializer(sections, many=True)
        return Response(serializer.data)
    
class AboutUsSection1View(APIView):
    def get(self, request):
        sections = AboutUsSection1.objects.all()
        serializer = AboutUsSection1Serializer(sections, many=True)
        return Response(serializer.data)
    
class AboutUsIndustriesSectionView(APIView):
    def get(self, request):
        sections = AboutUsIndustriesSection.objects.all()
        serializer = AboutUsIndustriesSectionSerializer(sections, many=True)
        return Response(serializer.data)

class SuccessStorySectionView(APIView):
    def get(self, request):
        sections = SuccessStorySection.objects.all()
        serializer = SuccessStorySectionSerializer(sections, many=True)
        return Response(serializer.data)
    
class ContactUsSectionView(APIView):
    def get(self, request):
        sections = ContactUsSection.objects.all()
        serializer = ContactUsSectionSerializer(sections, many=True)
        return Response(serializer.data)