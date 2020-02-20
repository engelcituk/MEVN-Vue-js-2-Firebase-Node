Vue.component('padre', {
    template:
        `
        <div class="p-5 bg-dark text-white">
            <h3>Componente padre {{numeroPadre}}</h3>
            <hijo :numero="numeroPadre"></hijo> 
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
        </div>                
        `,
    data() {
        return {
            numeroPadre: 3
        }
    }
});
