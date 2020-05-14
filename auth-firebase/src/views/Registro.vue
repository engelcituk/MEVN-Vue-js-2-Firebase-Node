<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form >
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="contraseña" v-model="password1">
            <input type="password" placeholder="confirmar contraseña" v-model="password2">
            <button type="submit">Crear usuario</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Registro',
    data(){
        return {
            email: '',
            password1:'',
            password2:''
        }
    }
}
</script>
