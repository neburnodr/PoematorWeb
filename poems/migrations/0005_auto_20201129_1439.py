# Generated by Django 3.1.3 on 2020-11-29 14:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('poems', '0004_auto_20201129_1438'),
    ]

    operations = [
        migrations.RenameField(
            model_name='verse',
            old_name='verse_is_beg',
            new_name='beg',
        ),
        migrations.RenameField(
            model_name='verse',
            old_name='verse_is_end',
            new_name='end',
        ),
        migrations.RenameField(
            model_name='verse',
            old_name='verse_is_int',
            new_name='intr',
        ),
    ]