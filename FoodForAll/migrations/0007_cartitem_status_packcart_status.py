# Generated by Django 4.0.1 on 2022-03-03 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FoodForAll', '0006_packcart'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartitem',
            name='status',
            field=models.CharField(default='send', max_length=10),
        ),
        migrations.AddField(
            model_name='packcart',
            name='status',
            field=models.CharField(default='send', max_length=10),
        ),
    ]