# Generated by Django 5.1.4 on 2025-01-16 05:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0018_galleryimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='testimonials/')),
                ('text', models.TextField()),
                ('author', models.CharField(max_length=255)),
                ('rating', models.CharField(max_length=5)),
            ],
        ),
    ]
