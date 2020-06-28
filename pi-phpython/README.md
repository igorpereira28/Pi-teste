# Projeto Integrador - 2º semestre de BD - PI-PHPython :elephant: :snake:

# GANTT PLANNER

**Vídeo de apresentação do Projeto (2ª Entrega)**

[Apresentação](https://youtu.be/eVWRJgfRgmc)
<iframe width="560" height="315" src="https://www.youtube.com/embed/eVWRJgfRgmc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Vídeo de apresentação do Projeto (3ª Entrega)**

[Apresentação](https://www.youtube.com/watch?v=xsMU915KdhA&feature=youtu.be)
<iframe width="560" height="315" src="https://www.youtube.com/embed/eVWRJgfRgmc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Vídeo de apresentação do Projeto (4ª Entrega)**

[Apresentação](https://youtu.be/losLuFm8Eqk)
<iframe width="560" height="315" src="https://www.youtube.com/embed/eVWRJgfRgmc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Além dos itens que foram expostos na apresentação, vale ressaltar que foram feitos bem mais ações "por baixo dos panos", bem como: 
- transformar o back-end em uma API;
- Integração dos botões do front end e 
- remodelação do banco de dados.

Para acessar o projeto em produção:
[Gantt Planner](https://pi-gantt-planner.herokuapp.com)

Obs: Para melhor compatibilidade de navegador com a aplicação, é sugerido utilizar o Navegador Google Chrome.


**WIKI:** 

Acesse a Wiki do projeto para ter mais detalhes sobre o projeto organizada em Tópicos:

[Wiki do Projeto (Clique aqui!)](https://gitlab.com/felipemessibraga/pi-phpython/-/wikis/home)

**DISCIPLINAS:**
- Linguagem de Programação I - Profª Adriana Jacinto
- Laboratório de Desenvolvimento de Banco de Dados II - Profª Adriana Jacinto
- Engenharia de Software - Profº Giuliano Bertoti
- Planejamento Estratégico - Profº Valter de Sousa
- Gestão de Pessoas - Profº Valter de Sousa
- Arquitetura e Modelagem de Banco de Dados - Profº Emanuel Mineda
- Inglês - Profª Teresinha Nogueira

**EQUIPE DE ALUNOS:**
- Giovanni Guidace - r.a. 1460281923013
- Igor da Silva - r.a. 1460281923016
- Nathan Augusto - r.a. 1460281923027
- Jéssica Isri - r.a. 1460281923019
- Felipe Braga - r.a. 1460281923010

## VISÃO DO PROJETO

Para equipes que trabalham em múltiplos projetos e tarefas, que estão insatisfeitas com a dificuldade de 
fazer um planejamento com as ferramentas de planejamento disponíveis, o Gantt Planner é uma ferramenta visual 
de planejamento que auxilia o desenvolvimento do seu planejamento, minimizando os riscos de má distribuição 
de mão de obra, perder prazos e compreensão da evolução das tarefas.
Ao contrário de outras ferramentas de planejamento conhecidas, nosso projeto oferece gráficos e relatórios 
completos e agradáveis com a possibilidade de compartilhamento do gráfico do planejamento como imagem para o time.


## MOTIVAÇÃO

A motivação para o desenvolvimento desse projeto partiu de uma demanda da empresa Necto, a partir de seu 
CEO Carlos Eduardo, que era de uma ferramenta que fosse fácil de mexer, que fosse portátil e ao mesmo tempo 
flexível para auxiliar no planejamento de seus projetos. Manipular um gráfico de Gantt afim de conquistar esses 
objetivos será o cerne do projeto.
Outro fator decisivo para o desenvolvimento é a limitação que outras ferramentas semelhantes à do nosso projeto que 
impossibilitam ou dificultam muito a visualização da empresa como um todo, afim de conseguir conciliar o 
desenvolvimento de vários projetos simultaneamente com a distribuição da equipe da melhor forma possível, além de ter 
uma melhor distribuição dos recursos financeiros.


## CASOS DE NEGÓCIO

[Casos de Negócio](https://gitlab.com/felipemessibraga/pi-phpython/-/wikis/Casos-de-Neg%C3%B3cio-(Business-Case))

Visite os casos de uso para entender mais sobre os benefícios e riscos do projeto, justificativa financeira e 
avaliação de viabilidade.

### PROVA DE CONCEITO (POC)

[Prova de Conceito - PHPython](https://pi-phpython.herokuapp.com/gantt/)


## REQUISITOS

### FUNCIONAIS

Trataremos a pessoa que vai fazer o planejamento como *Gerente* e as pessoas que utilizarão esse planejamento
como *Usuário*, independente de suas funções reais.

(STORY CARDS)

**2ª ENTREGA**

- (REQ-1) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de projeto. Cada cadastro de projeto deve conter apenas
as seguintes informações básicas: id, nome, escopo, data de inicio e prazo de entrega;
- (REQ-2) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de tarefas. Cada cadastro de tarefa deve conter apenas
as seguintes informações básicas: id, nome, data inicial, data final, prazo, dependência, entregável (se essa tarefa gera um entregável);
- (REQ-3) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de pessoas. Cada cadastro de pessoa deve conter apenas
as seguintes informações básicas: id, nome e contato;
- (REQ-4) O Gerente e o Usuário devem ser capazes de visualizar um gráfico de gantt com as tarefas (de forma estática por enquanto -Prova de Conceito(POC));

**3ª ENTREGA**

- (REQ-6) O Gerente pode incluir e excluir usuários para cada projeto através do django admin;
- (REQ-7) O Gerente pode incluir um usuário em uma ou mais tarefas se esse usuário fizer parte do projeto relacionado a tarefa através do django admin;
- (REQ-9) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de projeto através de um menu;
- (REQ-10) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de tarefa através de um menu;
- (REQ-11) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de pessoa através de um menu;
- (REQ-12) O Gerente e o usuário podem cadastrar diferentes cores para os projetos para diferencia-los;;

**4ª ENTREGA**

- (REQ-5) O Gerente pode visualizar as tarefas de cada projeto. Cada tarefa deve estar atrelada a necessariamente um projeto;
- (REQ-6) O Gerente pode incluir usuários para cada projeto através da interface;
- (REQ-7) O Gerente pode incluir um usuário em uma ou mais tarefas se esse usuário fizer parte do projeto relacionado a tarefa;
- (REQ-8) O Gerente e o Usuário podem visualizar quais pessoas fazem parte de cada projeto e tarefa diretamente no gráfico;
- (REQ-12) O Gerente e o usuário podem visualizar diferentes cores para os projetos para diferencia-los;
- (REQ-14) O Gerente e o Usuário podem salvar as alterações feitas no gráfico de gantt;
- (REQ-13) O Gerente pode fazer alterações na visualização do gráfico de forma dinâmica direto no gráfico de gantt. As seguintes alterações podem ser feitas:
visualizar por período de dia, semana, mês ou ano, alterar o período, duração, data de inicio e fim
de cada tarefa;

**5ª ENTREGA**

- (REQ-19) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de projeto. Cada cadastro de projeto deve conter além das informações básicas, 
as seguintes informações: custo base, horas de desenvolvimento, pessoas(usuários), progresso e data final;
- (REQ-20) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de tarefas. Cada cadastro de projeto deve conter além das informações básicas, 
as seguintes informações: pessoas, dependencias (de outras tarefas),progresso e data final;
- (REQ-21) O Gerente pode criar, alterar, visualizar ou excluir um cadastro de pessoas. Cada cadastro de projeto deve conter além das informações básicas, 
as seguintes informações: horas disponíveis, salário, férias, carga horária, habilidades, faltas;
- (REQ-22) Gerente e Usuário podem pesquisar cadastros de Projetos, Tarefas e Pessoas;
- (REQ-23) Gerente pode visualizar todas as pessoas com horas livres sem filtro, com filtro de projetos ou com filtro de tarefas em um intervalo de tempo;
- (REQ-30) Usuário pode acessar aba de HELP para tirar dúvidas;
- (REQ-31) Usuário pode reportar um erro;
- (REQ-32) Usuário pode escolher quais projetos e tarefas serão exibidos no gráfico de gantt


**6ª ENTREGA (FINAL)**

- (REQ-15) O Gerente pode compartilhar uma imagem com os usuários através de um botão de compartilhamento;
- (REQ-16) O Gerente pode criar novos gráficos através de um menu e alternar entre a visualização deles;
- (REQ-17) O Gerente pode excluir gráficos através de uma lista de gráficos;
- (REQ-18) O Gerente pode visualizar o histórico de alterações salvas de cada gráfico;
- (REQ-24) Gerente e Usuário podem visualizar uma escala "Nervouser", que é quando uma pessoa está a muitas horas em um projeto. Essa escala existe para
que não haja problemas de motivação.
- (REQ-25) Gerente pode gerar relatórios de pessoas com os seguintes dados: Horas livres, salário, carga horária, projetos e tarefas que participa/participou
em um intervalo de tempo.
- (REQ-26) Gerente pode gerar relatórios de Projetos com os seguintes dados: Horas trabalhadas por pessoa, progresso, prazos;
- (REQ-27) Gerente pode subdividir uma tarefa em duas novas;
- (REQ-28) Gerente pode baixar qualquer um dos relatórios;
- (REQ-29) Usuários podem alterar um gráfico de gantt simultaneamente desde que pertença ao projeto em que vai alterar;



#### Diagrama de Casos de Uso

![DIAGRAMA DE CASOS DE USO](/uploads/80b5f181d03c0cd07e3ba2b719cd2d89/diagrama_casos_casos_de_uso.jpeg)

### NÃO FUNCIONAIS

**Compatibilidade entre o aplicativo e o mundo real**
1.  A preocupação com o uso de ícones para as principais tarefas gera uma aproximação com o mundo real, trazendo
um conforto propiciado pelo natural reconhecimento dos símbolos presentes no dia a dia.
2.  O mapa centralizado na tela do usuário em referência as televisões que ficam no centro da sala.

![real-virtual](/uploads/3586344651689c3fc8d25e4227eae595/real-virtual.JPG)

**Controle e liberdade para o usuário**
1.  O usuário pode navegar entre as versões do projeto, podendo voltar a uma versão anterior caso a atual não o agrade;
2.  É possível modificar quase todos os atributos dos projetos, tarefas e pessoas;
3.  O sistema é responsivo, para se adaptar aos diversos monitores e dispositivos;

**Consistência e padronização**
1.  Os menus respeitam o mesmo padrão de design;
2.  Os icones apresentam apenas dois tipos, que variam apenas para evidenciar o seu contexto;

**Prevenção de erros**
1.  Existe uma preocupação grande com a prevenção de erros. Todas as decisões que não podem ser desfeitas emitem uma 
confirmação;
2.  Os botões respeitam um margem mínima para que não haja cliques "sem querer".
  
![botoes](/uploads/c2e675a3dbf8fbcab70ccadc283f9cf2/botoes.JPG)

**Eficiência e flexibilidade de uso**
1.  O aplicativo foi pensado para que qualquer pessoa consiga utiliza-lo, por isso apresenta botões com objetivos claros,
drag and drop para facilitar a movimentação das tarefas e contraste visual.
2.  Semelhança na disposição dos menus com ferramentas de uso popular como o Microsoft World;

**Estética e design minimalista**
1.  Deixamos apenas as principais informações em evidência, deixando o maior volume de informações para os relatórios,
onde essas informações são idealmente dispostas de forma a não sobrecarregar o visual;
2.  Sem propagandas ou qualquer informação desnecessária.

![wireframe-minimalista](/uploads/4de17b52b70036620bf3c0c01800b9a9/wireframe-minimalista.JPG)

**Ajuda e documentação**
1.  Aba de Help com várias dicas de como utilizar;
2.  Algumas dicas são sugeridas em menus mais complexos;

[WIREFRAME (ATUALIZADO)](https://www.figma.com/proto/lRDoAT9A8U6i1HlY84PNut/PHPython?node-id=1%3A2&scaling=min-zoom)

## BANCO DE DADOS

![diagrama-uml](/uploads/f547a6f6bcda4157bb54774714b1ae40/diagrama-uml.jpeg)

## TECNOLOGIAS UTILIZADAS

- Python
- PostgreSQL
- HTML
- JavaScript e CSS
- Django (Framework Python)
- Maquina Virtual
- GitLab
- Whats App
- Excel

### Contato

* https://github.com/NathanNaressi    
* https://github.com/igorpereira28    
* https://gitlab.com/felipemessibraga
* https://gitlab.com/giovanniguidace
* https://gitlab.com/jeidc

Fatec - Prof Jessen Vidal - São José dos Campos - SP
