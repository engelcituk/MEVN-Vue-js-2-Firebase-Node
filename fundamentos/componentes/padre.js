Vue.component('padre', {
    template:
        `
        <div class="p-5 bg-dark text-white">
            <h3>Componente padre {{numeroPadre}}</h3>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            {{nombrePadreDesdeHijo}}
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadreDesdeHijo = $event"></hijo> 
        </div>                
        `,
    data() {
        return {
            numeroPadre: 3,
            nombrePadreDesdeHijo: ''
        }
    }
});
