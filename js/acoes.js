var modalCompraIdVisualLabel =  document.getElementById('modalCompraIdVisualLabel');
var compra = [];
compra.opcional = [];

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


function lerQuantidade(elemento){
    let quant = 1;

    if(elemento.checked){  
        do
        {
            quant = prompt("Quantidade?");
            quant = Number.parseInt(quant);
            if(Number.isNaN(quant)){
                var retorno = confirm("Escreva apenas números");
                if (!retorno){
                    quant = 1;
                    break;
                }                
            }
        }while(Number.isNaN(quant))
    }
    return quant;
}

function addOpcionalACompra(element, item, quant = 1){
    if(element.checked){
        compra.opcional[item] = {'nome': listaOpcionaisPacotesIdVisual[item].nome, 'valor': listaOpcionaisPacotesIdVisual[item].valor, 'quant':quant}
    }else{
        delete compra.opcional[item];
    }    
    exibirValorTotal();
}

function calcValorCompra(){
    compra.valorTotal = parseFloat(compra.pacote.valor);
    compra.opcional.forEach(item => {compra.valorTotal += (parseFloat(item.valor) * parseFloat(item.quant))});
}

function exibirValorTotal(){
    calcValorCompra();
    $('#ValorTotalIdVisual').text('R$'+ compra.valorTotal);
}

function exibirPacoteIdvisualEscolhido(pacote, valor){
    compra.pacote = {'nome': pacote, 'valor': valor}
    modalCompraIdVisualLabel.innerHTML = `${compra.pacote.nome} - (R$${compra.pacote.valor})`;
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

    //${opcional.multiplos?`lerQuantidade(${opcional.id});`:''}

    $("#listaOpcionaisPacotesIdVisual").html(dados);

}

function finalizarCompra(){   
    var text = `Pacote escolhido: ${compra.pacote.nome} - R$${compra.pacote.valor}; \n`;
    if(compra.opcional.length > 0){
        text += `Opcionais incluidos: \n`
        compra.opcional.forEach(item => {text +=  `* (${item.quant +' '+ item.nome}, valor R$${parseFloat(item.quant) * parseFloat(item.valor)}); \n`});
        text += `Valor total: R$${compra.valorTotal}`;
    }
    var url = 'https://api.whatsapp.com/send?phone=5511950509303';
    text = window.encodeURIComponent(text);
    window.open(`${url}&text=${text}`, "_blank");
}

function enviarMsgWhatsApp(text){
    var text = window.encodeURIComponent(text);
    window.open("https://api.whatsapp.com/send?phone=5511950509303" + "&text=" + text, "_blank");
}


function sizeOfThings(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var screenWidth = screen.width;
    var screenHeight = screen.height;

    if(screenWidth > 1200){

        document.getElementById("video").innerHTML = `<video autoplay="" muted="" loop="" width="100%"><source src="assets/videos/video_drawbe.mp4" type="video/mp4"></video>`;
    }
    else
    {
        if(screenWidth > 992){
            document.getElementById("video").innerHTML = `<video autoplay="" muted="" loop="" width="100%"><source src="assets/videos/video_drawbe_tablet.mp4" type="video/mp4"></video>`;      
        }
        else{
            document.getElementById("video").innerHTML = `<video autoplay="" muted="" loop="" width="100%"><source src="assets/videos/video_drawbe_celular.mp4" type="video/mp4"></video>`;
        }
    }
  
  };
  
  sizeOfThings();
  
  window.addEventListener('resize', function(){
      sizeOfThings();
  });

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
    listProjects();
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