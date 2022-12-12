/*jquery*/

/*(document) = donde se encuentran todos los elementos
del DOM*/

/*$(document).ready(function(){
    console.log('holis')
})*/


/*cuando en todo el body paso el cursor (mousemove)*/
/*el movimiento del mouse va a 
generar un evento
ese evento tiene mucha info, por ej clientX y clientY,
el ancho y largo del navegador, si lo tomo,
e.orignalEvent.clientX, la consola me mostraria la distancia del mouse
desde el lado izquierdo al derecho*/

/*tomo el evento con e*/

'use strict'

$(document).ready(function(){

    $('body').on({ 'mousemove' : function(e){
        /*Limpia la consola para no molestar*/
        console.clear();
        /*guardo posicion X del mouse en una variable*/
        let clientX = e.originalEvent.clientX;
        /*guardo posicion Y del mouse en una variable*/
        let clientY = e.originalEvent.clientY;
        
        /*en el css de #cursor agrego propiedades
        ahora el cursor va pegado al mouseS*/
        /*para que quede la flecha del mouse en el centro
        tengo que restar la mitad del ancho del cursor,
        como son 5rem, 5 por 16 es 80 80 /2 son 40px*/
        $('#cursor').css({
            'left' : (clientX - 32) + 'px',
            'top': (clientY - 32) + 'px'
        })
    }})

    /*cuando a una etiqueta a le pase el cursor se ejecutara 
    mouseover y cuando salga mouseout*/
    $('a').on({
        'mouseover': function(){
            /*agrega la clase .mini*/
            $('#cursor').addClass('mini')
        },
        'mouseout' : function(){
            /*elimina la clase mini*/
            $('#cursor').removeClass('mini')
        },
    })

})

