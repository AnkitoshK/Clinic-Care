# Generated by Django 5.1.4 on 2025-01-14 07:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0010_alter_blogcard_link'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AboutUs',
        ),
        migrations.DeleteModel(
            name='BlogCard',
        ),
    ]
