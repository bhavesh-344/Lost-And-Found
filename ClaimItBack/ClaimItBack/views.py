from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    dic={"title": "Claim It Back",}
    return render(request, 'index.html',dic)