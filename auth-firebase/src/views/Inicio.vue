<template>
  <div class="about">
    <h1>Lista de tareas</h1>
    <router-link to='/agregar'>
      <button class="btn btn-success btn-block">Agregar tarea</button>
    </router-link>

    <div v-if="carga" class="text-center mt-3">
      <h3>Cargando contenido..</h3>
      <pulse-loader></pulse-loader>
    </div>

    <form @submit.prevent="buscador(texto)">
      <input type="text" placeholder="Buscar..." class="form-control mt-5" v-model="texto" v-on:keyup="buscador(texto)">
      <p>{{texto  }}</p>
    </form>
    <ul class="list-group mt-5" v-if="!carga">
      <li class="list-group-item"
        v-for="(tarea, index) of arrayFiltrado" :key="index">
        {{tarea.nombre}} {{tarea.id}}
        <div class="float-right">
           <router-link :to="{ name:'Editar', params: {id: tarea.id } }">
            <button class="btn btn-warning btn-sm mr-2">Editar</button>
          </router-link>
          <button @click="eliminarTarea(tarea.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>      
    </ul>
  </div>
</template>

<script>
import {mapActions,mapState, mapGetters} from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
    name: 'Inicio',
    data(){
      return  {
        texto: ''
      }
    },
    created() {
      this.getTareas();
    },
    methods: {
      ...mapActions(['getTareas','eliminarTarea','buscador'])
    },
    computed: {
        ...mapState(['usuario','tareas','carga']),
        ...mapGetters(['arrayFiltrado'])
    },
    components: {
      PulseLoader
    }
}
</script>

