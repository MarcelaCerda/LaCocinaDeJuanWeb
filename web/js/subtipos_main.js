if (document.getElementById("appSubtipo")) {
    const app1 = new Vue({
        el: "#appSubtipo",
        data: {
            datos: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'http://127.0.0.1:5000/subtipos'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.datos = data;
                        this.loading = false;
                        console.log(this.datos)             
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(id) {
                const url = 'http://127.0.0.1:5000/subtipos/' + id;              
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
