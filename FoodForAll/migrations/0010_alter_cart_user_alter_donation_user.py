# Generated by Django 4.0.1 on 2022-03-06 06:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('FoodForAll', '0009_rename_firstname_userdetail_fullname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='FoodForAll.userdetail'),
        ),
        migrations.AlterField(
            model_name='donation',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='FoodForAll.userdetail'),
        ),
    ]
