<template>
  <div class="about">
    <h1>Inicio</h1>
    <router-link to='/agregar'>
      <button>Agregar tarea</button>
    </router-link>
    <ul class="list-group">
      <li v-for="(tarea, index) of tareas" :key="index" >
        {{tarea.nombre}} {{tarea.id}}
        <router-link :to="{ name:'Editar', params: {id: tarea.id } }">
          <button>Editar</button>
        </router-link>
          <button @click="eliminarTarea(tarea.id)">Eliminar</button>
      </li>      
    </ul>
  </div>
</template>

<script>  

import {mapActions, mapState} from 'vuex'
export default {
  name: 'Inicio',
    created() {
      this.getTareas();
    },
    methods: {
      ...mapActions(['getTareas','eliminarTarea'])
    },
    computed: {
      ...mapState(['tareas'])
    }
}
</script>