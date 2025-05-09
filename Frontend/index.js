const API_URL = "http://localhost:4000/api" 
 
const xhr = new XMLHttpRequest()

function onRequestHandler(){
    if (this.readyState == 4 && this.status == 200){
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, se ha llamado open,
        // 2 = HEADERS_RECEIVED, SE ESTA LLAMANDO AL METODO SEND()
        // 3 = LOADING, ESTA CARGANDO, ES DECIR, ESTA RECIBIENDO LA RESPUESTA.
        // 4 = DONE, se ha completado la operacion.
        console.log (this.response);
    }
 }

 xhr.addEventListener("load", onRequestHandler);
 xhr.open("GET", `${API_URL}/clientes`)
 xhr.send();