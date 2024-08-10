# Generated by Django 5.0.6 on 2024-06-30 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0017_successstorysection'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUsSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('company_name', models.CharField(max_length=255)),
                ('company_address', models.TextField()),
            ],
        ),
    ]
