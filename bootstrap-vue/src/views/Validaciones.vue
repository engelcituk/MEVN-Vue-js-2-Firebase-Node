<template>
    <div class="mt-5">
        <h1>Vuelidate</h1>
        <form @submit.prevent="submit">
            <input type="email" placeholder="Ingrese su email" class="form-control my-3"
            v-model="$v.email.$model"
            :class="{'is-invalid': $v.email.$error}"
            >
            <p class="text-danger" v-if="!$v.email.email">Este email es incorrecto</p>
            <p class="text-danger" v-if="!$v.email.required">Campo requerido</p>

            <!-- <p>{{$v.email}}</p> -->
            <input type="password" placeholder="Ingresa contraseña" class="form-control my-3"
            v-model="$v.password.$model"
            :class="{'is-invalid': $v.password.$error}"
            >
            <p class="text-danger" v-if="!$v.password.minLength">Mínimo 6 caracteres</p>
           <!--   <p>{{$v.password}}</p>  -->


            <input type="password" placeholder="Repite la contraseña" class="form-control my-3"
            v-model="$v.repeatPassword.$model"
            :class="{'is-invalid': $v.repeatPassword.$error}"
            >
            <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">Contraseñas no coinciden</p>
            <!-- 
             <p>{{$v.repeatPassword}}</p>  -->
             <b-button variant="primary" type="submit" :disabled="$v.$invalid">Enviar</b-button>
             <p>{{$v.$invalid}}</p>

        </form>
    </div>
</template>

<script>
import { required, email, sameAs, minLength} from 'vuelidate/lib/validators'
export default {
    name: 'Validaciobes',
    data(){
        return {
            email:'',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        email: { required, email },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
  },
  methods: {
       submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
         console.log('se produjo un error!')        
      } else {
         console.log('Todos los campos correctos!')   
         console.log('Enviando información'+ this.$v.email.$model+' '+ this.$v.password.$model)        

      }
    }
  }
}
</script>
