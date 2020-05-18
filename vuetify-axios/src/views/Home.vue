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
              650 - {{fecha}} 
            </v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      fecha:'',
      minimo: '1984',
      maximo: new Date().toISOString().substr(0,10)
    }
  }
 
}
</script>
