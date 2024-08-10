from django.contrib import admin
from django.utils.timezone import localtime
from .models import Restaurant, Contact,ContactUsSection
from .models import HomePageContent
from .models import Benefit,PricingContent
from .models import Feature,SuccessStorySection
from .models import RestaurantConnected,AboutUs,AboutUsSection,AboutUsSection1,AboutUsIndustriesSection
from .models import GalleryItem ,GalleryInfo


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner_name', 'restaurant_name', 'email', 'mobile_number', 'created_at_local', 'updated_at_local')

    def created_at_local(self, obj):
        return localtime(obj.created_at).strftime('%B %d, %Y, %I:%M %p')

    def updated_at_local(self, obj):
        return localtime(obj.updated_at).strftime('%B %d, %Y, %I:%M %p')

    created_at_local.short_description = 'Created At'
    updated_at_local.short_description = 'Updated At'

class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'mobile', 'queries', 'created_at_local', 'updated_at_local')

    def created_at_local(self, obj):
        return localtime(obj.created_at).strftime('%B %d, %Y, %I:%M %p')

    def updated_at_local(self, obj):
        return localtime(obj.updated_at).strftime('%B %d, %Y, %I:%M %p')

    created_at_local.short_description = 'Created At'
    updated_at_local.short_description = 'Updated At'


class HomePageContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

class BenefitAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

class FeatureAdmin(admin.ModelAdmin):
    list_display = ('title', 'image')

class RestaurantConnectedAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon')

class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image')

class GalleryInfoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

class AboutUsAdmin(admin.ModelAdmin):
    list_display = ('title','description')

class PricingContentAdmin(admin.ModelAdmin):
    list_display = ('title','image')

class AboutUsSectionAdmin(admin.ModelAdmin):
    list_display = ('title','paragraphs','roots_title','roots_content') 

class AboutUsSection1Admin(admin.ModelAdmin):
    list_display = ('title','paragraphs')

class AboutUsIndustriesSectionAdmin(admin.ModelAdmin):
    list_display = ('title','industries_list')

class SuccessStorySectionAdmin(admin.ModelAdmin):
    list_display = ('title','paragraphs')

class ContactUsSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'company_name','company_address')
    # search_fields = ('title', 'company_name')  # Add search capability
    # list_filter = ('title',)  # Add filter capability
    # fields = ('title', 'description', 'company_name', 'company_address')

admin.site.register(HomePageContent, HomePageContentAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Benefit, BenefitAdmin)
admin.site.register(Feature, FeatureAdmin)
admin.site.register(RestaurantConnected, RestaurantConnectedAdmin)
admin.site.register(GalleryItem, GalleryItemAdmin)
admin.site.register(GalleryInfo, GalleryInfoAdmin)
admin.site.register(AboutUs, AboutUsAdmin)
admin.site.register(AboutUsSection, AboutUsSectionAdmin)
admin.site.register(AboutUsSection1, AboutUsSection1Admin)
admin.site.register(AboutUsIndustriesSection, AboutUsIndustriesSectionAdmin)
admin.site.register(SuccessStorySection, SuccessStorySectionAdmin)
admin.site.register(ContactUsSection, ContactUsSectionAdmin)
admin.site.register(PricingContent, PricingContentAdmin)