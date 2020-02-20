// instancio vue
const app = new Vue({
    el: '#app', // obtengo el identificador
    data: {
        titulo: 'Hola mundo con vue',
        items : ['item 1', 'item 2', 'item 3', 'item 4'],
        frutas : [
            {nombre: 'pera', cantidad:0, estado: false},
            { nombre: 'mango', cantidad:8, estado: false },
            { nombre: 'manzana', cantidad:6, estado: true },
            { nombre: 'platano', cantidad:3, estado: true }

        ],
        nuevaFruta : '',
        total: 0      
    }, methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 1, estado: 1
            });
            this.nuevaFruta= '';
        }
    },
    computed:{
        sumarFrutas () {
            this.total = 0;
            for( fruta of this.frutas){
                this.total = this.total+ fruta.cantidad; 
            }

            return this.total;
        }
    }
})