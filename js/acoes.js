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
    {'id': 12, 'nome': 'Template Post Instagram (cada)'                 , 'valor': 10, 'cada':''},
    {'id': 13, 'nome': 'Arte Post Instagram (cada)'                     , 'valor': 15, 'cada':''},
];


function lerQuantidade(elemento){
    if(elemento.checked){
        let sign = prompt("Quantidade?");
    }    
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
    $('#ValorTotalIdVisual').append(valor);

    listaOpcionaisPacotesIdVisual.forEach(opcional =>{
        $("#listaOpcionaisPacotesIdVisual").append(`
        <label class="list-group-item d-flex justify-content-between align-items-center text-cinza-2 text-size-14">
            <div>
                <input class="form-check-input me-1" type="checkbox" value="" onchange="addOpcionalACompra(this, ${opcional.id})">
                ${opcional.nome}
            </div>
            <span class="badge bg-primary rounded-pill">R$${opcional.valor}</span>
        </label>
        `);    
    });

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

