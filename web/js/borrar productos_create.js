/*
function guardarProducto() {

    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    let su = parseInt(document.getElementById("txtSubtipo").value)
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = parseInt(document.getElementById("txtStock").value)
    let f = document.getElementById("txtFoto").value
    
    let producto = {
        nombre: n,
        descripcion:d,
        subtipo:su,
        precio: p,
        stock: s,
        foto:f
    }
    let url = "http://127.0.0.1:5000/productos"

    var options = {
    body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
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