<template>
  <div class="about">
    <h1>This is an about Inicio</h1>
    <ul class="list-group">
      <li v-for="(tarea, index) of tareas" :key="index" >{{tarea.nombre}} {{tarea.id}}</li>      
    </ul>
  </div>
</template>

<script>  

import {mapActions, mapState} from 'vuex'
export default {
  name: 'Inicio',
  methods: {
    ...mapActions(['getTareas'])
  },
  created() {
    this.getTareas();
  },
  computed: {
    ...mapState(['tareas'])
  },
}
</script>