from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RestaurantViewSet, PricingContentListView ,ContactViewSet,AboutUsIndustriesSectionView,ContactUsSectionView
from .views import HomePageContentView, AboutUsSectionView,AboutUsSection1View,SuccessStorySectionView
from .views import BenefitsView,FeaturesView,RestaurantConnectedListView,GalleryListView , GalleryInfoView
from django.conf import settings
from django.conf.urls.static import static
from .views import AboutUsListView

router = DefaultRouter()
router.register(r'restaurants', RestaurantViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('home-page/', HomePageContentView.as_view(), name='page-content'),
    path('benefits/', BenefitsView.as_view(), name='benefits'),
    path('features/', FeaturesView.as_view(), name='features'),
    path('restaurantconnected/', RestaurantConnectedListView.as_view(), name='restaurant-list'),
    path('gallery/items/', GalleryListView.as_view(), name='gallery-list'),
    path('gallery/info/', GalleryInfoView.as_view(), name='gallery-info'),
    path('about-us/', AboutUsListView.as_view(), name='about_us_list'),
    path('about-us-section/info/', AboutUsSectionView.as_view(), name='about_us_section'),
    path('products-and-services-section/', AboutUsSection1View.as_view(), name='products-and-services-section'),
    path('industries-section/', AboutUsIndustriesSectionView.as_view(), name='industries-section'),
    path('success-story/', SuccessStorySectionView.as_view(), name='success-story'),
    path('contact-us-section/', ContactUsSectionView.as_view(), name='contact-us-section'),
    path('pricing_img/', PricingContentListView.as_view(), name='pricing-content-list'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)