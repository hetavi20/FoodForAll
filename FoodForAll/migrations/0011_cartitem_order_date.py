# Generated by Django 4.0.1 on 2022-03-06 07:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FoodForAll', '0010_alter_cart_user_alter_donation_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartitem',
            name='order_date',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
