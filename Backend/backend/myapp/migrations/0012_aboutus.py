# Generated by Django 5.1.4 on 2025-01-14 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0011_delete_aboutus_delete_blogcard'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('main_title', models.CharField(max_length=255)),
                ('subheading', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image_1', models.ImageField(blank=True, null=True, upload_to='about_us_images/')),
                ('image_2', models.ImageField(blank=True, null=True, upload_to='about_us_images/')),
                ('image_3', models.ImageField(blank=True, null=True, upload_to='about_us_images/')),
                ('blog_title_1', models.CharField(max_length=255)),
                ('blog_description_1', models.TextField()),
                ('blog_image_1', models.ImageField(blank=True, null=True, upload_to='about_us_images/')),
                ('blog_title_2', models.CharField(max_length=255)),
                ('blog_description_2', models.TextField()),
                ('blog_image_2', models.ImageField(blank=True, null=True, upload_to='about_us_images/')),
                ('blog_title_3', models.CharField(max_length=255)),
                ('blog_description_3', models.TextField()),
                ('blog_image_3', models.ImageField(blank=True, null=True, upload_to='about_us_images/')),
            ],
        ),
    ]
