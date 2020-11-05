from django.db import models

# Create your models here.
class viewApp(models.Model):
    class Meta:
        permissions = (("can_view_app", "Allowed to view app"),) 
