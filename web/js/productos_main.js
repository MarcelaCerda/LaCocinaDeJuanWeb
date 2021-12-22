if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            productos: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'http://127.0.0.1:5000/productos'
            //var url = 'http://192.168.1.115:8080/productos'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.productos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(id) {
                const url = 'http://127.0.0.1:5000/productos/' + id;
               
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        }
    })
}
