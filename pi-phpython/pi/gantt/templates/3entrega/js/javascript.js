/*WINDOW.ONLOAD*/




/*/////////////*/

/*HELP
function clicaHelp(){
    
    Help = 0;
    HelpAtual = 0;
    
    if(vetor_help.length >= 1){
        Help = vetor_help.length;
        document.getElementById("Help").value = Help;
        habilitaRecuoHelp();
        
    }
    else
    {
        document.getElementById("Help").value = Help;
        desabilitaRecuoHelp();
        desabilitaAvancoHelp();
    }
    
    dialogCadastro = document.getElementById("abreHelp");
    dialogCadastro.showModal();


*///////

/*CADASTRO DE PESSOAS*///////////////////////////////

function clicaPessoas(){
    
    codPessoa = 0;
    codPessoaAtual = 0;
    
    if(vetor_pessoa.length >= 1){
        codPessoa = vetor_pessoa.length;
        document.getElementById("codPessoa").value = codPessoa;
        habilitaRecuoCodPessoa();
        
    }
    else
    {
        document.getElementById("codPessoa").value = codPessoa;
        desabilitaRecuoCodPessoa();
        desabilitaAvancoCodPessoa();
    }
    
    dialogCadastro = document.getElementById("abreCadastroPessoas");
    dialogCadastro.showModal();
    
    
   
     desabilitaBtnCancelarPessoa();
    habilitaBtnNovaPessoa();
    desabilitaBtnGravaPessoa();
    buscaValoresPessoa();
    desabilitaAvancoCodPessoa();
    habilitaDesabilitaBtnExcluirPessoa();
}

function buscaValoresPessoa(){
    
   codAtual = parseInt(document.getElementById("codPessoa").value);
    
    
    
    for(i=0;i<vetor_pessoa.length;i++){
        
        if(codAtual == vetor_pessoa[i][0]){
        document.getElementById("nomePessoa").value = vetor_pessoa[i][1];
        document.getElementById("contato").value = vetor_pessoa[i][2];
        
        }
    }
}

function recuarCodPessoa(){
    document.getElementById("codPessoa").value = vetor_pessoa.length -1;
    
   
    habilitaAvancoCodProjeto();
    
    
    buscaValoresProjeto();
}

function avancarCodPessoa(){
    codPessoaAtual = parseInt(document.getElementById("codPessoa").value);
    
    codPessoaAtual += 1;
    
    document.getElementById("codPessoa").value = codPessoaAtual;
    
    if(vetor_pessoa.length ==  document.getElementById("codPessoa").value){
        desabilitaAvancoCodPessoa();
    }
    habilitaRecuoCodPessoa();
    buscaValoresPessoa();
}

function desabilitaRecuoCodPessoa(){
        document.getElementById("codAnteriorCadasPessoa").disabled = true;
     if(document.getElementById("codAnteriorCadasPessoa").disabled = true){
       mudaBotao =  document.getElementById("codAnteriorCadasPessoa");
        mudaBotao.style.backgroundColor = "gray";
}
    
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
     if(document.getElementById("btn_cancelarCadasPessoa").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarCadasPessoa");
        mudaBotao.style.backgroundColor = "gray";
}
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
    if(document.getElementById("btn_novapessoa").disabled = true){
       mudaBotao =  document.getElementById("btn_novapessoa");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function habilitaDesabilitaBtnExcluirPessoa(){
    if(document.getElementById("codPessoa").value == 0){
     document.getElementById("btn_excluirCadasPessoa").disabled = true;
    if(document.getElementById("btn_excluirCadasPessoa").disabled = true){
       mudaBotao =  document.getElementById("btn_excluirCadasPessoa");
        mudaBotao.style.backgroundColor = "gray";
    }
        
}else{
    document.getElementById("btn_excluirCadasPessoa").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasPessoa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

}

function desabilitaBtnGravaPessoa(){
    document.getElementById("btn_salvarpessoa").disabled = true;
    if(document.getElementById("btn_salvarpessoa").disabled = true){
       mudaBotao =  document.getElementById("btn_salvarpessoa");
        mudaBotao.style.backgroundColor = "gray";
    }
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



vetor_pessoa = [];
vetor_tabelaPessoa = [];

function carregaTabelaPessoa(){
   
    document.getElementById("corpoTabelaPessoas").innerHTML = '';
    
    for(i = 0; i < vetor_tabelaPessoa.length;i++){
         document.getElementById("corpoTabelaPessoas").innerHTML += vetor_tabelaPessoa[i];
        console.log(vetor_tabelaPessoa[i]);
    }    
    
}

function novaPessoa(){
    
    if(document.getElementById("codPessoa").value == 0){
         codAnteriorPessoa = parseInt(document.getElementById("codPessoa").value);
    novoCodPessoa = codAnteriorPessoa+1;
    document.getElementById("codPessoa").value = novoCodPessoa;
    }else{
         document.getElementById("codPessoa").value = vetor_pessoa.length+1;
    }
   
    habilitaCamposPessoa();
    habilitaBtnCancelarPessoa();
    desabilitaBtnNovaPessoa();
    habilitaBtnGravarPessoa();
    desabilitaAvancoCodPessoa();
    desabilitaRecuoCodPessoa();
    limparCamposCadasPessoa();
    
    
}

function cancelarCadasPessoa(){
    document.getElementById("codPessoa").value = vetor_pessoa.length;
    
    desabilitaCamposPessoa();
    
    desabilitaBtnGravaPessoa();
    desabilitaBtnCancelarPessoa();
    habilitaRecuoCodPessoa();
    buscaValoresPessoa();
    habilitaBtnNovaPessoa();
    carregaTabela();
}

function gravarPessoa(){
    
  codPessoa= document.getElementById("codPessoa");
   nomePessoa = document.getElementById("nomePessoa");
    contato = document.getElementById("contato");
    
    pessoa = [codPessoa.value, nomePessoa.value,contato.value];
     
    
    vetor_pessoa.push(pessoa);
    
    linhaTabelaPessoas = "<tr><td>"+codPessoa.value+"</td><td>"+nomePessoa.value+"</td><td>"+contato.value+"</td></tr>";
    
    
    
    
    vetor_tabelaPessoa.push(linhaTabelaPessoas);
    
    carregaTabelaPessoa();
    
    jsonCadastroPessoa();
    desabilitaCamposPessoa();
    habilitaBtnNovaPessoa();
    desabilitaBtnGravaPessoa();
    desabilitaBtnCancelarPessoa();
    habilitaRecuoCodPessoa();
    buscaValoresPessoa();
    habilitaDesabilitaBtnExcluirPessoa();
    
}

function jsonCadastroPessoa(){
    jsonPessoas = [];
    for(i=0;i<vetor_pessoa.length;i++){
        jsonPessoas.push({
            'pes_id': vetor_pessoa[i][0],
            'pes_nome': vetor_pessoa[i][1],
            'pes_contato': vetor_pessoa[i][2]
        });
    }
    console.log(jsonPessoas);
}

function excluirCadasPessoa(){
    codAtual = parseInt(document.getElementById("codPessoa").value);
    
    for(i = 0; i<vetor_pessoa.length;i++){
        
        if(codAtual == vetor_pessoa[i][0]){
            
            vetor_pessoa.splice([i],2);
            
            vetor_tabelaPessoa.splice([i],1);
            
            
        }
        console.log(vetor_projeto);
    }
    
      carregaTabelaPessoa();
      document.getElementById("codPessoa").value = vetor_pessoa.length;
    buscaValoresPessoa();
    habilitaDesabilitaBtnExcluirPessoa();
    
    if(document.getElementById("codPessoa").value == 0){
        limparCamposCadasPessoa();
    }
   
    
}

/*/////////////////////////////////////////////////*/


/*CADASTRO DE PROJETOS*/////////////////////////////

function clicaProjeto(){
    codProjeto = 0;
    codProjetoAtual = 0;
    
    if(vetor_projeto.length >= 1){
        codProjeto = vetor_projeto.length;
        document.getElementById("codProjeto").value = codProjeto;
        habilitaRecuoCodProjeto();
        
    }
    else
    {
        document.getElementById("codProjeto").value = codProjeto;
        desabilitaRecuoCodProjeto();
        desabilitaAvancoCodProjeto();
    }
    
    dialogCadastro = document.getElementById("abreCadastroProjeto");
    dialogCadastro.showModal();
    
    
    
     desabilitaBtnCancelarProjeto();
    habilitaBtnNovoProjeto();
    desabilitaBtnGravaProjeto();
    buscaValoresProjeto();
    desabilitaAvancoCodProjeto();
    habilitaDesabilitaBtnExcluirProjeto();
    
    }

function buscaValoresProjeto(){
    
   codAtual = parseInt(document.getElementById("codProjeto").value);
    
    
    
    for(i=0;i<vetor_projeto.length;i++){
        
        if(codAtual == vetor_projeto[i][0]){
        document.getElementById("nomeProjeto").value = vetor_projeto[i][1];
        document.getElementById("escopo").value = vetor_projeto[i][2];
        document.getElementById("dt_inicioProjeto").value = vetor_projeto[i][3];
        document.getElementById("dt_prazoProjeto").value = vetor_projeto[i][4];
        document.getElementById("corProjeto").value = vetor_projeto[i][5];
        }
    }
}

function recuarCodProjeto(){
    document.getElementById("codProjeto").value = vetor_projeto.length -1;
    
   
    habilitaAvancoCodProjeto();
    
    
    buscaValoresProjeto();
}

function avancarCodProjeto(){
    codProjetoAtual = parseInt(document.getElementById("codProjeto").value);
    
    codProjetoAtual += 1;
    
    document.getElementById("codProjeto").value = codProjetoAtual;
    
    if(vetor_projeto.length ==  document.getElementById("codProjeto").value){
        desabilitaAvancoCodProjeto();
    }
    habilitaRecuoCodProjeto();
    buscaValoresProjeto();
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

function habilitaDesabilitaBtnExcluirProjeto(){
    if(document.getElementById("codProjeto").value == 0){
     document.getElementById("btn_excluirCadasProjeto").disabled = true;
    if(document.getElementById("btn_excluirCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("btn_excluirCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
    }
        
}else{
    document.getElementById("btn_excluirCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasProjeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

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

vetor_projeto = [];
vetor_tabelaProjeto = [];
vetor_prjcadastrados = [];

function carregaTabela(){
   
    document.getElementById("corpoTabelaProjeto").innerHTML = '';
    
    for(i = 0; i < vetor_tabelaProjeto.length;i++){
         document.getElementById("corpoTabelaProjeto").innerHTML += vetor_tabelaProjeto[i];
        
    }    
    
}

function novoProjeto(){
    
    if(document.getElementById("codProjeto").value == 0){
         codAnteriorProjeto = parseInt(document.getElementById("codProjeto").value);
    novoCodProjeto = codAnteriorProjeto+1;
    document.getElementById("codProjeto").value = novoCodProjeto;
    }else{
         document.getElementById("codProjeto").value = vetor_projeto.length+1;
    }
   
    habilitaCamposProjeto();
    habilitaBtnCancelarProjeto();
    desabilitaBtnNovoProjeto();
    habilitaBtnGravarProjeto();
    desabilitaAvancoCodProjeto();
    desabilitaRecuoCodProjeto();
    limparCamposCadasProjeto();
    carregaTabela();
    
    
}

function cancelarCadasProjeto(){
    document.getElementById("codProjeto").value = vetor_projeto.length;
    
    desabilitaCamposProjeto();
    
    desabilitaBtnGravaProjeto();
    desabilitaBtnCancelarProjeto();
    habilitaRecuoCodProjeto();
    buscaValoresProjeto();
    habilitaBtnNovoProjeto();
    carregaTabela();
}

function gravarProjeto(){
    
    codPrj = document.getElementById("codProjeto");
    nomeProjeto = document.getElementById("nomeProjeto");
    escopo = document.getElementById("escopo");
    dt_inicioProjeto = document.getElementById("dt_inicioProjeto");
    dt_prazoProjeto = document.getElementById("dt_prazoProjeto");
    corProjeto = document.getElementById("corProjeto");
    
    projeto = [codPrj.value,nomeProjeto.value, escopo.value, dt_inicioProjeto.value, dt_prazoProjeto.value, corProjeto.value];
    
    vetor_projeto.push(projeto);
        
     linhaTabelaProjeto = ["<tr><td>"+codPrj.value+"</td><td>"+nomeProjeto.value+"</td><td>"+dt_inicioProjeto.value+"</td><td>"+ dt_prazoProjeto.value+"</td><td bgcolor="+corProjeto.value+"></td></tr>"];
    
     add_btn_prj_menu_esquerdo = ["<button id='"+codPrj.value+"' class='btn_shadow1' style='background-color:"+corProjeto.value+"' onclick='expandeTarefas'"+codPrj.value+"'()'>"+nomeProjeto.value+"</button>"];
    
    vetor_tabelaProjeto.push(linhaTabelaProjeto);
    vetor_prjcadastrados.push(add_btn_prj_menu_esquerdo);
    carregaTabela();
    
    
    
    
    jsonCadastroProjeto();
    
    desabilitaCamposProjeto();
    habilitaBtnNovoProjeto();
    desabilitaBtnGravaProjeto();
    desabilitaBtnCancelarProjeto();
    habilitaRecuoCodProjeto();
    buscaValoresProjeto();
    habilitaDesabilitaBtnExcluirProjeto();
    add_prj_menu_esquerdo();
    
        
}

function jsonCadastroProjeto(){
    jsonProjeto= [];
    for(i=0;i<vetor_projeto.length;i++){
        jsonProjeto.push({
            'codPrj': vetor_projeto[i][0],
            'nomeProjeto': vetor_projeto[i][1],
            'escopo': vetor_projeto[i][2],
            'dt_inicioProjeto': vetor_projeto[i][3],
            'dt_prazoProjeto': vetor_projeto[i][4],
            'corProjeto': vetor_projeto[i][5]
        });
    }
    console.log(jsonProjeto);
}

function excluirCadasProjeto(){
    codAtual = parseInt(document.getElementById("codProjeto").value);
   
    
    
    for(i = 0; i<vetor_projeto.length;i++){
        
        if(codAtual == vetor_projeto[i][0]){
            
            vetor_projeto.splice([i],5);
            
            vetor_tabelaProjeto.splice([i],1);
            
            vetor_prjcadastrados.splice([i],1);
            
        }
        console.log(vetor_projeto);
    }
    
      carregaTabela();
    add_prj_menu_esquerdo();
      document.getElementById("codProjeto").value = vetor_projeto.length;
    buscaValoresProjeto();
    habilitaDesabilitaBtnExcluirProjeto();
    
    if(document.getElementById("codProjeto").value == 0){
        limparCamposCadasProjeto();
    }
   
    
}

/*EXPANDE PROJETOS MENU CENTRAL ESQUERDO*/

function add_prj_menu_esquerdo(){
    
    document.getElementById("prj_cadastrados").innerHTML = '';
    for(i = 0; i<vetor_prjcadastrados.length;i++){
    document.getElementById("prj_cadastrados").innerHTML +=  vetor_prjcadastrados[i];
        
    }
}

//EM CONSTRUÇÃO
function expandeTarefas(){
    
   for(i=0;i<vetor_projeto.length;i++){
       
       recebeBtnPrj = document.getElementById([i]);
       recebeBtnprj.ddEventListener("click", function(){
           
           for(x=0;x<vetor_tarefa.length;x++){
               
               add_btn_prj_menu_esquerdo = ["<button class='btn_shadow1' style='background-color:"+corProjeto.value+"' onclick='expandeTarefas'"+codPrj.value+"'()'>"+nomeProjeto.value+"</button>"];
               
           }
           
       });
       
       
       
   }
}

/*///////////////////////////////////////*/




/*CADASTRO DE TAREFAS*/////////////////////////////

function clicaTarefa(){
    codTarefa = 0;
    codTarefaAtual = 0;
    
    if(vetor_tarefa.length > 1){
        codTarefa = vetor_tarefa.length;
        document.getElementById("codTarefa").value = codTarefa;
        habilitaRecuoCodTarefa();
        
    }
    else
    {
        document.getElementById("codTarefa").value = codTarefa;
        desabilitaRecuoCodTarefa();
        desabilitaAvancoCodTarefa();
    }
    
    dialogCadastro = document.getElementById("abreCadastroTarefa");
    dialogCadastro.showModal();
    
    
    
     desabilitaBtnCancelarTarefa();
    habilitaBtnNovaTarefa();
    desabilitaBtnGravaTarefa();
    buscaValoresTarefa();
    carregaDatalistProjetos();
    carregaDataListInterdepedencia()
    desabilitaAvancoCodTarefa();
    habilitaDesabilitaBtnExcluirTarefa();
    
    }

function carregaDatalistProjetos(){
    
    document.getElementById("listaProjetos").innerHTML = '';
    
    for(i =0; i< vetor_projeto.length;i++){
        
        document.getElementById("listaProjetos").innerHTML += "<option value='"+vetor_projeto[i][1]+"'>";
        
        
    }
    
}

function carregaDataListInterdepedencia(){
    
     document.getElementById("listaInterdependencia").innerHTML = '';
    
    if(vetor_tarefa.length == 0){
        document.getElementById("listaInterdependencia").innerHTML += "<option value=' '>";
    }
    for(i =0; i< vetor_tarefa.length;i++){
        
        document.getElementById("listaInterdependencia").innerHTML += "<option value='"+vetor_tarefa[i][1]+"'>";
        
        
    }
    
    
}

function buscaValoresTarefa(){
    
   codTarefaAtual = parseInt(document.getElementById("codTarefa").value);
    
   selecionaNomeProjeto = '';
    
    
    for(i=0;i<vetor_tarefa.length;i++){
        
        if(codTarefaAtual == vetor_tarefa[i][0]){
        document.getElementById("nomeTarefa").value = vetor_tarefa[i][1];
        document.getElementById("dt_inicioTarefa").value = vetor_tarefa[i][2];
        document.getElementById("dt_finalTarefa").value = vetor_tarefa[i][3];  
        document.getElementById("dt_prazoTarefa").value = vetor_tarefa[i][4];
        document.getElementById("interdependencia").value = vetor_tarefa[i][5];
        document.getElementById("entregavel").value = vetor_tarefa[i][6];   
        
            
        for(x =0;x<vetor_projeto.length;x++){
            
            if(vetor_tarefa[i][7] == vetor_projeto[x][0]){
                selecionaNomeProjeto = vetor_projeto[x][1];
                
            }
            
        }
        
        document.getElementById("selecionaProjeto").value = selecionaNomeProjeto;
        
            
            
        }
    }
}

function recuarCodTarefa(){
    document.getElementById("codTarefa").value = vetor_tarefa.length -1;
    
   
    habilitaAvancoCodTarefa();
    
    if(document.getElementById("codTarefa").value == 1){
        desabilitaRecuoCodTarefa();
    }
    buscaValoresTarefa();
}

function avancarCodTarefa(){
    codTarefaAtual = parseInt(document.getElementById("codTarefa").value);
    
    codTarefaAtual += 1;
    
    document.getElementById("codTarefa").value = codTarefaAtual;
    
    if(vetor_tarefa.length ==  document.getElementById("codTarefa").value){
        desabilitaAvancoCodTarefa();
    }
    habilitaRecuoCodTarefa();
    buscaValoresTarefa();
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
    document.getElementById("selecionaProjeto").disabled = true;     document.getElementById("interdependencia").disabled = true; 
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

function habilitaDesabilitaBtnExcluirTarefa(){
    if(document.getElementById("codTarefa").value == 0){
     document.getElementById("btn_excluirCadasTarefa").disabled = true;
    if(document.getElementById("btn_excluirCadasTarefa").disabled = true){
       mudaBotao =  document.getElementById("btn_excluirCadasTarefa");
        mudaBotao.style.backgroundColor = "gray";
    }
        
}else{
    document.getElementById("btn_excluirCadasTarefa").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasTarefa");
        mudaBotao.style.backgroundColor = "#698FEB";
}

}

vetor_tarefa = [];

function novaTarefa(){
    
    if(vetor_projeto.length == 0){
        
        alert("Ainda não há projeto cadastrado!")
    }
    else{
    
    if(document.getElementById("codTarefa").value == 0){
         codAnteriorTarefa = parseInt(document.getElementById("codTarefa").value);
    novoCodTarefa = codAnteriorTarefa+1;
    document.getElementById("codTarefa").value = novoCodTarefa;
    }
    else{
         document.getElementById("codTarefa").value = vetor_tarefa.length+1;
    }
   
    habilitaCamposTarefa();
    habilitaBtnCancelarTarefa();
    desabilitaBtnNovaTarefa();
    habilitaBtnGravarTarefa();
    desabilitaAvancoCodTarefa();
    desabilitaRecuoCodTarefa();
    limparCamposCadasTarefa();
   
    
}
}

function cancelarCadasTarefa(){
    document.getElementById("codTarefa").value = vetor_tarefa.length;
    
    desabilitaCamposTarefa();
    
    desabilitaBtnGravaTarefa();
    desabilitaBtnCancelarTarefa();
    habilitaRecuoCodTarefa();
    buscaValoresTarefa();
    habilitaBtnNovaTarefa();
   
}

function gravarTarefa(){
    codProjetoSelecionado = '';
    trf_id = document.getElementById("codTarefa");
    selecionaProjeto = document.getElementById("selecionaProjeto").value;
    
    
    for(i = 0; i< vetor_projeto.length;i++){
        
        if(selecionaProjeto == vetor_projeto[i][1]){
            fk_prj_id = vetor_projeto[i][0];
        }
       
    }
        
    trf_interdependencia = document.getElementById("interdependencia");
    trf_nometarefa = document.getElementById("nomeTarefa");
    trf_datainicial = document.getElementById("dt_inicioTarefa");
    trf_datafinal = document.getElementById("dt_finalTarefa");
    trf_prazo = document.getElementById("dt_prazoTarefa");
    trf_entregavel = document.getElementById("entregavel");
    
    tarefa = [trf_id.value, trf_nometarefa.value, trf_datainicial.value, trf_datafinal.value, trf_prazo.value, trf_interdependencia.value, trf_entregavel.value, fk_prj_id];
    
    vetor_tarefa.push(tarefa);
    console.log(vetor_tarefa);
    
    
    jsonCadastroTarefa();
    desabilitaCamposTarefa();
    habilitaBtnNovaTarefa();
    desabilitaBtnGravaTarefa();
    desabilitaBtnCancelarTarefa();
    habilitaRecuoCodTarefa();
    buscaValoresTarefa();     
    habilitaDesabilitaBtnExcluirTarefa();
    carregaDataListInterdepedencia();
}

function jsonCadastroTarefa(){
    jsonTarefa = [];
    for(i=0;i<vetor_tarefa.length;i++){
        jsonTarefa.push({
           'trf_id': vetor_tarefa[i][0],
            'trf_nometarefa': vetor_tarefa[i][1],
            'trf_datainicial': vetor_tarefa[i][2],
            'trf_datafinal': vetor_tarefa[i][3],
            'trf_prazo': vetor_tarefa[i][4],
            'trf_interdependencia': vetor_tarefa[i][5],
            'trf_entregavel': vetor_tarefa[i][6],
            'fk_prj_id': vetor_tarefa[i][7]
        });
    }
    console.log(jsonTarefa);
}

function excluirCadasTarefa(){
    codAtual = parseInt(document.getElementById("codTarefa").value);
    
    for(i = 0; i<vetor_tarefa.length;i++){
        
        if(codAtual == vetor_tarefa[i][0]){
            
            vetor_tarefa.splice([i],8);
            
           
            
            
        }
       
    }
    
      
      document.getElementById("codTarefa").value = vetor_tarefa.length;
    buscaValoresTarefa();
      
    habilitaDesabilitaBtnExcluirTarefa();
    if(document.getElementById("codTarefa").value == 0){
        limparCamposCadasTarefa();
    }
    
    
}

/*///////////////////////////////////////*/

/*DISTRIBUIÇÃO DE PESSOAS AOS PROJETOS*///////////////////////////////


function distribuiPessoas(){
   
    codDistribuicao = 0;
    codDistribuicaoAtual = 0;
    
    if(vetor_distribuicao.length > 1){
        codDistribuicao = vetor_distribuicao.length;
        document.getElementById("codDistribuicao").value = codDistribuicao;
        habilitaRecuoCodDistribuicao();
        
    }
    else
    {
        document.getElementById("codDistribuicao").value = codDistribuicao;
        desabilitaRecuoCodDistribuicao();
        desabilitaAvancoCodDistribuicao();
    }
    
    dialogCadastro = document.getElementById("distribuiPessoas");
    dialogCadastro.showModal();
    
    
    
     desabilitaBtnCancelarDistribuicao();
    habilitaBtnNovaDistribuicao();
    desabilitaBtnGravaDistribuicao();
    buscaValoresDistribuicao();
    carregaDatalistProjetos_distribuicao();
    
    desabilitaAvancoCodDistribuicao();
    habilitaDesabilitaBtnExcluirDistribuicao();
    
}

function buscaValoresDistribuicao(){
    
   codAtual = parseInt(document.getElementById("codDistribuicao").value);
    
    
    
    for(i=0;i<vetor_distribuicao.length;i++){
        
        if(codAtual == vetor_distribuicao[i][0]){
        document.getElementById("selecionaProjeto_distribuicao").value = vetor_distribuicao[i][1];
        document.getElementById("listaTarefa").value = vetor_distribuicao[i][2];
        document.getElementById("listaPessoa").value = vetor_distribuicao[i][3];
        }
    }
}

function fecharDistribuicaoPessoa(){
    dialogCadastro.close();
    limparCadasPessoa();
}

function recuarCodDistribuicao(){
    document.getElementById("codDistribuicao").value = vetor_distribuicao.length -1;
    
   
    habilitaAvancoCodDistribuicao();
    
    
    buscaValoresDistribuicao();
}

function avancarCodDistribuicao(){
    codDistribuicaoAtual = parseInt(document.getElementById("codDistribuicao").value);
    
    codDistribuicaoAtual += 1;
    
    document.getElementById("codDistribuicao").value = codDistribuicaoAtual;
    
    if(vetor_distribuicao.length ==  document.getElementById("codDistribuicao").value){
        desabilitaAvancoCodDistribuicao();
    }
    habilitaRecuoCodDistribuicao();
    buscaValoresDistribuicao();
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
   
   if(document.getElementById("codDistribuicao").value > 1){ document.getElementById("codAnteriorCadasDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("codAnteriorCadasDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
     
}
}

function habilitaAvancoCodDistribuicao(){
  document.getElementById("codPosteriorCadasDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("codPosteriorCadasDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
}

function habilitaBtnCancelarDistribuicao(){
document.getElementById("btn_cancelarDistribuicao").disabled = false;
    mudaBotao = document.getElementById("btn_cancelarDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnCancelarDistribuicao(){
    document.getElementById("btn_cancelarDistribuicao").disabled = true;
     if(document.getElementById("btn_cancelarDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaCamposDistribuicao(){
     document.getElementById("selecionaProjeto_distribuicao").disabled = false;
    
    document.getElementById("listaTarefa").disabled = false;
    
    document.getElementById("listaPessoa").disabled = false;
    
}

function desabilitaCamposDistribuicao(){
    limparCamposCadasProjeto();
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

function habilitaDesabilitaBtnExcluirDistribuicao(){
    if(document.getElementById("codDistribuicao").value == 0){
     document.getElementById("btn_excluirDistribuicao").disabled = true;
    if(document.getElementById("btn_excluirDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_excluirDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
    }
        
}else{
    document.getElementById("btn_excluirDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirDistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
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
   document.getElementById("selecionaProjeto_distribuicao").value = ' ';
    
    document.getElementById("listaTarefa").value = ' ';
    
    document.getElementById("listaPessoa").value = ' ';
}




/*DATALIST*/

function carregaDatalistProjetos_distribuicao(){
    
    document.getElementById("listaProjetos_distribuicao").innerHTML = '';
    
    for(i =0; i< vetor_projeto.length;i++){
        
       
       linhaDatalistProjetos_distribuicao = '<option value="'+vetor_projeto[i][1]+'">';
           document.getElementById("listaProjetos_distribuicao").innerHTML += linhaDatalistProjetos_distribuicao;
        
             
    }
    
   
    
}

function carregaDataListTarefasDistribuicao(){
    
    document.getElementById("listaTarefa").innerHTML = '';
    retorna_tarefas = [];
    retornaCodProjeto = '';
    
    
        buscaProjeto = document.getElementById('selecionaProjeto_distribuicao').value;
        
        for(i = 0;i<vetor_projeto.length;i++){
            
            if(buscaProjeto == vetor_projeto[i][1]){
                retornaCodProjeto = vetor_projeto[i][0];
                
                console.log(retornaCodProjeto);
                
                for(x = 0; x<vetor_tarefa.length;x++){
                    
                    if(retornaCodProjeto == vetor_tarefa[x][7]){
                        
                        document.getElementById("listaTarefa_distribuicao").innerHTML += "<option value='"+vetor_tarefa[x][1]+"'>";          
                    }
                }              
            }            
        }   
    }
    
    
    
function carregaDatalistPessoas_distribuicao(){
    
    document.getElementById("listaPessoa_distribuicao").innerHTML = '';
    
    for(i =0; i< vetor_pessoa.length;i++){
           document.getElementById("listaPessoa_distribuicao").innerHTML += '<option value="'+vetor_pessoa[i][0]+'">';
        
             
    }
}


///DATALIST

vetor_distribuicao = [];

function novaDistribuicao(){
            
           if(vetor_projeto.length > 0 && vetor_tarefa.length > 0){
                if(document.getElementById("codDistribuicao").value == 0){
                 codAnteriorDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
            novoCodDistribuicao = codAnteriorDistribuicao+1;
            document.getElementById("codDistribuicao").value = novoCodDistribuicao;
            }
            else{
                 document.getElementById("codDistribuicao").value = vetor_distribuicao.length+1;
            }

            habilitaCamposDistribuicao();
            habilitaBtnCancelarDistribuicao();
            desabilitaBtnNovaDistribuicao();
            habilitaBtnGravarDistribuicao();
            desabilitaAvancoCodDistribuicao();
            desabilitaRecuoCodDistribuicao();
            limparCamposCadasDistribuicao();
            
           }else{
               alert("Sem Projeto ou Tarefa cadastrada");
           }
         
    }

   
function cancelarCadasDistribuicao(){
    document.getElementById("codDistribuicao").value = vetor_distribuicao.length;
    
    desabilitaCamposDistribuicao();
    
    desabilitaBtnGravaDistribuicao();
    desabilitaBtnCancelarDistribuicao();
    habilitaRecuoCodDistribuicao();
    buscaValoresDistribuicao();
    habilitaBtnNovaDistribuicao();
   
    
    
}

function gravarDistribuicao(){
    codProjetoSelecionado = '';
    pes_trf_id = document.getElementById("codDistribuicao");
    selecionaProjeto = document.getElementById("selecionaProjeto").value;
    
    
    for(i = 0; i< vetor_projeto.length;i++){
        
        if(selecionaProjeto == vetor_projeto[i][1]){
            fk_prj_id = vetor_projeto[i][0];
        }
       
    }
    selecionaTarefa = document.getElementById("selecionaTarefa").value;
    
    
    for(i = 0; i< vetor_tarefa.length;i++){
        
        if(selecionaTarefa == vetor_tarefa[i][1]){
            fk_trf_id = vetor_tarefa[i][0];
        }
       
    }
    
    selecionaPessoa = document.getElementById("selecionaPessoa").value;
    
    
    for(i = 0; i< vetor_pessoa.length;i++){
        
        if(selecionaPessoa == vetor_pessoa[i][1]){
            fk_pes_id = vetor_pessoa[i][0];
        }
       
    }
    
    
    distribuicao = [pes_trf_id.value, fk_trf_id.value, fk_pes_id.value];
    
    vetor_distribuicao.push(distribuicao);
    console.log(vetor_distribuicao);
    
    
    jsonCadastroDistribuicao();
    desabilitaCamposDistribuicao();
    habilitaBtnNovaDistribuicao();
    desabilitaBtnGravaDistribuicao();
    desabilitaBtnCancelarDistribuicao();
    habilitaRecuoCodDistribuicao();
    buscaValoresDistribuicao();     
    habilitaDesabilitaBtnExcluirDistribuicao();
    
}

function jsonCadastroDistribuicao(){
    jsonDistribuicao = [];
    for(i=0;i<vetor_distribuicao.length;i++){
        jsonDistribuicao.push({
           'pes_trf_id': vetor_distribuicao[i][0],
           'fk_trf_id': vetor_distribuicao[i][1],
           'fk_pes_id': vetor_distribuicao[i][2]
        });
    }
    console.log(jsonDistribuicao);
}

function excluirCadasDistribuicao(){
    codAtual = parseInt(document.getElementById("codDistribuicao").value);
    
    for(i = 0; i<vetor_distribuicao.length;i++){
        
        if(codAtual == vetor_distribuicao[i][0]){
            
            vetor_distribuicao.splice([i],3);
        }    
    }
    
      
      document.getElementById("codDistribuicao").value = vetor_distribuicao.length;
    buscaValoresDistribuicao();
      
    habilitaDesabilitaBtnExcluirDistribuicao();
    if(document.getElementById("codDistribuicao").value == 0){
        limparCamposCadasDistribuicao();
    }
    
    
}


/*MENU DROPDOWN BTN_menusuperior*/////////////////////////////

function menuDropdown_menusuperior() {
  document.getElementById("menu_superior").classList.toggle("show");
    
}

//////////////////////////////////////////////////

/*JSON PARA CARREGAR GRÁFICO DE GANTT*/

function carregaGantt(){
    
 
    
    
        vetor_gantt = [];
        for(i=0;i<vetor_projeto.length;i++){
            
             buscaCodProjeto = vetor_projeto[i][0];
        
            for(x = 0; x < vetor_tarefa.length;x++){
            
            if(buscaCodProjeto == vetor_tarefa[x][7]){
                
                //x[i].style.backgroundColor = "red";
                addVetor = ["Task "+x,vetor_tarefa[x][1],vetor_tarefa[x][2],vetor_tarefa[x][3], vetor_projeto[i][5]];
                vetor_gantt.push(addVetor);
                
                 
        }
            
        }
          
    
   jsonGantt();
    
}
}

function jsonGantt(){
    
    tasks = [];
    for(i = 0; i< vetor_gantt.length;i++){
        tasks.push({
            'id': vetor_gantt[i][0],
            'name': vetor_gantt[i][1],
            'color': vetor_gantt[i][4],
            'start': vetor_gantt[i][2],
            'end': vetor_gantt[i][3],
            'progress': 20,       
            'custom_class': 'tcolor'
               
    
                
        });
    }
     
     console.log(tasks);
   gantt = new Gantt("#gantt", tasks);

}
//////////////////////////////////////////////////


/*MUDANÇA DE PREÍODOS GANTT*/

// Quarter Day, Half Day, Day, Week, Month 


function periodo_dia(){
    
    gantt.change_view_mode('Day');
}

function periodo_semana(){
    gantt.change_view_mode('Week');
}

function periodo_mes(){
    gantt.change_view_mode('Month');
}

function periodo_ano(){
    gantt.change_view_mode('Year');
}



/*//////////////////////////////////////////////*/




function expandeTarefas(){}

/*//////////////////////////////////////////////*/



/*VISUALIZAÇÃO DO GRÁFICO GANTT*/
/*
function carregaGantt(){
   
    tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
         {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
         {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  }
    
]
    
    
    gantt = new Gantt("#gantt", tasks);
  
    
    var gantt = new Gantt("#gantt", tasks, {
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',   
    date_format: 'YYYY-MM-DD',
    custom_popup_html: null
});
    
}*/