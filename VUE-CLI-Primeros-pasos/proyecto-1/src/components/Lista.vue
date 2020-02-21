<template>
    <div>
        <ul class="list-group">
            <!-- sino le pongo la key, vue me da un error -->
            <li v-for="(fruta, index) of arrayOrdenado" :key="fruta.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{fruta.nombre}} {{index}}
                <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
            </li>            
        </ul>
        <span class="btn btn-xs btn-danger mt-3 btn-block"  @click="resetear">Resetear</span>

    </div>
</template>
    
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas']),
        arrayOrdenado(){
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return this.frutas.sort( (a, b) => b.cantidad - a.cantidad)
        }

    },
    methods: {
        ...mapMutations(['aumentar','resetear'])
    },

}
</script>