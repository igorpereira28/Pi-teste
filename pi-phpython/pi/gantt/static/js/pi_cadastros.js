/**ATENÇÃO!!!!!*/

/**ESTE ARQUIVO JAVASCRIPT FOI PROJETADO PARA TRATAR APENAS CADASTROS*/



/*WINDOW.ONLOAD*/

window.onload = function(){
    getAllProjects();
    getAllTasks();
    
}


////////////////////////////

/////*URLS*/////////////////////////////////////


/*GET - POST - PUT - DELETE*/
//**CADASTRO DE PESSOAS*////
URLGETPESSOAS = 'http://localhost:8000/person/';
//**CADASTRO DE PROJETOS*////
URLGETPROJETOS = 'http://localhost:8000/project/';
//**CADASTRO DE TAREFAS*////
URLGETTAREFAS = 'http://localhost:8000/task/';
//**CADASTRO DE DISTRIBUICAO DE PESSOAS EM TAREFAS*////
URLGETDISTRIBUICAO = 'http://localhost:8000/distribute/';




/*/////////////*/

/*ADQUIRE O CSRF_TOKEN DO CACHE DO NAVEGADOR*/
function getCookie(name) {
    cookieValue = null;
   if (document.cookie && document.cookie !== '') {
       cookies = document.cookie.split(';');
       for ( i = 0; i < cookies.length; i++) {
            cookie = cookies[i].trim();
           // Does this cookie string begin with the name we want?
           if (cookie.substring(0, name.length + 1) === (name + '=')) {
               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               break;
           }
       }
   }
   return cookieValue;
}
csrftoken = getCookie('csrftoken');
/////////////////////////////////////////////

/*CADASTRO DE PESSOAS*///////////////////////////////

/*GET AND POST - API*////////////////////////////////////////////////////////////////////



function preencheCamposCadasPessoa(json){
    document.getElementById("nomePessoa").value = json.pes_nome; 
    document.getElementById("contato").value = json.pes_contato;
}



function getPessoa(){
    codPessoa = document.getElementById("codPessoa").value;
    
    

    if(codPessoa == "undefined"){
        document.getElementById("codPessoa").value = 0;
        limparCamposCadasPessoa();
        desabilitaAvancoCodPessoa();
        desabilitaBtnAtualizarPessoa();
        desabilitaBtnCancelarPessoa();
        desabilitaBtnGravaPessoa();
        desabilitaBtnExcluirPessoa();
        desabilitaCamposPessoa();
        desabilitaRecuoCodPessoa();

    }else{
    xhrGetPessoa = new XMLHttpRequest();
    xhrGetPessoa.open('GET', URLGETPESSOAS+codPessoa, true);
   
    xhrGetPessoa.onreadystatechange = function(){
        if(xhrGetPessoa.readyState == 4){
            if(xhrGetPessoa.status == 200){
                preencheCamposCadasPessoa(JSON.parse(xhrGetPessoa.responseText));     
               
                
            
            }else if(xhrGetPessoa.status == 404){

            }
        }      
    }
    xhrGetPessoa.send();
   }
}


function postPessoa(){
    codPessoa = document.getElementById("codPessoa").value;
    nomePessoa = document.getElementById("nomePessoa").value;
    contato = document.getElementById("contato").value;
    xhrPostPessoa = new XMLHttpRequest();
    xhrPostPessoa.open("POST", URLGETPESSOAS, true);
    xhrPostPessoa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPostPessoa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrPostPessoa.setRequestHeader("withCredentials", 'True');    
    xhrPostPessoa.onload = function(){
        if(xhrPostPessoa.readyState == 4){
            if(xhrPostPessoa.status == 201){
                getPessoa();
                carregaTabelaPessoa();
            }
        }
    }

    xhrPostPessoa.send(JSON.stringify({
        'pes_id': codPessoa,
        'pes_nome': nomePessoa, 
        'pes_contato': contato 
    }));

    
    desabilitaCamposPessoa();
    habilitaBtnNovaPessoa();
    desabilitaBtnGravaPessoa();
    desabilitaBtnCancelarPessoa();
    habilitaRecuoCodPessoa();
    habilitaBtnExcluirPessoa();
    habilitaBtnAtualizarPessoa();
    
}

function putPessoa(){
    if(document.getElementById("nomePessoa").readOnly == true){
        habilitaCamposPessoa();
        mudaBotao =  document.getElementById("btn_atualizarCadasPessoa");
        mudaBotao.style.backgroundColor = "green";

    }else{
        codPessoa = document.getElementById("codPessoa").value;
    
    nomePessoa = document.getElementById("nomePessoa").value;
    contato = document.getElementById("contato").value;

    xhrPutPessoa = new XMLHttpRequest();
   
    xhrPutPessoa.open("PUT", URLGETPESSOAS+codPessoa+'/', true);
    xhrPutPessoa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPutPessoa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrPutPessoa.setRequestHeader("withCredentials", 'True');
    xhrPutPessoa.onload = function(){
        if(xhrPutPessoa.readyState == 4){
            if(xhrPutPessoa.status == 200){    
                getPessoa();
                carregaTabelaPessoa();
                
            }
        }
    

    }

    xhrPutPessoa.send(JSON.stringify({
    'pes_id': codPessoa,
    'pes_nome': nomePessoa, 
    'pes_contato': contato  
}));

    
    mudaBotao =  document.getElementById("btn_atualizarCadasPessoa");
    mudaBotao.style.backgroundColor = "#698FEB";
  
    desabilitaCamposPessoa();
    
}
    
}

function deletePessoa(){
   
    codPessoa = document.getElementById("codPessoa").value;
    xhrDeletePessoa = new XMLHttpRequest();
    xhrDeletePessoa.open("DELETE", URLGETPESSOAS+codPessoa, true);
    xhrDeletePessoa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrDeletePessoa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrDeletePessoa.setRequestHeader("withCredentials", 'True');
    vetor_pessoa = [];
    xhrDeletePessoa.onload = function () {
        if(xhrDeletePessoa.readyState == 4){
            if(xhrDeletePessoa.status == 204){
                carregaTabelaPessoa();          
            }
        }  
    }
    xhrDeletePessoa.send();
    recuarCodPessoa();   

}



 
///////////////////////FINISH: GET - POST - PUT - DELETE //////////////////////////////////////////////////////////
function clicaPessoas(){
    document.getElementById("menu_superior").classList.remove("show");   
    codPessoaAtual = 0;
    dialogCadastro = document.getElementById("abreCadastroPessoas");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();
 
   

    xhrAbrePessoa = new XMLHttpRequest();
    xhrAbrePessoa.open('GET', URLGETPESSOAS, true);
    xhrAbrePessoa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrAbrePessoa.setRequestHeader("withCredentials", 'True');
    xhrAbrePessoa.onreadystatechange = function(){
        jsonCadasPessoa = [];
        maiorvalor = 0;
        if(xhrAbrePessoa.readyState == 4){
            if(xhrAbrePessoa.status == 200){
                json = (JSON.parse(xhrAbrePessoa.responseText));

                for(i = 0; i<json.length;i++){
                   if(json[i]['pes_id'] > maiorvalor ){
                        maiorvalor = json[i]['pes_id'];
                    }              
                }
                
                if(maiorvalor == 0){
                    document.getElementById("codPessoa").value = 0;
                    limparCamposCadasPessoa();
                    desabilitaAvancoCodPessoa();
                    desabilitaBtnAtualizarPessoa();
                    desabilitaBtnCancelarPessoa();
                    desabilitaBtnGravaPessoa();
                    desabilitaBtnExcluirPessoa();
                    habilitaBtnNovaPessoa();
                    desabilitaCamposPessoa();
                    desabilitaRecuoCodPessoa();
                }else{
                    document.getElementById("codPessoa").value = maiorvalor;
                    habilitaRecuoCodPessoa();
                    getPessoa();
                }

               
            }else if(xhrAbrePessoa.status == 404){}

            
        }
        
    }
    
    
    xhrAbrePessoa.send();
   
   

    habilitaAvancoCodPessoa();
    habilitaRecuoCodPessoa();
    desabilitaBtnCancelarPessoa();
    habilitaBtnNovaPessoa();
    desabilitaBtnGravaPessoa();
    desabilitaAvancoCodPessoa();
    
    carregaTabelaPessoa();
  
}

function novaPessoa(){
    codPessoa = parseInt(document.getElementById("codPessoa").value);
    if(codPessoa == 0){
        codPessoa = 1;
        document.getElementById("codPessoa").value = codPessoa;
        habilitaCamposPessoa();
    habilitaBtnCancelarPessoa();
    desabilitaBtnNovaPessoa();
    habilitaBtnGravarPessoa();
    desabilitaAvancoCodPessoa();
    desabilitaRecuoCodPessoa();
    limparCamposCadasPessoa();
    desabilitaBtnExcluirPessoa();
    desabilitaBtnAtualizarPessoa();
    }else{
    
     
    vetor_pessoa = [];
    xhrNovaPessoa = new XMLHttpRequest();
    xhrNovaPessoa.open('GET', URLGETPESSOAS, true);
    xhrNovaPessoa.onreadystatechange = function(){     
        if(xhrNovaPessoa.readyState == 4){
            if(xhrNovaPessoa.status == 200){
                json = (JSON.parse(xhrNovaPessoa.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_pessoa.push(json[i]['pes_id']);
                    
                }
                vetor_pessoa.reverse();
                codPessoa = vetor_pessoa[0] + 1;
              }
        }
        document.getElementById("codPessoa").value = codPessoa;
    }
    }
    xhrNovaPessoa.send();
    
    habilitaCamposPessoa();
    habilitaBtnCancelarPessoa();
    desabilitaBtnNovaPessoa();
    habilitaBtnGravarPessoa();
    desabilitaAvancoCodPessoa();
    desabilitaRecuoCodPessoa();
    limparCamposCadasPessoa();
    desabilitaBtnExcluirPessoa();
    desabilitaBtnAtualizarPessoa();
    
}

function cancelarCadasPessoa(){
    codPessoa = parseInt(document.getElementById("codPessoa").value);
    document.getElementById("codPessoa").value = codPessoa - 1;
    
    desabilitaCamposPessoa();
    
    desabilitaBtnGravaPessoa();
    desabilitaBtnCancelarPessoa();
    habilitaRecuoCodPessoa();
    getPessoa();
    habilitaBtnNovaPessoa();
    habilitaBtnExcluirPessoa();
    habilitaBtnAtualizarPessoa();
}

function recuarCodPessoa(){ 
 
    
    codPessoa = parseInt(document.getElementById("codPessoa").value);
    vetor_pessoa = [];
    xhrRecuarCod = new XMLHttpRequest();
    xhrRecuarCod.open('GET', URLGETPESSOAS, true);
    xhrRecuarCod.onreadystatechange = function(){     
        if(xhrRecuarCod.readyState == 4){
            if(xhrRecuarCod.status == 200){
                json = (JSON.parse(xhrRecuarCod.responseText));

                for(i = 0;i<json.length;i++){
                    vetor_pessoa.push(json[i]['pes_id']);
                    
                }
                
                
                 
                 menorvalor = vetor_pessoa.length;
                 for(i=0;i<vetor_pessoa.length;i++){

                    if(codPessoa == vetor_pessoa[i]){
                    codPessoa = vetor_pessoa[i-1];
                 }
                 if(vetor_pessoa[i] < menorvalor){
                    menorvalor = vetor_pessoa[i]; 
                }    

                
                }
                   
                   
                      document.getElementById("codPessoa").value = codPessoa; 
                      
                
                if(codPessoa == menorvalor){
                    desabilitaRecuoCodPessoa();
                }

               
                
                
                habilitaAvancoCodPessoa();

                getPessoa();
                
            }else if(xhrRecuarCod.status == 404){ }
        
            }
            
            
        }  
    

        xhrRecuarCod.send();
       
}

function avancarCodPessoa(){ 
    
    
    codPessoa = parseInt(document.getElementById("codPessoa").value);
    vetor_pessoa = [];
    xhrAvancarPessoa = new XMLHttpRequest();
    xhrAvancarPessoa.open('GET', URLGETPESSOAS, true);
    xhrAvancarPessoa.onreadystatechange = function(){     
        if(xhrAvancarPessoa.readyState == 4){
            if(xhrAvancarPessoa.status == 200){
                json = (JSON.parse(xhrAvancarPessoa.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_pessoa.push(json[i]['pes_id']);
                    
                }
                
                vetor_pessoa.reverse();
                 maiorvalor = 0;
                 for(i=0;i<vetor_pessoa.length;i++){
                    
                    if(codPessoa == vetor_pessoa[i]){
                    codPessoa = vetor_pessoa[i-1];
                 }
                 if(vetor_pessoa[i] > maiorvalor){
                    maiorvalor = vetor_pessoa[i]; 
                }    

                }
                   
                      document.getElementById("codPessoa").value = codPessoa;   
                if(codPessoa == maiorvalor){
                    desabilitaAvancoCodPessoa();
                }
                habilitaRecuoCodPessoa();
                getPessoa();
                }else if(xhrAvancarPessoa.status == 404){ }
            }
        }
    

        xhrAvancarPessoa.send();

}


function desabilitaBtnAtualizarPessoa(){
    document.getElementById("btn_atualizarCadasPessoa").disabled = true;
   mudaBotao =  document.getElementById("btn_atualizarCadasPessoa");
    mudaBotao.style.backgroundColor = "gray";


}

function habilitaBtnAtualizarPessoa(){
   
 
        document.getElementById("btn_atualizarCadasPessoa").disabled = false;
     mudaBotao =  document.getElementById("btn_atualizarCadasPessoa");
     mudaBotao.style.backgroundColor = "#698FEB";
      
 
 }


function desabilitaRecuoCodPessoa(){
        document.getElementById("codAnteriorCadasPessoa").disabled = true;
     
       mudaBotao =  document.getElementById("codAnteriorCadasPessoa");
        mudaBotao.style.backgroundColor = "gray";

    
}

function desabilitaAvancoCodPessoa(){
  document.getElementById("codPosteriorCadasPessoa").disabled = true;
     if(document.getElementById("codPosteriorCadasPessoa").disabled = true){
       mudaBotao =  document.getElementById("codPosteriorCadasPessoa");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaRecuoCodPessoa(){
   
   if(document.getElementById("codPessoa").value > 1){ 
       document.getElementById("codAnteriorCadasPessoa").disabled = false;
    mudaBotao =  document.getElementById("codAnteriorCadasPessoa");
    mudaBotao.style.backgroundColor = "#698FEB";
     
}
}

function habilitaAvancoCodPessoa(){
  document.getElementById("codPosteriorCadasPessoa").disabled = false;
    mudaBotao =  document.getElementById("codPosteriorCadasPessoa");
    mudaBotao.style.backgroundColor = "#698FEB";
}

function fecharCadastroPessoa(){
    dialogCadastro.close();
    limparCamposCadasPessoa();
}

function habilitaBtnCancelarPessoa(){
    document.getElementById("btn_cancelarCadasPessoa").disabled = false;
    mudaBotao =  document.getElementById("btn_cancelarCadasPessoa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnCancelarPessoa(){
    document.getElementById("btn_cancelarCadasPessoa").disabled = true;
        mudaBotao =  document.getElementById("btn_cancelarCadasPessoa");
        mudaBotao.style.backgroundColor = "gray";

}

function habilitaCamposPessoa(){
     document.getElementById("nomePessoa").readOnly = false;
    document.getElementById("contato").readOnly = false;
  
}

function desabilitaCamposPessoa(){
    limparCamposCadasPessoa();
    document.getElementById("nomePessoa").readOnly = true;
    document.getElementById("contato").readOnly = true;
    
    
}

function habilitaBtnNovaPessoa(){
     document.getElementById("btn_novapessoa").disabled = false;
    mudaBotao =  document.getElementById("btn_novapessoa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnNovaPessoa(){
    document.getElementById("btn_novapessoa").disabled = true;

       mudaBotao =  document.getElementById("btn_novapessoa");
        mudaBotao.style.backgroundColor = "gray";

}


function desabilitaBtnExcluirPessoa(){
    document.getElementById("btn_excluirCadasPessoa").disabled = true;
    mudaBotao =  document.getElementById("btn_excluirCadasPessoa");
     mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnExcluirPessoa(){
    document.getElementById("btn_excluirCadasPessoa").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasPessoa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnGravaPessoa(){
  
    document.getElementById("btn_salvarpessoa").disabled = true;
    
       mudaBotao =  document.getElementById("btn_salvarpessoa");
        mudaBotao.style.backgroundColor = "gray";
   
}

function habilitaBtnGravarPessoa(){
    document.getElementById("btn_salvarpessoa").disabled = false;
    mudaBotao =  document.getElementById("btn_salvarpessoa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function limparCamposCadasPessoa(){
    document.getElementById("nomePessoa").value = '';
    document.getElementById("contato").value = '';
    
}

function fecharCadastroPessoa(){
    dialogCadastro.close();
    limparCadasPessoa();
}

function limparCadasPessoa(){
    document.getElementById('nomePessoa').value = '';
    document.getElementById('contato').value = '';
}


function carregaTabelaPessoa(){
   
    
    codPessoa = parseInt(document.getElementById("codPessoa").value);
    vetor_TabelaCadasPessoa = [];
    xhrTabelaPessoa = new XMLHttpRequest();
    xhrTabelaPessoa.open('GET', URLGETPESSOAS, true);
    
    xhrTabelaPessoa.onreadystatechange = function(){     
        if(xhrTabelaPessoa.readyState == 4){
            if(xhrTabelaPessoa.status == 200){
                json = (JSON.parse(xhrTabelaPessoa.responseText));
                for(i = 0;i<json.length;i++){

                    linhaTabelaPessoas = "<tr><td>"+json[i]['pes_id']+"</td><td>"+json[i]['pes_nome']+"</td><td>"+json[i]['pes_contato']+"</td></tr>";
    
                    vetor_TabelaCadasPessoa.push(linhaTabelaPessoas);
                }
             

            }
           
        }
        
        document.getElementById("corpoTabelaPessoas").innerHTML = '';
    
    for(i = 0; i < vetor_TabelaCadasPessoa.length;i++){
         document.getElementById("corpoTabelaPessoas").innerHTML += vetor_TabelaCadasPessoa[i];
        
    }    
    }

    xhrTabelaPessoa.send();
        
}

/*/////////////////////////////////////////////////*/


/*CADASTRO DE PROJETOS*/////////////////////////////

/*GET AND POST - API*////////////////////////////////////////////////////////////////////
vetor_prjcadastrados = [];
vetor_trfcadastrados = [];


function preencheCamposCadasProjeto(json){
    document.getElementById("nomeProjeto").value = json.prj_nome; 
    document.getElementById("escopo").value = json.prj_escopo;
    document.getElementById("dt_inicioProjeto").value = json.prj_datainicio;
    document.getElementById("dt_prazoProjeto").value = json.prj_prazoentrega;
    document.getElementById("corProjeto").value = json.prj_color;

}

function getAllProjects(){
    
    
    
    xhrGetProjeto = new XMLHttpRequest();
    
    json = '';
    xhrGetProjeto.open('GET', URLGETPROJETOS, true);
    
    xhrGetProjeto.onreadystatechange = function(){
        if(xhrGetProjeto.readyState == 4){
            if(xhrGetProjeto.status == 200){
                json = (JSON.parse(xhrGetProjeto.responseText));
            }else if(xhrGetProjeto.status == 404){

            }
        }      
        add_prj_menu_esquerdo(json);
    }
    xhrGetProjeto.send();
}

function getProjeto(){
    codProjeto = document.getElementById("codProjeto").value;
    

    if(codProjeto == "undefined"){
        document.getElementById("codProjeto").value = 0;
        limparCamposCadasProjeto();
        desabilitaAvancoCodProjeto();
        desabilitaBtnAtualizarProjeto();
        desabilitaBtnCancelarProjeto();
        desabilitaBtnGravaProjeto();
        desabilitaBtnExcluirProjeto();
        desabilitaCamposProjeto();
        desabilitaRecuoCodProjeto();

    }else{
    
    
    xhrGetProjeto = new XMLHttpRequest();
   
    xhrGetProjeto.open('GET', URLGETPROJETOS+codProjeto, true);
    xhrGetProjeto.onreadystatechange = function(){
        if(xhrGetProjeto.readyState == 4){
            if(xhrGetProjeto.status == 200){
                preencheCamposCadasProjeto(JSON.parse(xhrGetProjeto.responseText));     
                getAllProjects();
            }else if(xhrGetProjeto.status == 404){

            }
        }      
        
    }
    xhrGetProjeto.send();

   
    }
}


function postProjeto(){
    codProjeto = document.getElementById("codProjeto").value;
    nomeProjeto = document.getElementById("nomeProjeto").value;
    escopo = document.getElementById("escopo").value;
    dt_inicio = document.getElementById("dt_inicioProjeto").value;
    dt_prazo = document.getElementById("dt_prazoProjeto").value;
    cor = document.getElementById("corProjeto").value;
    
    

    xhrPostProjeto = new XMLHttpRequest();
    
    xhrPostProjeto.open("POST", URLGETPROJETOS, true);
    xhrPostProjeto.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPostProjeto.setRequestHeader("X-CSRFToken", csrftoken);
    xhrPostProjeto.setRequestHeader("withCredentials", 'True');
    xhrPostProjeto.onload = function(){
        if(xhrPostProjeto.readyState == 4){
            if(xhrPostProjeto.status == 201){
                
                getProjeto();
                carregaTabelaProjeto();
                
                
            }
        }
    

    }
    xhrPostProjeto.send(JSON.stringify({
         'prj_id': codProjeto,
         'prj_nome': nomeProjeto, 
         'prj_escopo': escopo, 
         'prj_datainicio': dt_inicio,
         'prj_prazoentrega': dt_prazo,
         'prj_color': cor
        }));
    
    
        desabilitaCamposProjeto();
        habilitaBtnNovoProjeto();
        desabilitaBtnGravaProjeto();
        desabilitaBtnCancelarProjeto();
        habilitaRecuoCodProjeto();
        habilitaBtnExcluirProjeto();
        habilitaBtnAtualizarProjeto();
   
}

function putProjeto(){
    if(document.getElementById("nomeProjeto").readOnly == true){
        habilitaCamposProjeto();
        mudaBotao =  document.getElementById("btn_atualizarCadasProjeto");
        mudaBotao.style.backgroundColor = "green";

    }else{
        codProjeto = document.getElementById("codProjeto").value;
    
    nomeProjeto = document.getElementById("nomeProjeto").value;
    escopo = document.getElementById("escopo").value;
    dt_inicio = document.getElementById("dt_inicioProjeto").value;
    dt_prazo = document.getElementById("dt_prazoProjeto").value;
    cor = document.getElementById("corProjeto").value;
    

    xhrPutProjeto = new XMLHttpRequest();
   
    xhrPutProjeto.open("PUT", URLGETPROJETOS+codProjeto+'/', true);
    xhrPutProjeto.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPutProjeto.setRequestHeader("X-CSRFToken", csrftoken);
    xhrPutProjeto.setRequestHeader("withCredentials", 'True');
    xhrPutProjeto.onload = function(){
        if(xhrPutProjeto.readyState == 4){
            if(xhrPutProjeto.status == 200){
                
                getProjeto();
                carregaTabelaProjeto();
                
                
            }
        }
    

    }   
    xhrPutProjeto.send(JSON.stringify({
        'prj_id': codProjeto,
         'prj_nome': nomeProjeto, 
         'prj_escopo': escopo, 
         'prj_datainicio': dt_inicio,
         'prj_prazoentrega': dt_prazo,
         'prj_color': cor
       }));

    mudaBotao =  document.getElementById("btn_atualizarCadasProjeto");
    mudaBotao.style.backgroundColor = "#698FEB";
    
    desabilitaCamposProjeto();
    
    }

    
}

function deleteProjeto(){
    recuarCodProjeto();
    codProjeto = document.getElementById("codProjeto").value;
    

    xhrDeleteProjeto = new XMLHttpRequest();
    xhrDeleteProjeto.open("DELETE", URLGETPROJETOS+codProjeto, true);
    xhrDeleteProjeto.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrDeleteProjeto.setRequestHeader("X-CSRFToken", csrftoken)
    xhrDeleteProjeto.setRequestHeader("withCredentials", 'True');
    xhrDeleteProjeto.onload = function () {
        if(xhrDeleteProjeto.readyState == 4){
            if(xhrDeleteProjeto.status == 204){
                carregaTabelaProjeto();
                         
            }
        }
        
    }

    xhrDeleteProjeto.send();
    
     
      
}
///////////////////////FINISH: GET - POST - PUT - DELETE //////////////////////////////////////////////////////////


function clicaProjeto(){
    
    dialogCadastro = document.getElementById("abreCadastroProjeto");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();
    
    xhrAbreProjeto = new XMLHttpRequest();
    xhrAbreProjeto.open('GET', URLGETPROJETOS, true);
    
    xhrAbreProjeto.onreadystatechange = function(){
        
        maiorvalor = 0;
        if(xhrAbreProjeto.readyState == 4){
            if(xhrAbreProjeto.status == 200){
                json = (JSON.parse(xhrAbreProjeto.responseText));

                for(i = 0; i<json.length;i++){
                   if(json[i]['prj_id'] > maiorvalor ){
                        maiorvalor = json[i]['prj_id'];
                    }              
                }
                
                if(maiorvalor == 0){
                    document.getElementById("codProjeto").value = 0;
                    limparCamposCadasProjeto();
                    desabilitaAvancoCodProjeto();
                    desabilitaBtnAtualizarProjeto();
                    desabilitaBtnCancelarProjeto();
                    desabilitaBtnGravaProjeto();
                    desabilitaBtnExcluirProjeto();
                    habilitaBtnNovoProjeto();
                    desabilitaCamposProjeto();
                    desabilitaRecuoCodProjeto();
                }else{
                    document.getElementById("codProjeto").value = maiorvalor;
                    habilitaRecuoCodProjeto();
                    getProjeto();
                }

            }

            
        }
        
    }
    xhrAbreProjeto.send();
    
    
   
   

    habilitaAvancoCodProjeto();
    habilitaRecuoCodProjeto();
    desabilitaBtnCancelarProjeto();
    habilitaBtnNovoProjeto();
    desabilitaBtnGravaProjeto();
    desabilitaAvancoCodProjeto();
    
    
    carregaTabelaProjeto();
    }

function novoProjeto(){
    codProjeto = parseInt(document.getElementById("codProjeto").value);
    if(codProjeto == 0){
        codProjeto = 1;
        document.getElementById("codProjeto").value = codProjeto;
    }else{
    
     
    vetor_projeto = [];
    xhrNovoProjeto = new XMLHttpRequest();
    xhrNovoProjeto.open('GET', URLGETPROJETOS, true);
    xhrNovoProjeto.onreadystatechange = function(){     
        if(xhrNovoProjeto.readyState == 4){
            if(xhrNovoProjeto.status == 200){
                json = (JSON.parse(xhrNovoProjeto.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_projeto.push(json[i]['prj_id']);
                    
                }
                vetor_projeto.reverse();
                codProjeto = vetor_projeto[0] + 1;
              }
        }
        document.getElementById("codProjeto").value = codProjeto;
    }

    xhrNovoProjeto.send();
    }
  
    
    habilitaCamposProjeto();
    habilitaBtnCancelarProjeto();
    desabilitaBtnNovoProjeto();
    habilitaBtnGravarProjeto();
    desabilitaAvancoCodProjeto();
    desabilitaRecuoCodProjeto();
    limparCamposCadasProjeto();
    desabilitaBtnExcluirProjeto();
    desabilitaBtnAtualizarProjeto();
    
        
        
}


function cancelarCadasProjeto(){
    codProjeto = parseInt(document.getElementById("codProjeto").value);
    document.getElementById("codProjeto").value = codProjeto - 1;
    getProjeto();
    desabilitaCamposProjeto();
    
    desabilitaBtnGravaProjeto();
    desabilitaBtnCancelarProjeto();
    habilitaRecuoCodProjeto();
    
    habilitaBtnNovoProjeto();
    habilitaBtnExcluirProjeto();
    habilitaBtnAtualizarProjeto();
}

function recuarCodProjeto(){
    
    codProjeto = parseInt(document.getElementById("codProjeto").value);
    
    vetor_projeto = [];
    xhrRecuarCod = new XMLHttpRequest();
    xhrRecuarCod.open('GET', URLGETPROJETOS, true);
    xhrRecuarCod.onreadystatechange = function(){     
        if(xhrRecuarCod.readyState == 4){
            if(xhrRecuarCod.status == 200){
                json = (JSON.parse(xhrRecuarCod.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_projeto.push(json[i]['prj_id']);
                    
                }
                 
                 menorvalor = vetor_projeto.length;
                 for(i=0;i<vetor_projeto.length;i++){

                    if(codProjeto == vetor_projeto[i]){
                    codProjeto = vetor_projeto[i-1];
                 }
                 if(vetor_projeto[i] < menorvalor){
                    menorvalor = vetor_projeto[i]; 
                }    

                }
                  
                      document.getElementById("codProjeto").value = codProjeto;   
                if(codProjeto == menorvalor){
                    desabilitaRecuoCodProjeto();
                }
                habilitaAvancoCodProjeto();
                getProjeto();
                }else if(xhrRecuarCod.status == 404){ }
        
            
            }
        }
    

        xhrRecuarCod.send();

}

function avancarCodProjeto(){
    codProjeto = parseInt(document.getElementById("codProjeto").value);
    vetor_projeto = [];
    xhrAvancarProjeto = new XMLHttpRequest();
    xhrAvancarProjeto.open('GET', URLGETPROJETOS, true);
    xhrAvancarProjeto.onreadystatechange = function(){     
        if(xhrAvancarProjeto.readyState == 4){
            if(xhrAvancarProjeto.status == 200){
                json = (JSON.parse(xhrAvancarProjeto.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_projeto.push(json[i]['prj_id']);
                    
                }
                
                vetor_projeto.reverse();
                 maiorvalor = 0;
                 for(i=0;i<vetor_projeto.length;i++){
                    
                    if(codProjeto == vetor_projeto[i]){
                    codProjeto = vetor_projeto[i-1];
                 }
                 if(vetor_projeto[i] > maiorvalor){
                    maiorvalor = vetor_projeto[i]; 
                }    

                }
                   
                      document.getElementById("codProjeto").value = codProjeto;   
                if(codProjeto == maiorvalor){
                    desabilitaAvancoCodProjeto();
                }
                habilitaRecuoCodProjeto();
                getProjeto();
                }else if(xhrAvancarProjeto.status == 404){ }
            
            }
        }
    
        
        xhrAvancarProjeto.send();

}

function desabilitaBtnAtualizarProjeto(){
    document.getElementById("btn_atualizarCadasProjeto").disabled = true;
 
   mudaBotao =  document.getElementById("btn_atualizarCadasProjeto");
    mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnAtualizarProjeto(){
        document.getElementById("btn_atualizarCadasProjeto").disabled = false;
     mudaBotao =  document.getElementById("btn_atualizarCadasProjeto");
     mudaBotao.style.backgroundColor = "#698FEB";
      
 
 }


function desabilitaRecuoCodProjeto(){
        document.getElementById("codAnteriorCadasProjeto").disabled = true;
     if(document.getElementById("codAnteriorCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("codAnteriorCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
}
    
}

function desabilitaAvancoCodProjeto(){
  document.getElementById("codPosteriorCadasProjeto").disabled = true;
     if(document.getElementById("codPosteriorCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("codPosteriorCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaRecuoCodProjeto(){
   
   if(document.getElementById("codProjeto").value > 1){ document.getElementById("codAnteriorCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("codAnteriorCadasProjeto");
    mudaBotao.style.backgroundColor = "#698FEB";
     
}
}

function habilitaAvancoCodProjeto(){
  document.getElementById("codPosteriorCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("codPosteriorCadasProjeto");
    mudaBotao.style.backgroundColor = "#698FEB";
}

function fecharCadastroProjeto(){
    dialogCadastro.close();
    limparCamposCadasProjeto();
}

function habilitaBtnCancelarProjeto(){
    document.getElementById("btn_cancelarCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("btn_cancelarCadasProjeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnCancelarProjeto(){
    document.getElementById("btn_cancelarCadasProjeto").disabled = true;
     if(document.getElementById("btn_cancelarCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaCamposProjeto(){
     document.getElementById("nomeProjeto").readOnly = false;
    document.getElementById("escopo").readOnly = false;
    document.getElementById("dt_inicioProjeto").readOnly = false;
    document.getElementById("dt_prazoProjeto").readOnly = false;
    
    document.getElementById("corProjeto").disabled = false;
    
    
}

function desabilitaCamposProjeto(){
    limparCamposCadasProjeto();
    document.getElementById("nomeProjeto").readOnly = true;
    document.getElementById("escopo").readOnly = true;
    document.getElementById("dt_inicioProjeto").readOnly = true;
    document.getElementById("dt_prazoProjeto").readOnly = true;  
    document.getElementById("corProjeto").disabled = true;
    
}

function habilitaBtnNovoProjeto(){
     document.getElementById("btn_novoprojeto").disabled = false;
    mudaBotao =  document.getElementById("btn_novoprojeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnNovoProjeto(){
    document.getElementById("btn_novoprojeto").disabled = true;
    if(document.getElementById("btn_novoprojeto").disabled = true){
       mudaBotao =  document.getElementById("btn_novoprojeto");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function desabilitaBtnExcluirProjeto(){
    document.getElementById("btn_excluirCadasProjeto").disabled = true;
    mudaBotao =  document.getElementById("btn_excluirCadasProjeto");
     mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnExcluirProjeto(){
    document.getElementById("btn_excluirCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasProjeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnGravaProjeto(){
    document.getElementById("btn_salvarprojeto").disabled = true;
    if(document.getElementById("btn_salvarprojeto").disabled = true){
       mudaBotao =  document.getElementById("btn_salvarprojeto");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function habilitaBtnGravarProjeto(){
    document.getElementById("btn_salvarprojeto").disabled = false;
    mudaBotao =  document.getElementById("btn_salvarprojeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function limparCamposCadasProjeto(){
    document.getElementById("nomeProjeto").value = '';
    document.getElementById("escopo").value = '';
    document.getElementById("dt_prazoProjeto").value = '';
    document.getElementById("dt_inicioProjeto").value = '';
    
   mudaCor = document.getElementById("corProjeto");
    cor = "#000000";
    
    mudaCor.value = cor.value;
}



function add_prj_menu_esquerdo(jsonprj){
    document.getElementById("prj_cadastrados").innerHTML = ''; 
    vetor_prjcadastrados = [];
    
                for(i = 0;i<json.length;i++){

                    /*CARREGA VETOR PARA CADASTRAR PROJETO NO MENU LATERAL ESQUERDO */
                    add_btn_prj_menu_esquerdo = [json[i]['prj_id'],"<button id='btn_prj"+json[i]['prj_id']+"' onClick='expandeTrf(this.id);dadosProjeto(this.id)' class='btn_shadow1' style='background-color:"+json[i]['prj_color']+"' >"+json[i]['prj_nome']+"</button>"]; //CRIA VALOR PARA ADICIONAR NA DIV "prj_cadastrados"
                    vetor_prjcadastrados.push(add_btn_prj_menu_esquerdo);//ADICIONA LINHA PARA CRIAÇÃO DO BTN DE PROJETO
                    ///////////////////

                }
                    /*ENVIA PROJETO AO MENU LATERAL ESQUERDO*/
                    document.getElementById("prj_cadastrados").innerHTML = ''; //ZERA DIV PARA NOVOS BUTTONS
                    for(i = 0; i<vetor_prjcadastrados.length;i++){ // VARREDURA DO VETOR CRIADO COM OS INSERTS PARA A DIV
                    document.getElementById("prj_cadastrados").innerHTML +=  vetor_prjcadastrados[i][1];//ADICIONA OS INSERTS NA DIV 
                        
                    novaDivTrf = document.createElement("div");//CRIA NOVA DIV PARA RECEBER TAREFAS CORRESPONDENTES AO PROJETO CRIADO
                        
                    novaDivTrf.id = "trf_cadastradas_prj"+vetor_prjcadastrados[i][0]+"";//NOME DA DIV PARA RECEBER AS TAREFAS
                    
                    document.getElementById("prj_cadastrados").appendChild(novaDivTrf);//ADICIONA A DIV ABAIXO DO PROJETO CRIADO
                    //////////////////////////////////    

                    }
        
                  
    vetorTrfCadastrados(json, null); 

}

function carregaTabelaProjeto(){


    codProjeto = parseInt(document.getElementById("codProjeto").value);
    vetor_tabelaProjeto = [];
    xhrTabelaProjeto = new XMLHttpRequest();
    xhrTabelaProjeto.open('GET', URLGETPROJETOS, true);
    xhrTabelaProjeto.onreadystatechange = function(){     
        if(xhrTabelaProjeto.readyState == 4){
            if(xhrTabelaProjeto.status == 200){
                json = (JSON.parse(xhrTabelaProjeto.responseText));
                         
                for(i = 0;i<json.length;i++){
                    linhaTabelaProjeto = ["<tr><td>"+json[i]['prj_id']+"</td><td>"+json[i]['prj_nome']+"</td><td>"+json[i]['prj_datainicio']+"</td><td>"+json[i]['prj_prazoentrega']+"</td><td bgcolor="+json[i]['prj_color']+"></td></tr>"];
                    vetor_tabelaProjeto.push(linhaTabelaProjeto);                  
                }
            }else if(xhrTabelaProjeto.status == 404){}
            
            }    
        document.getElementById("corpoTabelaProjeto").innerHTML = '';
        
    for(i = 0; i < vetor_tabelaProjeto.length;i++){
         document.getElementById("corpoTabelaProjeto").innerHTML += vetor_tabelaProjeto[i];
    }   
}
    xhrTabelaProjeto.send();
}
/*EXPANDE TAREFAS MENU CENTRAL ESQUERDO*/

recebe_vetorprojeto = [];
recebe_vetortarefa = [];
///FUNÇÃO ATRIBUÍDA PARA O BTN GRAVAR TAREFA
function vetorTrfCadastrados(vetor_projeto, vetor_tarefa){
    vetor_trfcadastrados = [];
    if(vetor_projeto != null){
        recebe_vetorprojeto = vetor_projeto;
    }
    if(vetor_tarefa != null){
        recebe_vetortarefa = vetor_tarefa;
    }

if(recebe_vetorprojeto != '' && recebe_vetortarefa != ''){
  for(i=0;i<recebe_vetorprojeto.length;i++){//VARREDURA NOS PROJETOS CADASTRADOS
       recebeCodPrj = recebe_vetorprojeto[i]['prj_id'];  //SELECIONA O CODIGO DO PROJETO    
       for(x=0; x<recebe_vetortarefa.length;x++){ //VARREDURA NAS TAREFAS CADASTRADAS
            if(recebeCodPrj == recebe_vetortarefa[x]['fk_prj_id']){//VALIDA O CODIGO DO PROJETO DO CADASTRO DE PROJETO AO CODIGO DO PROJETO NO CADASTRO DE TAREFA E CRIA UM VETOR PARA INSERIR NA DIV CRIADA.
                
               codTrf = recebe_vetortarefa[x]['trf_id']; //CODIGO DA TAREFA - TABELA TAREFA
              
               recebeNomeTrf = recebe_vetortarefa[x]['trf_name']; //NOME DA TAREFA - TABELA TAREFA            
               corProjeto = recebe_vetorprojeto[i]['prj_color']; //COR DO PROJETO - TABELA PROJETO                   
               add_btn_trf_menu_esquerdo = [recebeCodPrj,"<button id='btn_trf"+codTrf+"' onClick='dadosTarefa(this.id)' class='btn_shadow3' style='border-color:"+corProjeto+"'>"+recebeNomeTrf+"</button>"]; // CRIA LINHA PARA NOVOS BOTÕES DE TAREFAS, ABAIXO DO PROJETO CORRESPONDENTE
               
               vetor_trfcadastrados.push(add_btn_trf_menu_esquerdo);//ADICIONA NO VETOR AS TAREFAS CADASTRADAS E SEUS RESPECTIVOS BOTÕES, COM O ID DO PROJETO NO ÍNDICE 0                  
           }        
       }    
   }
   //console.log(vetor_trfcadastrados);//VERIFICA INTEGRIDADE DO VETOR  
}
}
///FUNÇÃO ATRIBUÍDA PARA O BTN PROJETO NO MENU LATERAL ESQUERDO

function expandeTrf(nomeBtn){
    
    divideBtn = nomeBtn.substr(7);//REMOVE E DEIXA APENAS O NÚMERO DE IDENTIFICAÇÃO DO BOTÃO DE CADA TAREFA "btn_trf'num exemplo'"
   
    selecionaDiv = document.getElementById('trf_cadastradas_prj'+divideBtn+'').textContent;//SELECIONA A DIV DE CADA PROJETO E VERIFICA SE TEM CONTEÚDO DENTRO
    if(selecionaDiv == ''){//CASO NÃO TENHA CONTEÚDO
       
        for(i=0;i<vetor_trfcadastrados.length;i++){//FAZ VARREDURA NOS BOTÕES DAS TAREFAS
       
        
        if(divideBtn == vetor_trfcadastrados[i][0]){ //CASO O NÚMERO DE IDENTIFICAÇÃO DO BTN DA TAREFA SEJA IGUAL AO ID DE CADA PROJETO, É ADICIONADO O BOTÃO NA DIV CORRESPONDENTE
            
            document.getElementById('trf_cadastradas_prj'+divideBtn+'').innerHTML += vetor_trfcadastrados[i][1];//ADICIONA OS BOTÕES DAS TAREFAS NAS DIV'S DOS PROJETOS CORRESPONDENTES
        }    
        }
   }else{
       document.getElementById('trf_cadastradas_prj'+divideBtn+'').remove() //CASO TENHA CONTEÚDO NA DIV, ELE É ELIMINADO. ISSO FOI FEITO PARA CRIAR O RECUO.
       add_prj_menu_esquerdo();//ADICIONA NOVAMENTE A DIV DO PROJETO
       getAllProjects();
   }





}
/*///////////////////////////////////////////////////////////////////////////////////////*/

/*GET AND POST - API*////////////////////////////////////////////////////////////////////

////DATALIST
function carregaDatalistProjetos(){
    

    xhrCarregaDatalistProjeto = new XMLHttpRequest();
    vetor_DatalistProjetos = [];
    xhrCarregaDatalistProjeto.open("GET", URLGETPROJETOS, true);
    xhrCarregaDatalistProjeto.onreadystatechange = function(){
        if(xhrCarregaDatalistProjeto.readyState == 4){
            if(xhrCarregaDatalistProjeto.status == 200){
               json = JSON.parse(xhrCarregaDatalistProjeto.responseText);     
               document.getElementById("listaProjetos").innerHTML = '';
                for(i = 0; i<json.length; i++){
                    document.getElementById("listaProjetos").innerHTML += "<option value='"+json[i]['prj_nome']+"'>";
                    
                    linha = [json[i]['prj_id'], json[i]['prj_nome']];
                    vetor_DatalistProjetos.push(linha);
                    
                    
                }
                outputDatalistProjetoCadastarefa(vetor_DatalistProjetos);
                outputDatalistInterdependenciaCadastarefa(vetor_DatalistProjetos, null);
               
        }else if(xhrCarregaDatalistProjeto.status == 404){}
    }
}
    xhrCarregaDatalistProjeto.send();
    
    }




function outputDatalistProjetoCadastarefa(vetor_DatalistProjetos)
{
    nomeprojeto = document.getElementById("selecionaProjeto").value;
    
    for(i = 0; i<vetor_DatalistProjetos.length;i++){
        
        if(nomeprojeto == vetor_DatalistProjetos[i][1]){
           
            document.getElementById("id_prj").innerHTML = ""+vetor_DatalistProjetos[i][0]+"";
        }

    }

   
   
}

function carregaDatalistInterdependencia(){
    

xhrCarregaDatalistInterdependencia = new XMLHttpRequest();
vetor_DatalistInterdependencia = [];
xhrCarregaDatalistInterdependencia.open("GET", URLGETTAREFAS, true);
xhrCarregaDatalistInterdependencia.onreadystatechange = function(){
    if(xhrCarregaDatalistInterdependencia.readyState == 4){
        if(xhrCarregaDatalistInterdependencia.status == 200){
           json = JSON.parse(xhrCarregaDatalistInterdependencia.responseText);     
           
            for(i = 0; i<json.length; i++){
               
                linha = [json[i]['fk_prj_id'],json[i]['trf_id'], json[i]['trf_name']];
                vetor_DatalistInterdependencia.push(linha);
                
                
            }
            outputDatalistInterdependenciaCadastarefa(null, vetor_DatalistInterdependencia);
           
           
    }else if(xhrCarregaDatalistInterdependencia.status == 404){}
}
}
xhrCarregaDatalistInterdependencia.send();

}

recebe_projetos = [];
recebe_interdependencias = []
function outputDatalistInterdependenciaCadastarefa(vetor_projetos, vetor_tarefas)
{
    
    vetor_trfcadastrados = [];
    if(vetor_projetos != null){
        recebe_projetos = vetor_projetos;
    }
    if(vetor_tarefas != null){
        recebe_interdependencias = vetor_tarefas;
    }

    


    id_prj = document.getElementById("id_prj").innerHTML;
    
//nomeInterdependencia = document.getElementById("interdependencia").value;

for(i = 0; i<recebe_projetos.length;i++){
    document.getElementById("listaInterdependencia").innerHTML = '';
    for(x=0 ; x<recebe_interdependencias.length;x++){

        if(id_prj == recebe_interdependencias[x][0]){

            document.getElementById("listaInterdependencia").innerHTML += "<option value='"+recebe_interdependencias[x][2]+"'>";
       
        }
    }          
}

nomeinterdependencia = document.getElementById("interdependencia").value;

for(i=0;i<recebe_interdependencias.length;i++){
    if(nomeinterdependencia == recebe_interdependencias[i][2]){
           
        document.getElementById("id_interdependencia").innerHTML = ""+recebe_interdependencias[i][1]+"";
    }
}


}


///////////

function preencheCamposCadasTarefa(json){
    document.getElementById("nomeTarefa").value = json.trf_name; 
    document.getElementById("dt_inicioTarefa").value = json.trf_datainicial;
    document.getElementById("dt_finalTarefa").value = json.trf_datafinal;
    document.getElementById("dt_prazoTarefa").value = json.trf_prazo;
    document.getElementById("entregavel").checked = json.trf_entregavel;
    document.getElementById("id_prj").innerHTML = json.fk_prj_id;
    document.getElementById("id_interdependencia").innerHTML = json.trf_interdependencia;
    

}

function getNomeProjeto(){
    
    xhrGetProjeto = new XMLHttpRequest();
    xhrGetProjeto.open('GET', URLGETPROJETOS, true);
    
    xhrGetProjeto.onreadystatechange = function(){
        if(xhrGetProjeto.readyState == 4){
            if(xhrGetProjeto.status == 200){
                json = JSON.parse(xhrGetProjeto.responseText);
                 
                id_prj = document.getElementById("id_prj").innerHTML;
                for(i =0; i<json.length;i++){
                    if(id_prj == json[i]['prj_id']){
                        document.getElementById("selecionaProjeto").value = json[i]['prj_nome'];
                             
                    }
                }
                getAllProjects(); 
            }else if(xhrGetProjeto.status == 404){}
        }      
    }
    xhrGetProjeto.send();
    
}

function getAllTasks(){
    codTarefa = document.getElementById("codTarefa").value;
    
    
    xhrGetTarefa = new XMLHttpRequest();
    
    xhrGetTarefa.open('GET', URLGETTAREFAS, true);
    
    xhrGetTarefa.onreadystatechange = function(){
        if(xhrGetTarefa.readyState == 4){
            if(xhrGetTarefa.status == 200){
                
                vetor_tarefa = JSON.parse(xhrGetTarefa.responseText); 

                id_interdependencia = document.getElementById("id_interdependencia").innerHTML;
                        
                
                for(i=0;i<vetor_tarefa.length;i++){
                    

                    if(vetor_tarefa[i]['trf_id'] == id_interdependencia){
                       // console.log(vetor_tarefa[i]['trf_name']);
                    document.getElementById("interdependencia").value = vetor_tarefa[i]['trf_name'];
                    }else if(id_interdependencia == 0){
                        document.getElementById("interdependencia").value = '';
                    }
                }
               
            }else if(xhrGetTarefa.status == 404){

            }
        }  
        vetorTrfCadastrados(null,vetor_tarefa)    
    }
    xhrGetTarefa.send();
}

function getTarefa(){
    codTarefa = document.getElementById("codTarefa").value;
    
    if(codTarefa == "undefined"){
        document.getElementById("codTarefa").value = 0;
        limparCamposCadasTarefa();
        desabilitaAvancoCodTarefa();
        desabilitaBtnAtualizarTarefa();
        desabilitaBtnCancelarTarefa();
        desabilitaBtnGravaTarefa();
        desabilitaBtnExcluirTarefa();
        desabilitaCamposTarefa();
        desabilitaRecuoCodTarefa();

    }else{
        xhrGetTarefa = new XMLHttpRequest();
    
        xhrGetTarefa.open('GET', URLGETTAREFAS+codTarefa, true);
            
            xhrGetTarefa.onreadystatechange = function(){
                if(xhrGetTarefa.readyState == 4){
                    if(xhrGetTarefa.status == 200){
                        preencheCamposCadasTarefa(JSON.parse(xhrGetTarefa.responseText));   
                        
                        getNomeProjeto();
                        getAllTasks();

                        
                    }else if(xhrGetTarefa.status == 404){}

                    
                }
                
             
                
            }
            xhrGetTarefa.send();
    
    }
}

function postTarefa(){
   codTarefa = document.getElementById("codTarefa").value;
   nomeTarefa =  document.getElementById("nomeTarefa").value;
   dt_inicioTarefa =  document.getElementById("dt_inicioTarefa").value;
   dt_finalTarefa = document.getElementById("dt_finalTarefa").value;
   dt_prazoTarefa = document.getElementById("dt_prazoTarefa").value;
   entregavel = document.getElementById("entregavel").checked;
   interdependencia = document.getElementById("id_interdependencia").innerHTML;
   
   id_prj = document.getElementById("id_prj").innerHTML;
  
    xhrPostTarefa = new XMLHttpRequest();
    xhrPostTarefa.open("POST", URLGETTAREFAS, true);
    xhrPostTarefa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPostTarefa.setRequestHeader("X-CSRFToken", csrftoken)
    xhrPostTarefa.setRequestHeader("withCredentials", 'True');

    xhrPostTarefa.onload = function(){
        if(xhrPostTarefa.readyState == 4){
            if(xhrPostTarefa.status == 201){
                
                getTarefa();
                
                
            }
        }
    

    }
    xhrPostTarefa.send(JSON.stringify({
         'trf_id': codTarefa,
         'trf_name': nomeTarefa, 
         'trf_datainicial': dt_inicioTarefa, 
         'trf_datafinal': dt_finalTarefa,
         'trf_prazo': dt_prazoTarefa,
         'trf_entregavel': entregavel,
         'trf_interdependencia': interdependencia,
         'trf_color': '#000000',
         'fk_prj_id': id_prj
        }));
         
        desabilitaCamposTarefa();
        habilitaBtnNovaTarefa();
        desabilitaBtnGravaTarefa();
        desabilitaBtnCancelarTarefa();
        habilitaRecuoCodTarefa();
        habilitaBtnExcluirTarefa();
        habilitaBtnAtualizarTarefa();
        getProjeto();
   
}

function putTarefa(){
    if(document.getElementById("nomeTarefa").readOnly == true){
        habilitaCamposTarefa();
        mudaBotao =  document.getElementById("btn_atualizarCadasTarefa");
        mudaBotao.style.backgroundColor = "green";

    }else{
        codTarefa = document.getElementById("codTarefa").value;
    
    urlPutTarefa = 'http://localhost:8000/task/'+codTarefa+'/';

    nomeTarefa =  document.getElementById("nomeTarefa").value;
    dt_inicioTarefa =  document.getElementById("dt_inicioTarefa").value;
    dt_finalTarefa = document.getElementById("dt_finalTarefa").value;
    dt_prazoTarefa = document.getElementById("dt_prazoTarefa").value;
    entregavel = document.getElementById("entregavel").checked;

    interdependencia = document.getElementById("interdependencia").value;
   
   id_prj = document.getElementById("id_prj").innerHTML;
    
    xhrPutTarefa = new XMLHttpRequest();
   
    xhrPutTarefa.open("PUT", urlPutTarefa, true);
    xhrPutTarefa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPutTarefa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrPutTarefa.setRequestHeader("withCredentials", 'True');
    xhrPutTarefa.onload = function(){
        if(xhrPutTarefa.readyState == 4){
            if(xhrPutTarefa.status == 200){
                
                getTarefa();
               
                
            }
        }
    

    }
    xhrPutTarefa.send(JSON.stringify({
        'trf_id': codTarefa,
        'trf_name': nomeTarefa, 
        'trf_datainicial': dt_inicioTarefa, 
        'trf_datafinal': dt_finalTarefa,
        'trf_prazo': dt_prazoTarefa,
        'trf_entregavel': entregavel,
        'trf_interdependencia': interdependencia,
        'trf_color': '#000000',
        'fk_prj_id': id_prj
       }));

    mudaBotao =  document.getElementById("btn_atualizarCadasTarefa");
    mudaBotao.style.backgroundColor = "#698FEB";
    
    desabilitaCamposTarefa();
    
    }

    
}


function deleteTarefa(){
    recuarCodTarefa();
    codTarefa = document.getElementById("codTarefa").value;

    xhrDeleteTarefa = new XMLHttpRequest();
    xhrDeleteTarefa.open("DELETE", URLGETTAREFAS+codTarefa, true);
    xhrDeleteTarefa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrDeleteTarefa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrDeleteTarefa.setRequestHeader("withCredentials", 'True');
    xhrDeleteTarefa.send(); 
    
    getTarefa();
    if(document.getElementById("codTarefa").value == 0){
        limparCamposCadasTarefa();
        habilitaBtnAtualizarTarefa();
    }
     
    
}
///////////////////////FINISH: GET - POST - PUT - DELETE //////////////////////////////////////////////////////////



/*CADASTRO DE TAREFAS*/////////////////////////////

vetor_tarefa = [];

function clicaTarefa(){
    dialogCadastro = document.getElementById("abreCadastroTarefa");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();
    xhrAbreTarefa = new XMLHttpRequest();
    xhrAbreTarefa.open('GET', URLGETTAREFAS, true);
    
    xhrAbreTarefa.onreadystatechange = function(){
        
        maiorvalor = 0;
        if(xhrAbreTarefa.readyState == 4){
            if(xhrAbreTarefa.status == 200){
                json = (JSON.parse(xhrAbreTarefa.responseText));

                for(i = 0; i<json.length;i++){
                   if(json[i]['trf_id'] > maiorvalor ){
                        maiorvalor = json[i]['trf_id'];
                    }              
                }
                if(maiorvalor == 0){
                    document.getElementById("codTarefa").value = 0;
                    limparCamposCadasTarefa();
                    desabilitaAvancoCodTarefa();
                    desabilitaBtnAtualizarTarefa();
                    desabilitaBtnCancelarTarefa();
                    desabilitaBtnGravaTarefa();
                    desabilitaBtnExcluirTarefa();
                    habilitaBtnNovaTarefa();
                    desabilitaCamposTarefa();
                    desabilitaRecuoCodTarefa();
                }else{
                    document.getElementById("codTarefa").value = maiorvalor;
                    habilitaRecuoCodTarefa();
                    getTarefa();
                }

            }else if(xhrAbreTarefa.status == 404){}

            
        }
        
    }
    xhrAbreTarefa.send();
    
    carregaDatalistProjetos();
    habilitaAvancoCodTarefa();
    habilitaRecuoCodTarefa();
    desabilitaBtnCancelarTarefa();
    habilitaBtnNovaTarefa();
    desabilitaBtnGravaTarefa();
    desabilitaAvancoCodTarefa();
    //desabilitaHabilitaBtnExcluirTarefa(); 
}

function novaTarefa(){
    
    codTarefa = parseInt(document.getElementById("codTarefa").value);
    
    if(codTarefa == 0){
        codTarefa = 1;
        document.getElementById("codTarefa").value = codTarefa;
    }else{
    vetor_tarefa = [];
    xhrNovaTarefa = new XMLHttpRequest();
    xhrNovaTarefa.open('GET', URLGETTAREFAS, true);
    
    xhrNovaTarefa.onreadystatechange = function(){     
        if(xhrNovaTarefa.readyState == 4){
            
            if(xhrNovaTarefa.status == 200){
                json = (JSON.parse(xhrNovaTarefa.responseText));
                
                for(i = 0;i<json.length;i++){
                    vetor_tarefa.push(json[i]['trf_id']);
                    
                }
                vetor_tarefa.reverse();
                
                codTarefa = vetor_tarefa[0] + 1;
              }
        }
        document.getElementById("codTarefa").value = codTarefa;
    }
    
}

habilitaCamposTarefa();
habilitaBtnCancelarTarefa();
desabilitaBtnNovaTarefa();
habilitaBtnGravarTarefa();
desabilitaAvancoCodTarefa();
desabilitaRecuoCodTarefa();
limparCamposCadasTarefa();
desabilitaBtnExcluirTarefa();
desabilitaBtnAtualizarTarefa();
xhrNovaTarefa.send();
}

function cancelarCadasTarefa(){
    codTarefa = parseInt(document.getElementById("codTarefa").value);
    document.getElementById("codTarefa").value = codTarefa - 1;
    
    desabilitaCamposTarefa();
    
    desabilitaBtnGravaTarefa();
    desabilitaBtnCancelarTarefa();
    habilitaRecuoCodTarefa();
    getTarefa();
    habilitaBtnNovaTarefa();
    habilitaBtnExcluirTarefa();
    habilitaBtnAtualizarTarefa();
   
}

/*


function carregaDataListInterdepedencia(){
    
     document.getElementById("listaInterdependencia").innerHTML = '';
    
    if(vetor_tarefa.length == 0){
        document.getElementById("listaInterdependencia").innerHTML += "<option value=' '>";
    }
    for(i =0; i< vetor_tarefa.length;i++){
        
        document.getElementById("listaInterdependencia").innerHTML += "<option value='"+vetor_tarefa[i][1]+"'>";
        
        
    }
    
    
}*/


function recuarCodTarefa(){
    codTarefa = parseInt(document.getElementById("codTarefa").value);
    
    vetor_tarefa = [];
    xhrRecuarCod = new XMLHttpRequest();
    xhrRecuarCod.open('GET', URLGETTAREFAS, true);
    xhrRecuarCod.onreadystatechange = function(){     
        if(xhrRecuarCod.readyState == 4){
            if(xhrRecuarCod.status == 200){
                json = (JSON.parse(xhrRecuarCod.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_tarefa.push(json[i]['trf_id']);
                    
                }
                 
                 menorvalor = vetor_tarefa.length;
                 for(i=0;i<vetor_tarefa.length;i++){

                    if(codTarefa == vetor_tarefa[i]){
                    codTarefa = vetor_tarefa[i-1];
                 }
                 if(vetor_tarefa[i] < menorvalor){
                    menorvalor = vetor_tarefa[i]; 
                }    

                }
                document.getElementById("codTarefa").value = codTarefa;   
                if(codTarefa == menorvalor){
                    desabilitaRecuoCodTarefa();
                }
                habilitaAvancoCodTarefa();
                getTarefa();
                }else if(xhrRecuarCod.status == 404){}
            }
        }
    

        xhrRecuarCod.send();
        

}

function avancarCodTarefa(){
    codTarefa = parseInt(document.getElementById("codTarefa").value);
    vetor_tarefa = [];
    xhrAvancarTarefa = new XMLHttpRequest();
    xhrAvancarTarefa.open('GET', URLGETTAREFAS, true);
    xhrAvancarTarefa.onreadystatechange = function(){     
        if(xhrAvancarTarefa.readyState == 4){
            if(xhrAvancarTarefa.status == 200){
                json = (JSON.parse(xhrAvancarTarefa.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_tarefa.push(json[i]['trf_id']);
                    
                }
                
                vetor_tarefa.reverse();
                 maiorvalor = 0;
                 for(i=0;i<vetor_tarefa.length;i++){
                    
                    if(codTarefa == vetor_tarefa[i]){
                    codTarefa = vetor_tarefa[i-1];
                 }
                 if(vetor_tarefa[i] > maiorvalor){
                    maiorvalor = vetor_tarefa[i]; 
                }    

                }
                   
                      document.getElementById("codTarefa").value = codTarefa;   
                if(codTarefa == maiorvalor){
                    desabilitaAvancoCodTarefa();
                }
                habilitaRecuoCodTarefa();
                getTarefa();
                }else if(xhrAvancarTarefa.status == 404){}
            }
        }
    
        
        xhrAvancarTarefa.send();
}



function desabilitaRecuoCodTarefa(){
        document.getElementById("codAnteriorCadasTarefa").disabled = true;
     if(document.getElementById("codAnteriorCadasTarefa").disabled = true){
       mudaBotao =  document.getElementById("codAnteriorCadasTarefa");
        mudaBotao.style.backgroundColor = "gray";
}
    
}

function desabilitaAvancoCodTarefa(){
  document.getElementById("codPosteriorCadasTarefa").disabled = true;
     if(document.getElementById("codPosteriorCadasTarefa").disabled = true){
       mudaBotao =  document.getElementById("codPosteriorCadasTarefa");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaRecuoCodTarefa(){
   
   if(document.getElementById("codTarefa").value > 1){ document.getElementById("codAnteriorCadasTarefa").disabled = false;
    mudaBotao =  document.getElementById("codAnteriorCadasTarefa");
    mudaBotao.style.backgroundColor = "#698FEB";
     
}
}

function habilitaAvancoCodTarefa(){
  document.getElementById("codPosteriorCadasTarefa").disabled = false;
    mudaBotao =  document.getElementById("codPosteriorCadasTarefa");
    mudaBotao.style.backgroundColor = "#698FEB";
}

function fecharCadastroTarefa(){
    dialogCadastro.close();
    limparCamposCadasTarefa();
}

function habilitaBtnCancelarTarefa(){
    document.getElementById("btn_cancelarCadasTarefa").disabled = false;
    mudaBotao =  document.getElementById("btn_cancelarCadasTarefa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnCancelarTarefa(){
    document.getElementById("btn_cancelarCadasTarefa").disabled = true;
     if(document.getElementById("btn_cancelarCadasTarefa").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarCadasTarefa");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaCamposTarefa(){
     document.getElementById("selecionaProjeto").disabled = false;
    document.getElementById("interdependencia").disabled = false;   
    document.getElementById("nomeTarefa").readOnly = false;
    document.getElementById("dt_inicioTarefa").readOnly = false;
     document.getElementById("dt_finalTarefa").readOnly = false;
    document.getElementById("dt_prazoTarefa").readOnly = false;
        document.getElementById("entregavel").disabled = false;  
}

function desabilitaCamposTarefa(){
    limparCamposCadasTarefa();
    document.getElementById("selecionaProjeto").disabled = true; 
    document.getElementById("interdependencia").disabled = true; 
    document.getElementById("nomeTarefa").readOnly = true;
    document.getElementById("dt_inicioTarefa").readOnly = true;
     document.getElementById("dt_finalTarefa").readOnly = true;
    document.getElementById("dt_prazoTarefa").readOnly = true;
     document.getElementById("entregavel").disabled = true;  
    
}

function habilitaBtnNovaTarefa(){
     document.getElementById("btn_novatarefa").disabled = false;
    mudaBotao =  document.getElementById("btn_novatarefa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnNovaTarefa(){
    document.getElementById("btn_novatarefa").disabled = true;
    if(document.getElementById("btn_novatarefa").disabled = true){
       mudaBotao =  document.getElementById("btn_novatarefa");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function desabilitaBtnGravaTarefa(){
    document.getElementById("btn_salvartarefa").disabled = true;
    if(document.getElementById("btn_salvartarefa").disabled = true){
       mudaBotao =  document.getElementById("btn_salvartarefa");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function habilitaBtnGravarTarefa(){
    document.getElementById("btn_salvartarefa").disabled = false;
    mudaBotao =  document.getElementById("btn_salvartarefa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function limparCamposCadasTarefa(){
    document.getElementById("selecionaProjeto").value = '';
    document.getElementById("interdependencia").value = '';
    document.getElementById("nomeTarefa").value = '';
    document.getElementById("dt_inicioTarefa").value = '';
     document.getElementById("dt_finalTarefa").value = '';
    document.getElementById("dt_prazoTarefa").value = '';
    
   
}

function desabilitaBtnAtualizarTarefa(){
    document.getElementById("btn_atualizarCadasTarefa").disabled = true;
 
   mudaBotao =  document.getElementById("btn_atualizarCadasTarefa");
    mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnAtualizarTarefa(){
        document.getElementById("btn_atualizarCadasTarefa").disabled = false;
     mudaBotao =  document.getElementById("btn_atualizarCadasTarefa");
     mudaBotao.style.backgroundColor = "#698FEB";
 }

 function desabilitaBtnExcluirTarefa(){
    document.getElementById("btn_excluirCadasTarefa").disabled = true;
    mudaBotao =  document.getElementById("btn_excluirCadasTarefa");
    mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnExcluirTarefa(){
    document.getElementById("btn_excluirCadasTarefa").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasTarefa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

/*///////////////////////////////////////*/

/*DISTRIBUIÇÃO DE PESSOAS AOS PROJETOS*///////////////////////////////

/*GET AND POST - API*////////////////////////////////////////////////////////////////////

////DATALIST
function carregaDatalistProjetos(){
    

    xhrCarregaDatalistProjeto = new XMLHttpRequest();
    vetor_DatalistProjetos = [];
    xhrCarregaDatalistProjeto.open("GET", URLGETPROJETOS, true);
    xhrCarregaDatalistProjeto.onreadystatechange = function(){
        if(xhrCarregaDatalistProjeto.readyState == 4){
            if(xhrCarregaDatalistProjeto.status == 200){
               json = JSON.parse(xhrCarregaDatalistProjeto.responseText);     
               document.getElementById("listaProjetos").innerHTML = '';
                for(i = 0; i<json.length; i++){
                    document.getElementById("listaProjetos").innerHTML += "<option value='"+json[i]['prj_nome']+"'>";
                    
                    linha = [json[i]['prj_id'], json[i]['prj_nome']];
                    vetor_DatalistProjetos.push(linha);
                    
                    
                }
                outputDatalistProjetoCadastarefa(vetor_DatalistProjetos);
                outputDatalistInterdependenciaCadastarefa(vetor_DatalistProjetos, null);
               
        }else if(xhrCarregaDatalistProjeto.status == 404){}
    }
}
    xhrCarregaDatalistProjeto.send();
    
    }




function outputDatalistProjetoCadastarefa(vetor_DatalistProjetos)
{
    nomeprojeto = document.getElementById("selecionaProjeto").value;
    
    for(i = 0; i<vetor_DatalistProjetos.length;i++){
        
        if(nomeprojeto == vetor_DatalistProjetos[i][1]){
           
            document.getElementById("id_prj").innerHTML = ""+vetor_DatalistProjetos[i][0]+"";
        }

    }

   
   
}

function carregaDatalistInterdependencia(){
    

xhrCarregaDatalistInterdependencia = new XMLHttpRequest();
vetor_DatalistInterdependencia = [];
xhrCarregaDatalistInterdependencia.open("GET", URLGETTAREFAS, true);
xhrCarregaDatalistInterdependencia.onreadystatechange = function(){
    if(xhrCarregaDatalistInterdependencia.readyState == 4){
        if(xhrCarregaDatalistInterdependencia.status == 200){
           json = JSON.parse(xhrCarregaDatalistInterdependencia.responseText);     
           
            for(i = 0; i<json.length; i++){
               
                linha = [json[i]['fk_prj_id'],json[i]['trf_id'], json[i]['trf_name']];
                vetor_DatalistInterdependencia.push(linha);
                
                
            }
            outputDatalistInterdependenciaCadastarefa(null, vetor_DatalistInterdependencia);
           
           
    }else if(xhrCarregaDatalistInterdependencia.status == 404){}
}
}
xhrCarregaDatalistInterdependencia.send();

}

recebe_projetos = [];
recebe_interdependencias = []
function outputDatalistInterdependenciaCadastarefa(vetor_projetos, vetor_tarefas)
{
    
    vetor_trfcadastrados = [];
    if(vetor_projetos != null){
        recebe_projetos = vetor_projetos;
    }
    if(vetor_tarefas != null){
        recebe_interdependencias = vetor_tarefas;
    }

    


    id_prj = document.getElementById("id_prj").innerHTML;
    
//nomeInterdependencia = document.getElementById("interdependencia").value;

for(i = 0; i<recebe_projetos.length;i++){
    document.getElementById("listaInterdependencia").innerHTML = '';
    for(x=0 ; x<recebe_interdependencias.length;x++){

        if(id_prj == recebe_interdependencias[x][0]){

            document.getElementById("listaInterdependencia").innerHTML += "<option value='"+recebe_interdependencias[x][2]+"'>";
       
        }
    }          
}

nomeinterdependencia = document.getElementById("interdependencia").value;

for(i=0;i<recebe_interdependencias.length;i++){
    if(nomeinterdependencia == recebe_interdependencias[i][2]){
           
        document.getElementById("id_interdependencia").innerHTML = ""+recebe_interdependencias[i][1]+"";
    }
}


}


///////////

function preencheCamposCadasTarefa(json){
    document.getElementById("nomeTarefa").value = json.trf_name; 
    document.getElementById("dt_inicioTarefa").value = json.trf_datainicial;
    document.getElementById("dt_finalTarefa").value = json.trf_datafinal;
    document.getElementById("dt_prazoTarefa").value = json.trf_prazo;
    document.getElementById("entregavel").checked = json.trf_entregavel;
    document.getElementById("id_prj").innerHTML = json.fk_prj_id;
    document.getElementById("id_interdependencia").innerHTML = json.trf_interdependencia;
    

}

function getNomeProjeto(){
    
    xhrGetProjeto = new XMLHttpRequest();
    xhrGetProjeto.open('GET', URLGETPROJETOS, true);
    
    xhrGetProjeto.onreadystatechange = function(){
        if(xhrGetProjeto.readyState == 4){
            if(xhrGetProjeto.status == 200){
                json = JSON.parse(xhrGetProjeto.responseText);
                 
                id_prj = document.getElementById("id_prj").innerHTML;
                for(i =0; i<json.length;i++){
                    if(id_prj == json[i]['prj_id']){
                        document.getElementById("selecionaProjeto").value = json[i]['prj_nome'];
                             
                    }
                }
                getAllProjects(); 
            }else if(xhrGetProjeto.status == 404){}
        }      
    }
    xhrGetProjeto.send();
    
}

function getAllTasks(){
    codTarefa = document.getElementById("codTarefa").value;
    
    
    xhrGetTarefa = new XMLHttpRequest();
    
    xhrGetTarefa.open('GET', URLGETTAREFAS, true);
    
    xhrGetTarefa.onreadystatechange = function(){
        if(xhrGetTarefa.readyState == 4){
            if(xhrGetTarefa.status == 200){
                
                vetor_tarefa = JSON.parse(xhrGetTarefa.responseText); 

                id_interdependencia = document.getElementById("id_interdependencia").innerHTML;
                        
                
                for(i=0;i<vetor_tarefa.length;i++){
                    

                    if(vetor_tarefa[i]['trf_id'] == id_interdependencia){
                       // console.log(vetor_tarefa[i]['trf_name']);
                    document.getElementById("interdependencia").value = vetor_tarefa[i]['trf_name'];
                    }else if(id_interdependencia == 0){
                        document.getElementById("interdependencia").value = '';
                    }
                }
               
            }else if(xhrGetTarefa.status == 404){

            }
        }  
        vetorTrfCadastrados(null,vetor_tarefa)    
    }
    xhrGetTarefa.send();
}

function getTarefa(){
    codTarefa = document.getElementById("codTarefa").value;
    
    if(codTarefa == "undefined"){
        document.getElementById("codTarefa").value = 0;
        limparCamposCadasTarefa();
        desabilitaAvancoCodTarefa();
        desabilitaBtnAtualizarTarefa();
        desabilitaBtnCancelarTarefa();
        desabilitaBtnGravaTarefa();
        desabilitaBtnExcluirTarefa();
        desabilitaCamposTarefa();
        desabilitaRecuoCodTarefa();

    }else{
        xhrGetTarefa = new XMLHttpRequest();
    
        xhrGetTarefa.open('GET', URLGETTAREFAS+codTarefa, true);
            
            xhrGetTarefa.onreadystatechange = function(){
                if(xhrGetTarefa.readyState == 4){
                    if(xhrGetTarefa.status == 200){
                        preencheCamposCadasTarefa(JSON.parse(xhrGetTarefa.responseText));   
                        
                        getNomeProjeto();
                        getAllTasks();

                        
                    }else if(xhrGetTarefa.status == 404){}

                    
                }
                
             
                
            }
            xhrGetTarefa.send();
    
    }
}

function postTarefa(){
   codTarefa = document.getElementById("codTarefa").value;
   nomeTarefa =  document.getElementById("nomeTarefa").value;
   dt_inicioTarefa =  document.getElementById("dt_inicioTarefa").value;
   dt_finalTarefa = document.getElementById("dt_finalTarefa").value;
   dt_prazoTarefa = document.getElementById("dt_prazoTarefa").value;
   entregavel = document.getElementById("entregavel").checked;
   interdependencia = document.getElementById("id_interdependencia").innerHTML;
   
   id_prj = document.getElementById("id_prj").innerHTML;
  
    xhrPostTarefa = new XMLHttpRequest();
    xhrPostTarefa.open("POST", URLGETTAREFAS, true);
    xhrPostTarefa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPostTarefa.setRequestHeader("X-CSRFToken", csrftoken)
    xhrPostTarefa.setRequestHeader("withCredentials", 'True');

    xhrPostTarefa.onload = function(){
        if(xhrPostTarefa.readyState == 4){
            if(xhrPostTarefa.status == 201){
                
                getTarefa();
                
                
            }
        }
    

    }
    xhrPostTarefa.send(JSON.stringify({
         'trf_id': codTarefa,
         'trf_name': nomeTarefa, 
         'trf_datainicial': dt_inicioTarefa, 
         'trf_datafinal': dt_finalTarefa,
         'trf_prazo': dt_prazoTarefa,
         'trf_entregavel': entregavel,
         'trf_interdependencia': interdependencia,
         'trf_color': '#000000',
         'fk_prj_id': id_prj
        }));
         
        desabilitaCamposTarefa();
        habilitaBtnNovaTarefa();
        desabilitaBtnGravaTarefa();
        desabilitaBtnCancelarTarefa();
        habilitaRecuoCodTarefa();
        habilitaBtnExcluirTarefa();
        habilitaBtnAtualizarTarefa();
        getProjeto();
   
}

function putTarefa(){
    if(document.getElementById("nomeTarefa").readOnly == true){
        habilitaCamposTarefa();
        mudaBotao =  document.getElementById("btn_atualizarCadasTarefa");
        mudaBotao.style.backgroundColor = "green";

    }else{
        codTarefa = document.getElementById("codTarefa").value;
    
    urlPutTarefa = 'http://localhost:8000/task/'+codTarefa+'/';

    nomeTarefa =  document.getElementById("nomeTarefa").value;
    dt_inicioTarefa =  document.getElementById("dt_inicioTarefa").value;
    dt_finalTarefa = document.getElementById("dt_finalTarefa").value;
    dt_prazoTarefa = document.getElementById("dt_prazoTarefa").value;
    entregavel = document.getElementById("entregavel").checked;

    interdependencia = document.getElementById("interdependencia").value;
   
   id_prj = document.getElementById("id_prj").innerHTML;
    
    xhrPutTarefa = new XMLHttpRequest();
   
    xhrPutTarefa.open("PUT", urlPutTarefa, true);
    xhrPutTarefa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPutTarefa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrPutTarefa.setRequestHeader("withCredentials", 'True');
    xhrPutTarefa.onload = function(){
        if(xhrPutTarefa.readyState == 4){
            if(xhrPutTarefa.status == 200){
                
                getTarefa();
               
                
            }
        }
    

    }
    xhrPutTarefa.send(JSON.stringify({
        'trf_id': codTarefa,
        'trf_name': nomeTarefa, 
        'trf_datainicial': dt_inicioTarefa, 
        'trf_datafinal': dt_finalTarefa,
        'trf_prazo': dt_prazoTarefa,
        'trf_entregavel': entregavel,
        'trf_interdependencia': interdependencia,
        'trf_color': '#000000',
        'fk_prj_id': id_prj
       }));

    mudaBotao =  document.getElementById("btn_atualizarCadasTarefa");
    mudaBotao.style.backgroundColor = "#698FEB";
    
    desabilitaCamposTarefa();
    
    }

    
}


function deleteTarefa(){
    recuarCodTarefa();
    codTarefa = document.getElementById("codTarefa").value;
    nomeTarefa =  document.getElementById("nomeTarefa").value;
    dt_inicioTarefa =  document.getElementById("dt_inicioTarefa").value;
    dt_finalTarefa = document.getElementById("dt_finalTarefa").value;
    dt_prazoTarefa = document.getElementById("dt_prazoTarefa").value;
    entregavel = document.getElementById("entregavel");
    interdependencia = document.getElementById("interdependencia").value;
   
   id_prj = document.getElementById("id_prj").innerHTML;

    xhrDeleteTarefa = new XMLHttpRequest();
    xhrDeleteTarefa.open("DELETE", URLGETTAREFAS+codTarefa, true);
    xhrDeleteTarefa.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrDeleteTarefa.setRequestHeader("X-CSRFToken", csrftoken);
    xhrDeleteTarefa.setRequestHeader("withCredentials", 'True');
    xhrDeleteTarefa.send(); 
    
    getTarefa();
    if(document.getElementById("codProjeto").value == 0){
        limparCamposCadasProjeto();
        habilitaBtnAtualizarProjeto();
    }
     
    
}
///////////////////////FINISH: GET - POST - PUT - DELETE //////////////////////////////////////////////////////////

////DATALIST
function dt_projetos_distribuicao(){
    document.getElementById('listaTarefa').value = '';

    xhr_dt_projetos_distribuicao = new XMLHttpRequest();
    vetor_dt_projetos_distribuicao = [];
    xhr_dt_projetos_distribuicao.open("GET", URLGETPROJETOS, true);
    xhr_dt_projetos_distribuicao.onreadystatechange = function(){
        if(xhr_dt_projetos_distribuicao.readyState == 4){
            if(xhr_dt_projetos_distribuicao.status == 200){
               json = JSON.parse(xhr_dt_projetos_distribuicao.responseText);     
               document.getElementById("listaProjetos_distribuicao").innerHTML = '';
                for(i = 0; i<json.length; i++){
                    document.getElementById("listaProjetos_distribuicao").innerHTML += "<option value='"+json[i]['prj_nome']+"'>";
                    
                    linha = [json[i]['prj_id'], json[i]['prj_nome']];
                    vetor_dt_projetos_distribuicao.push(linha);
                    
                    
                }
                outputDatalistProjetos(vetor_dt_projetos_distribuicao);
                
                
               
        }else if(xhr_dt_projetos_distribuicao.status == 404){}
    }
}
xhr_dt_projetos_distribuicao.send();
    
    }




function outputDatalistProjetos(vetor_dt_projetos_distribuicao)
{
    
    nomeprojeto = document.getElementById("selecionaProjeto_distribuicao").value;
    
    for(i = 0; i<vetor_dt_projetos_distribuicao.length;i++){
        
        if(nomeprojeto == vetor_dt_projetos_distribuicao[i][1]){
            
            document.getElementById("id_prjDistr").innerHTML = ""+vetor_dt_projetos_distribuicao[i][0]+"";
        }

    }
    
    dt_tarefas_distribuicao();
    
}

function dt_tarefas_distribuicao(){
    
xhr_dt_tarefas_distribuicao = new XMLHttpRequest();
vetor_tarefas_distr = [];
xhr_dt_tarefas_distribuicao.open("GET", URLGETTAREFAS, true);
xhr_dt_tarefas_distribuicao.onreadystatechange = function(){
    if(xhr_dt_tarefas_distribuicao.readyState == 4){
        if(xhr_dt_tarefas_distribuicao.status == 200){
           json = JSON.parse(xhr_dt_tarefas_distribuicao.responseText);     
           
            for(i = 0; i<json.length; i++){
               
                linha = [json[i]['fk_prj_id'],json[i]['trf_id'], json[i]['trf_name']];
                vetor_tarefas_distr.push(linha);
                
                
            }

                id_prjDistr = document.getElementById("id_prjDistr").innerHTML;
                
                //nomeInterdependencia = document.getElementById("interdependencia").value;
                document.getElementById("listaTarefa_distribuicao").innerHTML = '';
                for(i = 0; i<vetor_tarefas_distr.length;i++){
                    
                        if(id_prjDistr == vetor_tarefas_distr[i][0]){
                            
                            document.getElementById("listaTarefa_distribuicao").innerHTML += "<option value='"+vetor_tarefas_distr[i][2]+"'>";
                            console.log("<option value='"+vetor_tarefas_distr[i][2]+"'>");
                        }

                       
                            
                }
                nome_tarefa = document.getElementById("listaTarefa").value;
                for(i = 0; i<vetor_tarefas_distr.length;i++){
                    
                    
                        
                    if(nome_tarefa == vetor_tarefas_distr[i][2]){
                        console.log(nome_tarefa);
                        document.getElementById("id_trfDistr").innerHTML = ""+vetor_tarefas_distr[i][1]+"";
                    }               
                        
            }

               
            
         
           
           
    }else if(xhr_dt_tarefas_distribuicao.status == 404){}
}
}
xhr_dt_tarefas_distribuicao.send();

}


function dt_pessoas_distribuicao(){
    

    xhr_dt_pessoas_distribuicao = new XMLHttpRequest();
    
    document.getElementById("listaPessoa_distribuicao").innerHTML = '';
    xhr_dt_pessoas_distribuicao.open("GET", URLGETPESSOAS, true);
    xhr_dt_pessoas_distribuicao.onreadystatechange = function(){
        if(xhr_dt_pessoas_distribuicao.readyState == 4){
            if(xhr_dt_pessoas_distribuicao.status == 200){
               json = JSON.parse(xhr_dt_pessoas_distribuicao.responseText);     
               
                for(i = 0; i<json.length; i++){
                    document.getElementById("listaPessoa_distribuicao").innerHTML += "<option value='"+json[i]['pes_nome']+"'>";                  
                }
                
       }else if(xhr_dt_pessoas_distribuicao.status == 404){}
    }
    }
    xhr_dt_pessoas_distribuicao.send();
    
    }


///////////

function preencheCamposDistribuicao(json){
        document.getElementById("id_prjDistr").innerHTML = json.fk_prj_id;
    document.getElementById("id_trfDistr").innerHTML = json.trf_id;
    document.getElementById("id_pesDistr").innerHTML = json.pes_id;
    

}

function getNomeProjeto_Distribuicao(){
    
    xhrgetNomeProjeto_Distribuicao = new XMLHttpRequest();
    xhrgetNomeProjeto_Distribuicao.open('GET', URLGETPROJETOS, true);
    
    xhrgetNomeProjeto_Distribuicao.onreadystatechange = function(){
        if(xhrgetNomeProjeto_Distribuicao.readyState == 4){
            if(xhrgetNomeProjeto_Distribuicao.status == 200){
                json = JSON.parse(xhrgetNomeProjeto_Distribuicao.responseText);
                 
                id_prjDistr = document.getElementById("id_prjDistr").innerHTML;
                for(i =0; i<json.length;i++){
                    if(id_prjDistr == json[i]['prj_id']){
                        document.getElementById("listaProjetos_distribuicao").value = json[i]['prj_nome'];
                             
                    }
                }
                getAllTasks_Distribuicao(); 
            }else if(xhrgetNomeProjeto_Distribuicao.status == 404){}
        }      
    }
    xhrgetNomeProjeto_Distribuicao.send();
    
}

function getAllTasks_Distribuicao(){
    xhrgetAllTasks_Distribuicao = new XMLHttpRequest();
    
    xhrgetAllTasks_Distribuicao.open('GET', URLGETTAREFAS, true);
    
    xhrgetAllTasks_Distribuicao.onreadystatechange = function(){
        if(xhrgetAllTasks_Distribuicao.readyState == 4){
            if(xhrgetAllTasks_Distribuicao.status == 200){
                
                vetor_tarefa = JSON.parse(xhrgetAllTasks_Distribuicao.responseText); 

                id_trfDistr = document.getElementById("id_trfDistr").innerHTML;
                        
                
                for(i=0;i<vetor_tarefa.length;i++){
                    

                    if(vetor_tarefa[i]['trf_id'] == id_trfDistr){
                       // console.log(vetor_tarefa[i]['trf_name']);
                    document.getElementById("listaTarefa").value = vetor_tarefa[i]['trf_name'];
                    }else if(id_trfDistr == 0){
                        document.getElementById("listaTarefa").value = '';
                    }
                }
               
            }else if(xhrgetAllTasks_Distribuicao.status == 404){

            }
        }  
       
    }
    xhrgetAllTasks_Distribuicao.send();
}



function getDistribuicao(){
   codDistribuicao = document.getElementById('codDistribuicao').value;
    if(codDistribuicao == "undefined"){
        document.getElementById("codDistribuicao").value = 0;
        limparCamposCadasDistribuicao();
        desabilitaAvancocodDistribuicao();
        desabilitaBtnAtualizarDistribuicao();
        desabilitaBtnCancelarDistribuicao();
        desabilitaBtnGravaDistribuicao();
        desabilitaBtnExcluirDistribuicao();
        desabilitaCamposDistribuicao();
        desabilitaRecuoCodDistribuicao();

    }else{
        xhrGetDistribuicao = new XMLHttpRequest();
    
        xhrGetDistribuicao.open('GET', URLGETDISTRIBUICAO+codDistribuicao, true);
            
            xhrGetDistribuicao.onreadystatechange = function(){
                if(xhrGetDistribuicao.readyState == 4){
                    if(xhrGetDistribuicao.status == 200){
                        preencheCamposCadasTarefa(JSON.parse(xhrGetDistribuicao.responseText));   
                        
                        getNomeProjeto_Distribuicao();
                        getAllTasks_Distribuicao();

                        
                    }else if(xhrGetDistribuicao.status == 404){}

                    
                }
                
             
                
            }
            xhrGetDistribuicao.send();
    
    }
}

function postDistribuicao(){
   codPesTrf = document.getElementById('codDistribuicao').value;
   codTarefaDistr = document.getElementById('id_trfDistr').innerHTML;
   codPessoaDistr = document.getElementById('id_pesDistr').innerHTML;
   
   
  
    xhrPostDistribuicao = new XMLHttpRequest();
    xhrPostDistribuicao.open("POST", URLGETTAREFAS, true);
    xhrPostDistribuicao.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPostDistribuicao.setRequestHeader("X-CSRFToken", csrftoken)
    xhrPostDistribuicao.setRequestHeader("withCredentials", 'True');

    xhrPostDistribuicao.onload = function(){
        if(xhrPostDistribuicao.readyState == 4){
            if(xhrPostDistribuicao.status == 201){
                
                getTarefa();
                
                
            }
        }
    

    }
    xhrPostDistribuicao.send(JSON.stringify({
         'pes_trf_id': codPesTrf,
         'fk_pes_id': codPessoaDistr,
         'fk_trf_id': codTarefaDistr       
        }));
         
        desabilitaCamposDistribuicao();
        habilitaBtnNovaDistribuicao();
        desabilitaBtnGravaDistribuicao();
        desabilitaBtnCancelarDistribuicao();
        habilitaRecuoCodDistribuicao();
        habilitaBtnExcluirDistribuicao();
        habilitaBtnAtualizarDistribuicao();   
}

function putDistribuicao(){
    if(document.getElementById("selecionaProjeto_distribuicao").readOnly == true){
        habilitaCamposDistribuicao();
        mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
        mudaBotao.style.backgroundColor = "green";

    }else{
        codPesTrf = document.getElementById('codDistribuicao').value;
        codTarefaDistr = document.getElementById('id_trfDistr').innerHTML;
        codPessoaDistr = document.getElementById('id_pesDistr').innerHTML;
        
            
        xhrPutDistribuicao = new XMLHttpRequest();
    
        xhrPutDistribuicao.open("PUT", URLGETDISTRIBUICAO+codDistribuicao+'/', true);
        xhrPutDistribuicao.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhrPutDistribuicao.setRequestHeader("X-CSRFToken", csrftoken);
        xhrPutDistribuicao.setRequestHeader("withCredentials", 'True');
        xhrPutDistribuicao.onload = function(){
            if(xhrPutDistribuicao.readyState == 4){
                if(xhrPutDistribuicao.status == 200){
                    
                    getDistribuicao();
               }
            }
     }
    xhrPutDistribuicao.send(JSON.stringify({
        'pes_trf_id': codPesTrf,
        'fk_pes_id': codPessoaDistr,
         'fk_trf_id': codTarefaDistr 
       }));

    mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
    
    desabilitaCamposDistribuicao();
    
    }

    
}

function deleteDistribuicao(){
    recuarCodDistribuicao();
    codPesTrf = document.getElementById('codDistribuicao').value;

    xhrDeleteDistribuicao = new XMLHttpRequest();
    xhrDeleteDistribuicao.open("DELETE", URLGETDISTRIBUICAO+codPesTrf, true);
    xhrDeleteDistribuicao.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrDeleteDistribuicao.setRequestHeader("X-CSRFToken", csrftoken);
    xhrDeleteDistribuicao.setRequestHeader("withCredentials", 'True');
    xhrDeleteDistribuicao.send(); 
    
}
///////////////////////FINISH: GET - POST - PUT - DELETE //////////////////////////////////////////////////////////





/*CADASTRO DE DISTRIBUICAO DE PESSOAS EM TAREFAS*/////////////////////////////

function clicaDistribuicao(){
    dialogCadastro = document.getElementById("distribuiPessoas");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();

    xhrAbreDistribuicao = new XMLHttpRequest();
    xhrAbreDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    xhrAbreDistribuicao.onreadystatechange = function(){
        
        maiorvalor = 0;
        if(xhrAbreDistribuicao.readyState == 4){
            if(xhrAbreDistribuicao.status == 200){
                json = (JSON.parse(xhrAbreDistribuicao.responseText));

                for(i = 0; i<json.length;i++){
                   if(json[i]['pes_trf_id'] > maiorvalor ){
                        maiorvalor = json[i]['pes_trf_id'];
                    }              
                }
                if(maiorvalor == 0){
                    document.getElementById("codDistribuicao").value = 0;
                    limparCamposCadasDistribuicao();
                    desabilitaAvancoCodDistribuicao();
                    desabilitaBtnAtualizarDistribuicao();
                    desabilitaBtnCancelarDistribuicao();
                    desabilitaBtnGravaDistribuicao();
                    desabilitaBtnExcluirDistribuicao();
                    habilitaBtnNovaDistribuicao();
                    desabilitaCamposDistribuicao();
                    desabilitaRecuoCodDistribuicao();
                }else{
                    document.getElementById("codDistribuicao").value = maiorvalor;
                    habilitaRecuoCodDistribuicao();
                    getDistribuicao();
                }

            }else if(xhrAbreDistribuicao.status == 404){}

            
        }
        
    }
    xhrAbreDistribuicao.send();
    
    dt_projetos_distribuicao();
  
    habilitaAvancoCodDistribuicao();
    habilitaRecuoCodDistribuicao();
    desabilitaBtnCancelarDistribuicao();
    habilitaBtnNovaDistribuicao();
    desabilitaBtnGravaDistribuicao();
    desabilitaAvancoCodDistribuicao();
}

function novaDistribuicao(){
    
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    
    if(codDistribuicao == 0){
        codDistribuicao = 1;
        document.getElementById("codDistribuicao").value = codDistribuicao;
    }else{
    vetor_distribuicao = [];
    xhrNovaDistribuicao = new XMLHttpRequest();
    xhrNovaDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    
    xhrNovaDistribuicao.onreadystatechange = function(){     
        if(xhrNovaDistribuicao.readyState == 4){
            
            if(xhrNovaDistribuicao.status == 200){
                json = (JSON.parse(xhrNovaDistribuicao.responseText));
                
                for(i = 0;i<json.length;i++){
                    vetor_distribuicao.push(json[i]['pes_trf_id']);
                    
                }
                vetor_distribuicao.reverse();
                
                codDistribuicao = vetor_distribuicao[0] + 1;
              }
        }
        document.getElementById("codDistribuicao").value = codDistribuicao;
    }
    xhrNovaDistribuicao.send();
}

habilitaCamposDistribuicao();
habilitaBtnCancelarDistribuicao();
desabilitaBtnNovaDistribuicao();
habilitaBtnGravarDistribuicao();
desabilitaAvancoCodDistribuicao();
desabilitaRecuoCodDistribuicao();
limparCamposCadasDistribuicao();
desabilitaBtnExcluirDistribuicao();
desabilitaBtnAtualizarDistribuicao();

}

function cancelarCadasDistribuicao(){
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    document.getElementById("codDistribuicao").value = codDistribuicao - 1;
    
    desabilitaCamposDistribuicao();
    
    desabilitaBtnGravaDistribuicao();
    desabilitaBtnCancelarDistribuicao();
    habilitaRecuoCodDistribuicao();
    getDistribuicao();
    habilitaBtnNovaDistribuicao();
    habilitaBtnExcluirDistribuicao();
    habilitaBtnAtualizarDistribuicao();
   
}

/*


function carregaDataListInterdepedencia(){
    
     document.getElementById("listaInterdependencia").innerHTML = '';
    
    if(vetor_tarefa.length == 0){
        document.getElementById("listaInterdependencia").innerHTML += "<option value=' '>";
    }
    for(i =0; i< vetor_tarefa.length;i++){
        
        document.getElementById("listaInterdependencia").innerHTML += "<option value='"+vetor_tarefa[i][1]+"'>";
        
        
    }
    
    
}*/


function recuarCodDistribuicao(){
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    
    vetor_distribuicao = [];
    xhrRecuarCodDistribuicao = new XMLHttpRequest();
    xhrRecuarCodDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    xhrRecuarCodDistribuicao.onreadystatechange = function(){     
        if(xhrRecuarCodDistribuicao.readyState == 4){
            if(xhrRecuarCodDistribuicao.status == 200){
                json = (JSON.parse(xhrRecuarCodDistribuicao.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_distribuicao.push(json[i]['pes_trf_id']);
                    
                }
                 
                 menorvalor = vetor_distribuicao.length;
                 for(i=0;i<vetor_distribuicao.length;i++){

                    if(codDistribuicao == vetor_distribuicao[i]){
                        codDistribuicao = vetor_distribuicao[i-1];
                 }
                 if(vetor_distribuicao[i] < menorvalor){
                    menorvalor = vetor_distribuicao[i]; 
                }    

                }
                document.getElementById("codDistribuicao").value = codDistribuicao;   
                if(codDistribuicao == menorvalor){
                    desabilitaRecuoCodDistribuicao();
                }
                habilitaAvancoCodDistribuicao();
                getDistribuicao();
                }else if(xhrRecuarCodDistribuicao.status == 404){}
            }
        }
    

        xhrRecuarCodDistribuicao.send();
        

}

function avancarCodDistribuicao(){
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    vetor_distribuicao = [];
    xhrAvancarDistribuicao = new XMLHttpRequest();
    xhrAvancarDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    xhrAvancarDistribuicao.onreadystatechange = function(){     
        if(xhrAvancarDistribuicao.readyState == 4){
            if(xhrAvancarDistribuicao.status == 200){
                json = (JSON.parse(xhrAvancarDistribuicao.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_distribuicao.push(json[i]['pes_trf_id']);
                    
                }
                
                vetor_distribuicao.reverse();
                 maiorvalor = 0;
                 for(i=0;i<vetor_distribuicao.length;i++){
                    
                    if(codDistribuicao == vetor_distribuicao[i]){
                        codDistribuicao = vetor_distribuicao[i-1];
                 }
                 if(vetor_distribuicao[i] > maiorvalor){
                    maiorvalor = vetor_distribuicao[i]; 
                }    

                }
                   
                      document.getElementById("codDistribuicao").value = codDistribuicao;   
                if(codDistribuicao == maiorvalor){
                    desabilitaAvancoCodDistribuicao();
                }
                habilitaRecuoCodDistribuicao();
                getDistribuicao();
                }else if(xhrAvancarDistribuicao.status == 404){}
            }
        }
    
        
        xhrAvancarDistribuicao.send();
}



function desabilitaRecuoCodDistribuicao(){
        document.getElementById("codAnteriorDistribuicao").disabled = true;
     if(document.getElementById("codAnteriorDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("codAnteriorDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
}
    
}

function desabilitaAvancoCodDistribuicao(){
  document.getElementById("codPosteriorDistribuicao").disabled = true;
     if(document.getElementById("codPosteriorDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("codPosteriorDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaRecuoCodDistribuicao(){
   
   if(document.getElementById("codDistribuicao").value > 1){ document.getElementById("codAnteriorDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("codAnteriorDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
     
}
}

function habilitaAvancoCodDistribuicao(){
  document.getElementById("codPosteriorDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("codPosteriorDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
}

function fecharCadastroDistribuicao(){
    dialogCadastro.close();
    limparCamposCadasDistribuicao();
}

function habilitaBtnCancelarDistribuicao(){
    document.getElementById("btn_cancelarCadasDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_cancelarCadasDistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnCancelarDistribuicao(){
    document.getElementById("btn_cancelarCadasDistribuicao").disabled = true;
     if(document.getElementById("btn_cancelarCadasDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarCadasDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaCamposDistribuicao(){
     document.getElementById("selecionaProjeto_distribuicao").disabled = false;
    document.getElementById("listaTarefa").disabled = false;   
    document.getElementById("listaPessoa").disabled = false;
}

function desabilitaCamposDistribuicao(){
    limparCamposCadasDistribuicao();
    document.getElementById("selecionaProjeto_distribuicao").disabled = true;
    document.getElementById("listaTarefa").disabled = true;   
    document.getElementById("listaPessoa").disabled = true;
}

function habilitaBtnNovaDistribuicao(){
     document.getElementById("btn_novadistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_novadistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnNovaDistribuicao(){
    document.getElementById("btn_novadistribuicao").disabled = true;
    if(document.getElementById("btn_novadistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_novadistribuicao");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function desabilitaBtnGravaDistribuicao(){
    document.getElementById("btn_salvardistribuicao").disabled = true;
    if(document.getElementById("btn_salvardistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_salvardistribuicao");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function habilitaBtnGravarDistribuicao(){
    document.getElementById("btn_salvardistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_salvardistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function limparCamposCadasDistribuicao(){
    document.getElementById("selecionaProjeto_distribuicao").value = '';
    document.getElementById("listaTarefa").value = ''; 
    document.getElementById("listaPessoa").value = '';
    
   
}

function desabilitaBtnAtualizarDistribuicao(){
    document.getElementById("btn_atualizarCadasDistribuicao").disabled = true;
   mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
    mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnAtualizarDistribuicao(){
        document.getElementById("btn_atualizarCadasDistribuicao").disabled = false;
     mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
     mudaBotao.style.backgroundColor = "#698FEB";
 }

 function desabilitaBtnExcluirDistribuicao(){
    document.getElementById("btn_excluirCadasDistribuicao").disabled = true;
    mudaBotao =  document.getElementById("btn_excluirCadasDistribuicao");
    mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnExcluirDistribuicao(){
    document.getElementById("btn_excluirCadasDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasDistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}

/*///////////////////////////////////////*/


