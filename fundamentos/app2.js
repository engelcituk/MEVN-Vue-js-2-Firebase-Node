// instancio vue
const app = new Vue({
    el: '#app', // obtengo el identificador
    data: {
        saludo: "Soy ciclo de vida de vue",        
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },

    methods: {
        destruir(){
            this.$destroy();
        }
    }
});