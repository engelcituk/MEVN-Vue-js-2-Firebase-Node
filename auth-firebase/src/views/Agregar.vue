import { mapActions } from 'vuex';
<template>
    <div>
        <h1>Agregar Tarea</h1>
        <form @submit.prevent="agregarTarea(nombre)" class="form-inline">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">T</div>
                </div>
                <input type="text" class="form-control" placeholder="Agregar tarea" v-model="nombre">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'Agregar',
    data(){
        return {
            nombre: ''
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    }
}
</script>
