self.addEventListener('fetch' , event => {

    if(event.request.url.includes('img/main.jpg')){
        // console.log(event.request.url)

        // Lo hacemos en una sola linea
        // Esto significa que con event le respondo el evento
        // Con respondWith significa que respondo con y hacemos ora peticion al directorio
        // respondiendo con la imagen patas arriba
        //event.respondWith(fetch('img/main-patas-arriba.jpg'))

        // ______________________________________________

        // Otra manera de obtener la respuesta es
        // Declarando una variable llamada resp por ejemplo
        let resp = fetch ('img/main-patas-arriba.jpg')
        // y le mandamos la variable anterior como parámetro al fetch
        event.respondWith(resp)

    }
})
    
    // if(event.request.url.includes('style.css')) {
    //     console.log(event.request.url)

        // let fotoReq = fetch('img/main.jpg')
        // let  fotoReq = fetch(event.request.url)

        // let fotoReq = (event.request);

        // event.respondWith(fotoReq);

// ______________________________________________

        // Manera de cambiar interceptar peticion del y cambiar los estilos de nuestro html

        //     let respuesta = new Response (`
        //         body{
        //             background-color: red; !important;
        //             color: white;
        //         }
        //     `,{
        //         headers:{
        //         'Content-Type': 'text/css'
        //     }
        // } );
        // event.respondWith(respuesta);

    // _________________________________________

        


