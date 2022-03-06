/* ***********************************************************************
Início Incluir imagens ao carousel */
    const imagensCarousel = [
        'assets/img/2.jpg',
        'assets/img/3.jpg',
        'assets/img/4.jpg',
        'assets/img/5.jpg',
        'assets/img/6.jpg',
        'assets/img/7.jpg',
        'assets/img/8.jpg',
        'assets/img/9.jpg',
        'assets/img/10.jpg',
        'assets/img/11.jpg',
        'assets/img/12.jpg',
        'assets/img/13.jpg',
        'assets/img/15.jpg'
    ];

    function addImagensCarousel(){
        imagensCarousel.forEach(img =>{
            $('#imagensCarousel').append(`<div class="carousel-item" data-bs-interval="2500">
                <img src="${img}" class="d-block w-100">
            </div>`);
        });
    }
    //Restante das imagens adicionadas via Javascript após carregamento da página
    $(window).on("load", function(){
        addImagensCarousel();
    });
    
/*Fim Incluir imagens ao carousel
**************************************************************************/


/* ***********************************************************************
Início Compra Identidade visual */
    // Lista de pacotes Identidade visula
    let pacotesIdVisual = [
        {
            'nome':'Pacote Start', 
            'valor':'300,00', 
            'imagem':'assets/img/5.jpg',
            'imgValor':'assets/img/pacote_start.png',
            'opcionais': true,
            'adicionais':[
                'Logotipo Principal;',
                'Submarca;',
                'Ícone;',
                'Marcas d’água (na cor original da marca, no preto e no branco);',
                'Paleta de cores e Tipografia;',
                'Mockups;',
                'Pattern (1 formato);',
                'Documento contendo a identidade visual completa, com conceito da marca e todos os elementos construídos.'
            ]
        },
        {
            'nome':'Pacote Plus', 
            'valor':'550,00', 
            'imagem':'assets/img/1.jpg',
            'imgValor':'assets/img/pacote_card.png',
            'opcionais': true,
            'adicionais':[
                'Logotipo Principal;',
                'Submarca;',
                'Ícone;',
                'Marcas d’água (na cor original da marca, no preto e no branco);',
                'Paleta de cores e Tipografia;',
                'Mockups;',
                'Moodboard;',
                'Pattern (2 formatos);',
                'Cartão de Visita Físico;',
                'Cartão Digital DB Card;',
                '5 capas para destaques;',
                'Documento contendo a identidade visual completa, com conceito da marca e todos os elementos construídos.'
            ]
        },  
        {
            'nome':'Pacote Premium', 
            'valor':'900,00', 
            'imagem':'assets/img/pacote_papelaria.jpg',
            'imgValor':'assets/img/pacote_premium.png',
            'opcionais': true,
            'adicionais':[
                'Logotipo Principal;',
                'Logotipo Alternativo;',
                'Submarca;',
                'Ícone;',
                'Marcas d’água (na cor original da marca, no preto e no branco);',
                'Paleta de cores e Tipografia;',
                'Mockups;',
                'Moodboard;',
                'Pattern (2 formatos);',
                'Cartão de Visita Físico;',
                'Cartão Digital DB Card;',
                '5 capas para destaques;',
                'Artes para Papelaria;',
                'Naming;',
                'Documento contendo a identidade visual completa, com conceito da marca e todos os elementos construídos.'
            ]
        },
        {
            'nome':'Catálogo de Apresentação', 
            'valor':'18.00', 
            'imagem':'assets/img/catalogo.jpg',
            'imgValor':'assets/img/valorcatalogo.png',
            'opcionais': false,
            'adicionais':[
                'Apresente sua empresa, serviço ou produto para seu público de forma profissional e personalizada.',
                'Um catálogo contendo todas as suas informações de forma interativa e atrativa.', 
                'O valor final do catálogo dependerá da quantidade de páginas desenvolvidas.É necessário já ter uma identidade visual.'
            ]
        }
    ];
    //Templates para exibição dos pacotes de identidade visual
    function template1(nome,valor,imagem,imgValor,adicionais=[]){
        let adicional = '';
        adicionais.forEach(item =>{ adicional+=`<li class="text-black-50 mb-0 text-size-14">${item}</li>`});    
        let template = `
        <div class="col-12 col-md-6 mb-4">
            <div class="mb-3">
                <img class="img-fluid" src="${imagem}">
            </div>            
            <div class="featured-text text-left text-lg-left">
                <h4 class="text-cinza-2">${nome}</h4>
                <ul>
                    ${adicional}
                </ul>
            </div>
            <div class="row align-items-center text-center ms-4">
                <div class="col-5">
                    <img src="${imgValor}" style="width: 9rem;">
                </div>
                <div class="col-7">
                    <button type="button" class="btn btn-secondary btn-compra p-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="exibirPacoteIdvisualEscolhido('${nome}','${valor}')">Adquirir Agora</button>
                </div>
            </div>
        </div>`;

        return template;
    }

    function template2(nome,valor,imagem,imgValor,adicionais=[]){
        let adicional = '';
        adicionais.forEach(item =>{ adicional+=`<p class="text-black-50 mb-0 text-size-14">${item}</p>`});
        let template = `
        <div class="col-12 col-md-6 mb-4">
            <div class="mb-3">
                <img class="img-fluid" src="${imagem}">
            </div>            
            <div class="featured-text text-left text-lg-left">
                <h4 class="text-cinza-2">${nome}</h4>
                <ul>
                    ${adicional}
                </ul>
            </div>
            <div class="row align-items-center text-center ms-4">
                <div class="col-5">
                    <img src="${imgValor}" style="width: 7rem;" />
                </div>
                <div class="col-7">
                    <button type="button" class="btn btn-secondary btn-compra p-2" onclick="enviarMsgWhatsApp('${nome}, R$${valor} por página. Verificar valor final e quantidade de páginas com a designer no momento da contratação.')">Adquirir Agora</button>
                </div>
            </div>
        </div>`;
        return template;
    }
    // Criando função para exibição dos pacotes de identidade visual
    function exibirPacotesIdVisula(){
          pacotesIdVisual.forEach(pacote =>{
              if(pacote.opcionais){
                  $('#pacotesIdVisual').append(template1(pacote.nome,pacote.valor,pacote.imagem,pacote.imgValor,pacote.adicionais));                  
              }
              else{
                $('#pacotesIdVisual').append(template2(pacote.nome,pacote.valor,pacote.imagem,pacote.imgValor,pacote.adicionais));
              }
          }); 
    }
    //Pacotes adicionados via Javascript após carregamento da página
    $(window).on("load", function(){
        exibirPacotesIdVisula();
    });
    

    //Array para armazenar a compra
    var compra = [];
    compra.opcional = [];
    //Lista de opcionais que podem ser adicionados a compra
    const listaOpcionaisPacotesIdVisual = [
        {'id': 0, 'nome': 'Arte Cartão de Visita Físico'                    , 'valor': 45},
        {'id': 1, 'nome': 'Cartão de Visita Digital'                        , 'valor': 55},
        {'id': 2, 'nome': 'Arte Envelope A4'                                , 'valor': 50},
        {'id': 3, 'nome': 'Arte Envelope Ofício'                            , 'valor': 60},
        {'id': 4, 'nome': 'Arte Papel Timbrado/Receituário'                 , 'valor': 50},
        {'id': 5, 'nome': 'Arte para Tag ou Etiqueta'                       , 'valor': 35},
        {'id': 6, 'nome': 'Arte para Pasta'                                 , 'valor': 45},
        {'id': 7, 'nome': 'Arte Ficha Anamnese (página única)'              , 'valor': 50},
        {'id': 8, 'nome': 'Arte Ficha Anamnese Dupla (capa + 2 páginas)'    , 'valor': 95},
        {'id': 9, 'nome': 'Arte Flyer, Cartaz ou Banner'                   , 'valor': 50},
        {'id': 10, 'nome': '5 Capas Destaques'                              , 'valor': 30},
        {'id': 11, 'nome': '10 Capas Destaques'                             , 'valor': 60},
        {'id': 12, 'nome': 'Template Post Instagram (cada)'                 , 'valor': 10, 'multiplos': true},
        {'id': 13, 'nome': 'Arte Post Instagram (cada)'                     , 'valor': 15, 'multiplos': true},
    ];

    //Ler quantidade de um opcional adicionado
    function lerQuantidade(elemento){
        let quant = 1;
        if(elemento.checked){  
            do{
                quant = prompt("Quantidade?");
                quant = Number.parseInt(quant);
                if(Number.isNaN(quant)){
                    var retorno = confirm("Escreva apenas números");
                    if (!retorno){
                        quant = 1;
                        break;
                    }                
                }
            }while(Number.isNaN(quant));
        }
        return quant;
    }

    //Adicionar opcionais a compra
    function addOpcionalACompra(element, item, quant = 1){
        if(element.checked){
            compra.opcional[item] = {'nome': listaOpcionaisPacotesIdVisual[item].nome, 'valor': listaOpcionaisPacotesIdVisual[item].valor, 'quant':quant}
        }else{
            delete compra.opcional[item];
        }    
        exibirValorTotal();
    }

    //Calcular valor do pacote acrescido dos opcionais. 
    function calcValorCompra(){
        compra.valorTotal = parseFloat(compra.pacote.valor);
        compra.opcional.forEach(item => {compra.valorTotal += (parseFloat(item.valor) * parseFloat(item.quant))});
    }
    //Exibir calor total da compra
    function exibirValorTotal(){
        calcValorCompra();
        $('#ValorTotalIdVisual').text('R$'+ compra.valorTotal);
    }

    //Selecionar o pacote escolhido para anexar ao modal de opcionais
    function exibirPacoteIdvisualEscolhido(pacote, valor){
        compra.pacote = {'nome': pacote, 'valor': valor}
        $('#modalCompraIdVisualLabel').html(`${compra.pacote.nome} - (R$${compra.pacote.valor})`);
        compra.opcional = [];
        $('#ValorTotalIdVisual').html(compra.pacote.valor);

        var dados = '';

        listaOpcionaisPacotesIdVisual.forEach(opcional =>{
            
            dados += `<label class="list-group-item d-flex justify-content-between align-items-center text-cinza-2 text-size-14">
                <div>
                    <input class="form-check-input me-1" type="checkbox" value="" onchange="addOpcionalACompra(this, ${opcional.id}${opcional.multiplos?', lerQuantidade(this)':''})">
                    ${opcional.nome}
                </div>
                <span class="badge bg-primary rounded-pill">R$${opcional.valor}</span>
            </label>
            `;    
        });
        $("#listaOpcionaisPacotesIdVisual").html(dados);
    }

    //Função responsável por finalizar a compra e enviar a mensagem do pacote escolhido mais opcionais via WhatsApp
    function finalizarCompra(){   
        var text = `Pacote escolhido: ${compra.pacote.nome} - R$${compra.pacote.valor}; \n`;
        if(compra.opcional.length > 0){
            text += `Opcionais incluidos: \n`
            compra.opcional.forEach(item => {text +=  `* (${item.quant +' '+ item.nome}, valor R$${parseFloat(item.quant) * parseFloat(item.valor)}); \n`});
            text += `Valor total: R$${compra.valorTotal}`;
        }
        enviarMsgWhatsApp(text);
    }

/*Fim Compra Identidade visual
**************************************************************************/

/*************************************************************************
Enviar mensagem via WhatsApp*/
    function enviarMsgWhatsApp(text){
        const textFormate = window.encodeURIComponent(text);
        const fone = '5511950509303';
        const apiUrl = `https://api.whatsapp.com/send?phone=${fone}&text=${textFormate}`; 
        window.open(apiUrl, "_blank");
    }
/*Fim Enviar mensagem via WhatsApp
**************************************************************************/

/* ***********************************************************************
Início PROJETOS */
// Listando imagens de capa para os projetos (portfólios)
    const listOfProjects = [
        {'projectName':'Beauté','dirName': 'BEAUTE','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Sísi Biquínis','dirName': 'SISI','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Carolla','dirName': 'CAROLLA','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Ella','dirName': 'ELLA','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Eva','dirName': 'EVA','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Ferreira Farias','dirName': 'FERREIRA','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'La Nêta','dirName': 'LANETA','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Maída Vieira','dirName': 'MAIDA','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Odontoflor','dirName': 'ODONTO','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        },
        {'projectName':'Simone Andrade','dirName': 'SIMONE','capa':'capa.jpg', 'images':[                
                {'name':'1.jpg'     , 'fullScreen':false},
                {'name':'2.jpg'     , 'fullScreen':false},
                {'name':'3.jpg'     , 'fullScreen':true},
                {'name':'4.jpg'     , 'fullScreen':false},
                {'name':'5.jpg'     , 'fullScreen':false},
                {'name':'6.jpg'     , 'fullScreen':false},
                {'name':'7.jpg'     , 'fullScreen':false},
                {'name':'8.jpg'     , 'fullScreen':true},
            ]
        }
    ];

    //função para listar os projetos
    function listProjects(){
        listOfProjects.forEach(project => {

            $("#capaProjetos").append(
                `<div class="col-6 col-sm-4 col-md-3 g-1 g-sm-2">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exibicaoPortfolio" onclick="detailProject('${project.dirName}')">
                        <div class="card text-white capaPortfolio border-0">
                            <img src="assets/img/projetos/${project.dirName}/${project.capa}"  alt="...">
                            <div class="card-img-overlay imgEfeitoPortfolio">
                                <p class="text-size-14">${project.projectName}</p>                      
                            </div>                        
                        </div>
                    </a>                  
                </div>`
            );
        });
    }
    //project list load after page load
    $(window).on("load", function(){
        listProjects();
    });
    
    //buncar projeto por nome do diretório
    function getProjectByDirName(dirName){
        let p;
        listOfProjects.forEach(project => {            
            if(project.dirName == dirName){
                p = project;              
            }
        });
        return p;
    }

    //Exbindo detalhes de projetos
    function detailProject(dirName){
        let project = getProjectByDirName(dirName);
        let htmlDetails = '';
        project.images.forEach(img =>{
            htmlDetails += `<div class="${img.fullScreen?'col-12':'col-6'} px-0">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exibicaoDetalhesPortfolio" onclick="imageDetailProjectZoon(this,'${project.projectName}')" >
                    <img src="assets/img/projetos/${dirName}/${img.name}" class="img-fluid" alt="...">
                </a>
            </div>`;
        });
        $('#projectDetails').html(htmlDetails);
        $('#modalexibicaoPortfolio').html(project.projectName);
    }

    //Exbir imagem dos detalhes do projeto em tela cheia

    function imageDetailProjectZoon(element, projectName){
        $('#imageZoon').attr('src',$(element).children().attr('src'))
        $('#modalexibicaoDetalhesPortfolio').html(projectName);
    }

/*Fim PROJETOS
**************************************************************************/