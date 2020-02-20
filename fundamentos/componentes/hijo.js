Vue.component('hijo', {
    template:
        `
        <div class="py-5 bg-warning text-white">
            <h4>Componente hijo {{numero}}</h4>                    
        </div>                
        `,
    props: ['numero']
});
