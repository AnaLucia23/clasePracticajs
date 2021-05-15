window.addEventListener('scroll', function(){
    let altoPantalla = window.innerHeight;
    let scrollRecorrido = document.documentElement.scrollTop;
    let listaDetalle = document.querySelectorAll('#tarjetas article');

    listaDetalle.forEach (function (item, index, listado){
        let alturaArticle = listado[index].offsetTop;
        console.log ('Posicion Superior' + index);

        if ((alturaArticle*0.6)< scrollRecorrido){
            item.style.opacity = '1';
        } else {item.style.opacity = '0'}
})});