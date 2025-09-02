from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    marks = models.IntegerField(default=0)
    joined_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Course(models.Model):
    title = models.CharField(max_length=100)
    student = models.ManyToManyField(Student, related_name = 'courses')

    def __str__(self):
        return self.title
