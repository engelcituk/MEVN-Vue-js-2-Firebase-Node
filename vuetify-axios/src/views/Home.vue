<template>
  <div>
      <v-layout :wrap="true">
        <v-flex xs12>
          <v-card>
            <v-date-picker v-model="fecha"
              full-width
              locale="es-mx"
              :min="minimo"
              :max="maximo"

            ></v-date-picker>
          </v-card>
          <v-card colo="error" dark>
            <v-card-text class="display-1 text-center">
              {{valor}} - {{fecha}} 
            </v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      fecha:'',
      minimo: '1984',
      maximo: new Date().toISOString().substr(0,10),
      valor: null
    }
  },
  methods: {
    async getDolar(dia){
      let datos = await axios.get(`https://mindicador.cl/api/dolar/${dia}`)
      console.log(datos.data.serie[0].valor)
      this.valor = await datos.data.serie[0].valor
    }
  },
  created(){
    this.getDolar('01-02-2019')
  }
 
}
</script>
