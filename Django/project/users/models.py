from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    
    def create_user(self,email, password=None , **extra_fields):
        if not email:
            raise ValueError('user must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_superuser(self,email,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser = True')

        return self.create_user(email,password, **extra_fields)




class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQIRED_FIELDS = ['name']
    


#Abstract base classes

class CommonInfo(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        abstract = True

class Student(CommmonInfo):
    name = models.CharField(max_length=100)
    grade = models.IntegerField()



# MULTI-Table inheritance

class Animal(models.Model):
    name = models.CharField(max_length=100)

class Dog(Animal):
    breed = models.CharField(max_length=100)





#Proxy Models

class Person(models.Model):
    name = models.CharField(max_length=100)

class PersonProxy(Person):

    class Meta:
        proxy = True
        ordering = ['name']


    def greet(self):
        return f"Hi {self.name}"


#Custom Model Manager:

class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status='published')

class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=10)

    objects = models.Manager()

    published = PublishedManager()

# BlogPost.objects.all()  all posts
# BlogPost.published.all() only published post