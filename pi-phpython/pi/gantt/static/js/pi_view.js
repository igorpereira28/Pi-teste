/**ATENÇÃO!!!!!*/

/**ESTE ARQUIVO JAVASCRIPT FOI PROJETADO PARA TRATAR APENAS AÇÕES VISUAIS DA APLICAÇÃO*/


/*MENU DROPDOWN BTN_menusuperior*/////////////////////////////

function menuDropdown_menusuperior() {
  document.getElementById("menu_superior").classList.toggle("show");
    
}



/**INFORMAÇÕES DE TAREFAS MENU LATERAL ESQUERDO - AO CLICAR EM BOTÃO DE CADA TAREFA */


function dadosTarefa(IdBtn){
  divideBtn = IdBtn.substr(7);
  
  

  xhrGetTarefas = new XMLHttpRequest();

  xhrGetTarefas.open('GET', URLGETTAREFAS, true);

  xhrGetTarefas.onload = function(){
    if(xhrGetTarefas.readyState == 4){
      if(xhrGetTarefas.status == 200){

        json = (JSON.parse(xhrGetTarefas.responseText));

        for(i =0; i<json.length;i++){
          
          if(json[i]['trf_id'] == divideBtn){
            
            dt_prazo = json[i]['trf_prazo'];
            dt_inicial = json[i]['trf_datainicial'];
            dt_final = json[i]['trf_datafinal'];

            split_dt_prazo = dt_prazo.split('-');
            reverse_dt_prazo = split_dt_prazo.reverse();
            join_dt_prazo = reverse_dt_prazo.join('-');

            split_dt_inicial= dt_inicial.split('-');
            reverse_dt_inicial = split_dt_inicial.reverse();
            join_dt_inicial = reverse_dt_inicial.join('-');

            split_dt_final = dt_final.split('-');
            reverse_dt_final = split_dt_final.reverse();
            join_dt_final = reverse_dt_final.join('-');
            

            document.getElementById('dt_prazo').innerHTML = join_dt_prazo;
            document.getElementById('dt_inicial').innerHTML = join_dt_inicial;
            document.getElementById('dt_final').innerHTML = join_dt_final;


          }

        }

        
      }
    }


  }
  xhrGetTarefas.send();

}


/**INFORMAÇÕES DE PROJETOS MENU LATERAL ESQUERDO - AO CLICAR EM BOTÃO DE CADA TAREFA */


function dadosProjeto(IdBtn){
  divideBtn = IdBtn.substr(7);
  
  

  xhrGetDadosProjeto = new XMLHttpRequest();

  xhrGetDadosProjeto.open('GET', URLGETPROJETOS, true);

  xhrGetDadosProjeto.onload = function(){
    if(xhrGetDadosProjeto.readyState == 4){
      if(xhrGetDadosProjeto.status == 200){

        json = (JSON.parse(xhrGetDadosProjeto.responseText));

        for(i =0; i<json.length;i++){
          
          if(json[i]['prj_id'] == divideBtn){
            
            dt_inicio = json[i]['prj_datainicio'];
            dt_prazo = json[i]['prj_prazoentrega'];
            

            split_dt_prazo = dt_prazo.split('-');
            reverse_dt_prazo = split_dt_prazo.reverse();
            join_dt_prazo = reverse_dt_prazo.join('-');

            split_dt_inicial= dt_inicio.split('-');
            reverse_dt_inicial = split_dt_inicial.reverse();
            join_dt_inicial = reverse_dt_inicial.join('-');

            
            

            document.getElementById('dt_prazo').innerHTML = join_dt_prazo;
            document.getElementById('dt_inicial').innerHTML = join_dt_inicial;
            document.getElementById('dt_final').innerHTML = '----';


          }

        }

        
      }
    }


  }
  xhrGetDadosProjeto.send();

}