# Generated by Django 4.0.1 on 2022-03-26 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FoodForAll', '0017_delete_mealfood'),
    ]

    operations = [
        migrations.CreateModel(
            name='gallarypics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pics', models.ImageField(upload_to='img')),
            ],
        ),
    ]
