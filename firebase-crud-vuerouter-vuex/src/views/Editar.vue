<template>
    <div>
        <h1>editar</h1>
        {{tarea.id}} - {{tarea.nombre}} 
    </div>
</template>


<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    created(){
        this.getTarea(this.id)
    },
    methods:{
        ...mapActions(['getTarea'])
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>
