# Generated by Django 3.1.2 on 2020-11-26 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20201126_1923'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=100)),
                ('username_cust', models.CharField(max_length=100, unique=True)),
                ('emailId_cust', models.EmailField(default='', max_length=100)),
                ('contactNo_cust', models.CharField(default='', max_length=13)),
                ('city', models.CharField(default='', max_length=100)),
                ('state', models.CharField(default='', max_length=100)),
                ('country', models.CharField(default='', max_length=100)),
                ('profile_pic', models.ImageField(default='', upload_to='')),
            ],
        ),
        migrations.RenameField(
            model_name='artist',
            old_name='contactNo',
            new_name='contactNo_art',
        ),
        migrations.RenameField(
            model_name='artist',
            old_name='username',
            new_name='username_artist',
        ),
    ]
