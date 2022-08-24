self.addEventListener('fetch' , event => {
    
    if(event.request.url.includes('style.css')) {
        // console.log(event.request.url)

        // let fotoReq = fetch('img/main.jpg)
        // let  fotoReq = fetch(event.request.url)

        // let fotoReq = (event.request);

        // event.respondWith(fotoReq);

            let respuesta = new Response (`
                body{
                    background-color: red; !important;
                    color: white;
                }
            `,{
                headers:{
                'Content-Type': 'text/css'
            }
        } );
        event.respondWith(respuesta);

    } 


})