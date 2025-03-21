from django.db import models

# Create your models here
class Artisan(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField(null=True, blank=True)
    art_form = models.CharField(max_length=255)
    years_of_experience = models.PositiveIntegerField()
    guru_or_teacher = models.CharField(max_length=200, blank=True, null=True)
    location = models.CharField(max_length=255)  
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    government_id = models.CharField(max_length=255, blank=True, null=True)
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    village_town = models.CharField(max_length=100)  
    ancestral_lineage = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to="artisans/", blank=True, null=True)  
    work_samples = models.FileField(upload_to="artisan_work_samples/", blank=True, null=True)

    def __str__(self):
        return self.name


class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    artisan = models.ForeignKey(Artisan, on_delete=models.CASCADE, related_name="courses")
    link = models.URLField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    duration = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title


class Workshop(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    artisan = models.ForeignKey(Artisan, on_delete=models.CASCADE, related_name="workshops")
    location = models.CharField(max_length=255)
    date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.title


class Documentary(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    artisan = models.ForeignKey(Artisan, on_delete=models.CASCADE, related_name="documentaries")
    video_link = models.URLField()

    def __str__(self):
        return self.title


class TedTalk(models.Model):
    title = models.CharField(max_length=255)
    speaker = models.CharField(max_length=255)
    artisan = models.ForeignKey(Artisan, on_delete=models.CASCADE, related_name="ted_talks")
    video_link = models.URLField()
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
