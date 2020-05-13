<template>
  <div class="about">
    <h1>This is an about Inicio</h1>
    <ul class="list-group">
      <li v-for="(tarea, index) of tareas" :key="index" >
        {{tarea.nombre}} {{tarea.id}}
        <router-link :to="{ name:'Editar', params: {id: tarea.id } }">
          <button>Editar</button>
        </router-link>
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
      ...mapActions(['getTareas'])
    },
    computed: {
      ...mapState(['tareas'])
    }
}
</script>