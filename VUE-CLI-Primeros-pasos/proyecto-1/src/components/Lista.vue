<template>
    <div>
        <ul class="list-group">
            <!-- sino le pongo la key, vue me da un error -->
            <li v-for="fruta of frutas" :key="fruta.id"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{fruta.nombre}}
                <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
            </li>            
        </ul>
    </div>
</template>
    
<script>
import {mapState} from 'vuex';
export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas'])
    },

}
</script>