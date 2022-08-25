self.addEventListener('fetch' , event => {

    event.respondWith(fetch(event.request));

    // _____________________________________________

    
    
})

    // Manera de controlar si hay un error en la petición


        // const resp = fetch(event.request)
        // IMPORTANTE, PARA HACER ESTE ALGORITMO, CAMBIAR LA IMAGEN A MAIN-2.JPG
        // .then(resp => {
        //     return resp.ok ? resp : fetch('img/main.jpg')
        // });
        // event.respondWith(fetch(event.request)
        // .then(resp => {
        //     if(resp.ok){
            // return resp;
        //})else{
            // return fetch('img/main.jpg')}
        // })
            
        // ________________________________________________

    // if(event.request.url.includes('img/main.jpg')){
        // console.log(event.request.url)

        // Lo hacemos en una sola linea
        // Esto significa que con event le respondo el evento
        // Con respondWith significa que respondo con y hacemos ora peticion al directorio
        // respondiendo con la imagen patas arriba
        //event.respondWith(fetch('img/main-patas-arriba.jpg'))

        // ______________________________________________

        // Otra manera de obtener la respuesta es
        // Declarando una variable llamada resp por ejemplo
        // let resp = fetch ('img/main-patas-arriba.jpg')
        // y le mandamos la variable anterior como parámetro al fetch
        // event.respondWith(resp)

    // }

    // _______________________________________________
    
    // if(event.request.url.includes('style.css')) {
    //     console.log(event.request.url)

        // let fotoReq = fetch('img/main.jpg')
        // let  fotoReq = fetch(event.request.url)

        // let fotoReq = (event.request);

        // event.respondWith(fotoReq);

// ______________________________________________

        // Manera de cambiar interceptar peticion del y cambiar los estilos de nuestro html
        // if(event.request.url.includes('style.css')) {

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

        


