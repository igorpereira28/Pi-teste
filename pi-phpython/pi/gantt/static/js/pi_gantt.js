/**ATENÇÃO!!!!!*/

/**ESTE ARQUIVO JAVASCRIPT FOI PROJETADO PARA TRATAR APENAS GRÁFICO DO GANTT*/




/*JSON PARA CARREGAR GRÁFICO DE GANTT*/
function ganttProjetos(){
      
    vetor_projetoGantt = [];
    xhrGetProjeto = new XMLHttpRequest();
    
    jsonProjetosGantt = '';
    xhrGetProjeto.open('GET', URLGETPROJETOS, true);
    xhrGetProjeto.onreadystatechange = function(){
        if(xhrGetProjeto.readyState == 4){
            if(xhrGetProjeto.status == 200){
                jsonProjetosGantt = (JSON.parse(xhrGetProjeto.responseText));                         
            }else if(xhrGetProjeto.status == 404){

            }
        }      
        carregaGantt(jsonProjetosGantt, null);
        
    }
    xhrGetProjeto.send();
    ganttTarefas();
}

function ganttTarefas(){
    vetor_tarefaGantt = [];
    xhrGetTarefa = new XMLHttpRequest();
    
    jsonTarefasGantt = '';
    xhrGetTarefa.open('GET', URLGETTAREFAS, true);
    xhrGetTarefa.onreadystatechange = function(){
        if(xhrGetTarefa.readyState == 4){
            if(xhrGetTarefa.status == 200){
                jsonTarefasGantt = (JSON.parse(xhrGetTarefa.responseText));           
            }else if(xhrGetTarefa.status == 404){
            }
        }      
        carregaGantt(null, jsonTarefasGantt);
        
    }
    xhrGetTarefa.send();
   
}

recebe_projetoGantt = [];
recebe_tarefaGantt = []
function carregaGantt(jsonProjetosGantt, jsonTarefasGantt){
        
    
        vetor_gantt = [];

        if(jsonProjetosGantt != null){
            recebe_projetoGantt = jsonProjetosGantt;
        }
        if(jsonTarefasGantt != null){
            recebe_tarefaGantt = jsonTarefasGantt;
        }
        

        if(recebe_projetoGantt != ''){
            if(recebe_tarefaGantt != ''){
        tasks = []; //PREPARO DE VETOR PARA RECEBER JSON
    
        for(i = 0; i< recebe_tarefaGantt.length;i++){ //FAZ A VARREDURA NO VETOR PARA CRIAR JSON
            tasks.push({ //CARREGA O JSON COM AS INFORMAÇÕES NECESSÁRIAS PARA CARREGAR O GRÁFICO GANTT
                'id': 'Task'+recebe_tarefaGantt[i]['trf_id'],
                'name': recebe_tarefaGantt[i]['trf_name'],
                'start': recebe_tarefaGantt[i]['trf_datainicial'],
                'end': recebe_tarefaGantt[i]['trf_datafinal'],
                'progress': 20,       
                'custom_class': 'tcolor'                     
            });
        }
        //console.log("TASKS: "+tasks+""); //TESTE DE INTEGRIDADE
       gantt = new Gantt("#gantt", tasks); //ENVIO DE DADOS PARA O GRÁFICO GANTT

    }

        }
}

/*MUDANÇA DE PREÍODOS GANTT*/

// Quarter Day, Half Day, Day, Week, Month 


function periodo_dia(){
    
    gantt.change_view_mode('Day'); // MUDANÇA DE PERÍODO PARA DIA
}

function periodo_semana(){
    gantt.change_view_mode('Week');// MUDANÇA DE PERÍODO PARA SEMANA
}

function periodo_mes(){
    gantt.change_view_mode('Month');// MUDANÇA DE PERÍODO PARA MÊS
}

function periodo_ano(){
    gantt.change_view_mode('Year');// MUDANÇA DE PERÍODO PARA ANO
}



/*//////////////////////////////////////////////*/

