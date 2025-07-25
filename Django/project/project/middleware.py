from django.shortcuts import redirect
from django.urls import reverse

class SimpleMiddleware:
    def __init__(self,get_response):
        self.get_response = get_response

    def __call__(self,request):
        print('Before view')
        response = self.get_response(request)
        print("After view")
        return response



class AuthenticationMiddleware:

    def __init__(self,get_response):
        self.get_response = get_response


    def __call__(self,request):
        
        open_paths = [
            reverse('login'),
            reverse('signup'),
            reverse('admin:login'),
        ]



        if not request.user.is_authenticated and request.path not in open_paths:
            return redirect('login')

        response = self.get_response(request)
        return response
        
