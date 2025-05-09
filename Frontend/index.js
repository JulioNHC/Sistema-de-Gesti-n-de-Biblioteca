const API_URL = "http://localhost:4000/api" 
 
const xhr = new XMLHttpRequest()

function onRequestHandler(){
    if (this.readyState == 4 && this.status == 200){
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, se ha llamado open,
        // 2 = HEADERS_RECEIVED, SE ESTA LLAMANDO AL METODO SEND()
        // 3 = LOADING, ESTA CARGANDO, ES DECIR, ESTA RECIBIENDO LA RESPUESTA.
        // 4 = DONE, se ha completado la operacion.
        
        const data = JSON.parse(this.response); //convierte en JSON en array
        const HTMLResponse = document
        console.log (data);
    }
 }

 xhr.addEventListener("load", onRequestHandler);
 xhr.open("GET", `${API_URL}/clientes/1`)
 xhr.send();