Vue.component('hijo', {
    template:
        `
        <div class="py-5 bg-warning text-white">
            <h4>Componente hijo {{numero}}</h4>  
            <h4>Nombre: {{nombre}}</h4>                    
            <button class="btn btn-danger" @click="numero++">+</button>

        </div>                
        `,
    data() {
        return {
            nombre: "Soy el nombre del hijo"
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre); //envio algo para usar en el componente padre
    },
    props: ['numero'] // para recibir algo desde el padre se usan los props
});
