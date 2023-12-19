from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'




class ImageProfile(models.Model):
    person = models.OneToOneField(
        Person,
        on_delete=models.CASCADE,
        primary_key= True
    )

    def create_image_profile(person, image_url):
        image_profile = ImageProfile(person=person, image=image_url)
        try:
            image_profile.full_clean()
        except ValidationError as e:
            print(e.message_dict)

    image = models.URLField()

    def __str__(self):
        return f'ImageProfile of {self.person}'






class Post(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    released_date = models.DateField(default=timezone.now)
    author = models.ForeignKey(Person, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'


class Category(models.Model):
    name = models.CharField(max_length=50)
    posts = models.ManyToManyField(Post, related_name='categories', blank=True)

    def __str__(self):
        return f'Category {self.name}'

