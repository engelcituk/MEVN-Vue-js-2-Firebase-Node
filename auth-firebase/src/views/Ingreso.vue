<template>
    <div>
        <h1>Ingreso de usuario</h1>
        <form @submit.prevent="ingreseUsuario({email, password})">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="contraseña" v-model="password">
            <button type="submit" >Ingresar</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Ingreso',
    data(){
        return {
            email: '',
            password:''
        }
    },
    methods:{
        ...mapActions(['ingreseUsuario'])
    },
    computed: {
        ...mapState(['error'])
    }
}
</script>

