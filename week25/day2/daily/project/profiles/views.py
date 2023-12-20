from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from .models import Profile
from django.http import  JsonResponse
from django.shortcuts import get_object_or_404

@csrf_exempt
def create_profile(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']

        if name and email:
            new_profile = Profile.objects.create(name=name, email=email)
            return JsonResponse({'success': True, 'message': 'Created'}, status=201)
        else: return JsonResponse({'msg': 'Empty fields'})
    else: return JsonResponse({'message': 'Allow only POST'})

@csrf_exempt
def delete_profile(req,id):
    profile = get_object_or_404(Profile, id=id)
    if req.method == 'DELETE':
        profile.delete()
        return JsonResponse({'success': True, 'DEleted':'YES'})
    else:
        return JsonResponse({'success': False, 'message': 'NOT DELETE METHOD'}, status=405)


