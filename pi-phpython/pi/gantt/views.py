#
from rest_framework.views import APIView
#

from django.shortcuts import render, HttpResponse
from .models import (
    tb_Tarefa,
    tb_Projeto,
    tb_Pessoa,
    tb_pes_Trf,
    tb_hab_pes,
    tb_habilidades
)
from django.views.decorators.clickjacking import xframe_options_exempt
from .forms import (
    PostProjeto,
    PostTarefa,
    PostPessoa,
    PostDistr,
    tb_Dev_Trf
)
from django.shortcuts import redirect
from rest_framework import viewsets
from .serializers import (
    ProjectSerializer,
    TaskSerializer,
    PersonSerializer,
    DistributeSerializer,
    HabilidadeDistSerializer,
    HabilidadeSerializer
)


# Create your views here.
def index_page(request):
    # Projetos
    projects = []
    tb_projects = tb_Projeto.objects.all()
    count_projects = tb_projects.order_by("prj_id").count()
    if count_projects > 2:
        last_id = tb_projects.order_by("prj_id")[count_projects - 1]
        last_id = last_id.prj_id
    else:
        if count_projects == 0:
            last_id = 0
        else:
            last_id = tb_projects.order_by("prj_id")[count_projects - 1]
            last_id = last_id.prj_id

    for project in tb_Projeto.objects.all():
        project_return = {
            'id': project.prj_id,
            'projeto': project.prj_nome,
            'start_date': project.prj_datainicio,
            'prazo': project.prj_prazoentrega,
            'color': project.prj_color
        }
        projects.append(project_return)

    # Pessoa
    pessoas = []
    for pessoa in tb_Pessoa.objects.all():
        var = {
            'codigo': pessoa.pes_id,
            'nome': pessoa.pes_nome,
            'contato': pessoa.pes_contato

        }
        pessoas.append(var)

    # Tarefas
    task_json = []
    tasks = tb_Tarefa.objects.all()
    for task in tasks:
        gannt_retunr = {
            'id': task.trf_id,
            'name': task.trf_name,
            'start': task.trf_datainicial.strftime('%Y-%m-%d'),
            'end': task.trf_datafinal.strftime('%Y-%m-%d'),
            'progress': 100
        }
        task_json.append(gannt_retunr)

    # Distribuição
    dists = []

    for task in tb_Dev_Trf.objects.select_related('fk_pes_id', 'fk_trf_id', 'fk_prj_id'):
        var = {
            'pes_nome': task.fk_pes_id.pes_nome,
            'trf_nome': task.fk_trf_id.trf_name,
            'prj_nome': task.fk_prj_id.prj_nome,
            'cor': task.fk_prj_id.prj_color
        }
        dists.append(var)

    context = {
        'projects': projects,
        'last_id': last_id,
        'pessoas': pessoas,
        'tasks': task_json,
        'dists': dists
    }
    template_name = "novo_front/index.html"

    return render(request, template_name, context)


@xframe_options_exempt
def gantt(request):
    template_name = "novo_front/gantt.html"

    json_collect = []
    tasks = tb_Tarefa.objects.all()
    for task in tasks:
        gannt_retunr = {
            'id': task.trf_id,
            'name': task.trf_name,
            'start': task.trf_datainicial.strftime('%Y-%m-%d'),
            'end': task.trf_datafinal.strftime('%Y-%m-%d'),
            'progress': 100
        }
        json_collect.append(gannt_retunr)
    context = {
        'tasks': json_collect,
    }
    return render(request, template_name, context)


def save_project(request):
    form = PostProjeto(request.POST)

    if form.is_valid():
        post = form.save(commit=False)
        post.save()

    return redirect('home')


def save_task(request):
    form = PostTarefa(request.POST)

    if form.is_valid():
        post = form.save(commit=False)
        post.save()

    return redirect('home')


def save_person(request):
    form = PostPessoa(request.POST)
    if form.is_valid():
        post = form.save(commit=False)
        post.save()
    return redirect('home')


def save_dist(request):
    form = PostDistr(request.POST)
    if form.is_valid():
        post = form.save(commit=False)
        post.save()
    return redirect('home')


class ProjectsViewSet(viewsets.ModelViewSet, APIView):
    queryset = tb_Projeto.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = ()


class TaskViewSet(viewsets.ModelViewSet, APIView):
    queryset = tb_Tarefa.objects.all()
    serializer_class = TaskSerializer
    permission_classes = ()


class PersonViewSet(viewsets.ModelViewSet, APIView):
    queryset = tb_Pessoa.objects.all()
    serializer_class = PersonSerializer
    permission_classes = ()


class DistributeViewSet(viewsets.ModelViewSet, APIView):
    queryset = tb_pes_Trf.objects.all()
    serializer_class = DistributeSerializer
    permission_classes = ()


class HabilidadeDistViewSet(viewsets.ModelViewSet, APIView):
    queryset = tb_hab_pes.objects.all()
    serializer_class = HabilidadeDistSerializer
    permission_classes = ()


class HabilidadesViewSet(viewsets.ModelViewSet, APIView):
    queryset = tb_habilidades.objects.all()
    serializer_class = HabilidadeDistSerializer
    permission_classes = ()
