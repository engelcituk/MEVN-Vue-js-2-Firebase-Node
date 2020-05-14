import { mapActions } from 'vuex';
<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="crearUsuario({email:email, password:password1})">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="contraseña" v-model="password1">
            <input type="password" placeholder="confirmar contraseña" v-model="password2">
            <button type="submit">Crear usuario</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Registro',
    data(){
        return {
            email: '',
            password1:'',
            password2:''
        }
    },
    methods: {
        ...mapActions(['crearUsuario'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>
