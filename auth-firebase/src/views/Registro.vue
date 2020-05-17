
<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="crearUsuario({email:email, password:password1})">
            <input class="form-control my-3"
                 type="email"
                 placeholder="email"
                 v-model="$v.email.$model"
                >
            <small class="text-danger d-block" v-if="!$v.email.required">Campo requerido</small>            
            <small class="text-danger d-block" v-if="!$v.email.email">Email no válido</small>
            
            <input class="form-control my-3"
                type="password"
                placeholder="contraseña"
                v-model="$v.password1.$model"
                >
            <small class="text-danger d-block" v-if="!$v.password1.minLength">Minimo 6 caracteres</small>            


            <input class="form-control my-3"
                type="password"
                placeholder="confirmar contraseña"
                v-model="password2"
            >
            <small class="text-danger d-block" v-if="!$v.password2.sameAs">Contraseñas no coinciden</small>            

            <button class="btn btn-info" type="submit" :disabled="!desactivar">Crear usuario</button>
        </form>
        <p>{{error}}</p>
        <p v-if="error === 'auth/email-already-in-use' ">Email ya registrado</p>
                            
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, email, minLength, sameAs} from 'vuelidate/lib/validators';

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
        ...mapState(['error']),
        desactivar(){
            return this.password1 === this.password2 && this.password1;
        }
    },
    validations:{
        email:{email, required},
        password1: {minLength: minLength(6)},
        password2:{
            sameAs: sameAs('password1')
        }
    }
}
</script>
