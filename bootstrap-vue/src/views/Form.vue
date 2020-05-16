<template>
    <div class="mt-5">
       <h1>Formularios</h1>
        <form>
            <b-row>
                <b-col md="6">
                    <b-form-input v-model="text" placeholder="Enter your name" :state="comprobar"></b-form-input>
                    <div class="mt-2">Value: {{ text }}</div>
                    <small>Mínimos 3 caracteres</small>
                </b-col>
            </b-row>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Form',
    data(){
        return  {text: ''}  
    },
    computed: {
        comprobar(){
            return this.text.length > 2 ? true : false;
        }
    }
}
</script>
