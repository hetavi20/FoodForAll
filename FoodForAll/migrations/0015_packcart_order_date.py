# Generated by Django 4.0.1 on 2022-03-11 08:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FoodForAll', '0014_foodpack_quantity_alter_foodpack_food1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='packcart',
            name='order_date',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
