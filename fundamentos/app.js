// instancio vue
const app = new Vue({
    el: '#app', // obtengo el identificador
    data: {
        mensaje: "hola soy un mensaje",
        contador: 0
    }, methods: {

    },
    computed: {
        mensajeInvertido(){
            return this.mensaje.split('').reverse().join('')
        },
        color (){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20

            }
        }
    }
})