from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import Usersignup, LoginForm
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .recipes import APIMixin, RedirectParams

# Create your views here.
def inicio(request):
        if request.method == 'POST':
            form = Usersignup(request.POST or None)
            if form.is_valid():
                form.save()
                return render(request, 'index-login.html', {'mensaje' : 'Usuario Registrado'})
            else:
                return render(request, 'index-login.html', {'form': form, 'mensaje' : 'Usuario no registrado' })
        else:
            form = Usersignup(request.POST or None)
            return render(request, 'index-login.html', {'form': form})
        
        

def log_in(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request,
                                username=cd['username'],
                                password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('dashboard')
                else:
                    return redirect('inicio')
            else:
                return render(request,'index-login.html', {'form': form,
                    'error' : 'Usuario o contraseña incorrecta'                                       
                                                        })
    else:
        form = LoginForm()
        return render(request, 'index-login.html', {'form': form})
    
@login_required
def dashboard(request):
    return render(request, 'index.html')

def recipes(request):
    if request.method == "POST":
        cat = request.POST.get("cat", None)
        query = request.POST.get("query", None)
        if cat and query:
            return RedirectParams(url = 'resultados', params = {"cat": cat, "query": query})
    return render(request, 'index-generador.html', {})	
		
def results(request):

	cat = request.GET.get("cat", None)
	query = request.GET.get("query", None)

	if cat and query:
		results = APIMixin(cat=cat, query=query).get_data()

		if results:
			context = {
				"results": results,
				"cat": cat,
				"query": query,
			}

			return render(request, 'results.html', context)
	
	return redirect(reverse('generador'))

def endSesion(request):
    logout(request)
    return redirect('inicio')