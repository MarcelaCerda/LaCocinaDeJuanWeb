/*function guardarSubtipo() {

    let d = document.getElementById("txtDescripcion").value
    
    let producto = {
        descripcion:d,
    }
    let url = "http://127.0.0.1:5000/subtipos"
 
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")

            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )

            console.error(err);
        })
}
*/