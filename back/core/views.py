# from django.http import HttpResponseRedirect
# from urllib.parse import urlparse, urlencode
# from django.shortcuts import render

# def index_view(request):
#     redirect_uri = request.GET.get('redirect_uri')

#     # Verifica si se proporciona un redirect_uri válido
#     if redirect_uri:
#         # Realiza cualquier lógica adicional aquí antes de redirigir
#         # Por ejemplo, puedes validar el redirect_uri o realizar operaciones basadas en él

#         # Redirige a la URL específica (por ejemplo, a la ruta de Google)
#         # Aquí se redirige a la ruta /google con el parámetro de redirect_uri
#         return HttpResponseRedirect(f'/google?{urlencode({"redirect_uri": redirect_uri})}')

#     # Si no hay redirect_uri proporcionado, se muestra el index.html de React
#     return render(request, 'dist/index.html')

# from django.shortcuts import redirect

# def google_oauth2_view(request):
#     # Lógica para construir la URL de autorización de Google (simulada aquí)
#     authorization_url = "https://accounts.google.com/o/oauth2/auth?client_id=658578261486-0to6m7nsaotv4t5vg0jjs70p1afvqotn.apps.googleusercontent.com&redirect_uri=http://localhost:8000/google&state=K0ANptEDxbDfQrhidLPSnLcvHwfE5Klt&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid+openid+email+profile"

#     # Redireccionar a la URL de autorización de Google
#     return redirect(authorization_url)

# from django.http import JsonResponse

# def google_view(request):
#     # Lógica para manejar la solicitud desde tu frontend
#     # Aquí puedes procesar la solicitud, autenticar con Google y devolver la respuesta
    
#     # Por ejemplo, podrías devolver una respuesta de prueba en formato JSON
#     response_data = {
#         "access": "some_access_token",
#         "refresh": "some_refresh_token",
#         "user": "example@gmail.com"
#     }
    
#     return JsonResponse(response_data)