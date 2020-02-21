<template>
  <div class="fotos">
      <h1>Galeria de fotos</h1>
      <router-link :to="{name:'fotos', params:{id: foto}}"
        v-for="(foto, index) of fotosArreglo"  :key="index">
          <button class="btn btn-primary">foto {{foto}}</button>
      </router-link>
    <Foto/>

          <button class="btn btn-primary" @click="home">Home</button>
          <button class="btn btn-primary" @click="anterior">anterior</button>
          <button class="btn btn-primary" @click="siguiente">siguiente</button>


  </div>
</template>


<script>
import Foto from '@/components/Fotografia.vue'
export default {
    components:{
        Foto
    },
    data() {
        return {
            fotosArreglo : [1,2,3,4,5,6,7,8]
        }
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        anterior() {
            this.$router.go(-1)
        },
        siguiente() {
            this.$router.go(+1)
        }
    }
}
</script>