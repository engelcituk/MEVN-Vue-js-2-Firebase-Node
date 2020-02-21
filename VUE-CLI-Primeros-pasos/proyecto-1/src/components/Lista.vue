<template>
    <div>
        <ul class="list-group">
            <!-- sino le pongo la key, vue me da un error -->
            <li v-for="(fruta, index) of frutas" :key="fruta.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{fruta.nombre}} {{index}}
                <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
            </li>            
        </ul>
    </div>
</template>
    
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas']),

    },
    methods: {
        ...mapMutations(['aumentar'])
    },

}
</script>