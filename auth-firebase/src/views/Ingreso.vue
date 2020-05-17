<template>
    <div>
        <h1>Ingreso de usuario</h1>
        <form @submit.prevent="ingreseUsuario({email:$v.email.$model, password:$v.password.$model})">
            <input class="form-control my-2" type="email" placeholder="email" v-model="$v.email.$model">
            <small class="text-danger d-block" v-if="!$v.email.required">Campo requerido</small>
            <small class="text-danger d-block" v-if="!$v.email.email">Email no válido</small>


            <input class="form-control my-2" type="password" placeholder="contraseña" v-model="$v.password.$model">
            <small class="text-danger d-block" v-if="!$v.password.required">Campo requerido</small>
            <small class="text-danger d-block" v-if="!$v.password.minLength">Minimo 6 caracteres</small>


            <button type="submit" class="btn btn-info" :disabled="!$v.invalid"> Ingresar </button>
        </form>
        <p>{{error}}</p>
        <p>{{$v.email}}</p>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import { required, email, minLength} from 'vuelidate/lib/validators';

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
    },
    validations:{
        email:{email, required},
        password: {required, minLength: minLength(6)}
    }
}
</script>

