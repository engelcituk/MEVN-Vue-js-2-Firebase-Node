<template>
    <div>
        {{tarea.id}} - {{tarea.nombre}} 
        <h1>editar</h1>
        <form @submit.prevent="editarTarea(tarea)" class="form-inline">
             <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">N</div>
                </div>
                <input type="text" class="form-control" placeholder="Actualizar tarea" v-model="$v.tarea.nombre.$model">
            </div>
            <button type="submit" class="btn btn-primary mb-2"
            :disabled="$v.tarea.$invalid"
            >Actualizar</button>
        </form>
        <small class="text-danger" v-if="!$v.tarea.nombre.required">Campo requerido</small>
        {{$v.tarea.nombre}}
    </div>
</template>


<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

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
        ...mapActions(['getTarea','editarTarea'])
    },
     validations:{
        tarea: {
            nombre : {required},
            //minLength: minLength(5)
        }
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>
