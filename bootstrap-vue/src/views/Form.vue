<template>
    <div class="mt-5">
       <h1>Formularios</h1>
        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input v-model="text" placeholder="Enter your name" :state="comprobar"></b-form-input>
                    <div class="mt-2">Value: {{ text }}</div>
                    <small>Mínimos 3 caracteres</small>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="animales"></b-form-select>
                    
                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                </b-col>
                <b-col md="3">
                    <b-form-group label="Individual radios">
                        <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                        <div class="mt-3">Radio: <strong>{{ radio }}</strong></div>

                    </b-form-group>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
                        <div class="mt-3">Multiple: <strong>{{ check }}</strong></div>

                </b-col>
            </b-row>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Form',
    data(){
        return  {
            text: '',
            selected : null,
            radio: null,
            check:[],
            animales: [
                { value: null, text: 'Seleccione un animal' },
                { value: 'perro', text: 'Ladrador' },
                { value: 'gato', text: 'Maullador' },
                { value: 'leon', text: 'Rugidor' },

            ],
            animalesRadio : [
                { value: 'perro', text: 'Ladrador' },
                { value: 'gato', text: 'Maullador' },
                { value: 'leon', text: 'Rugidor' },
            ]
        }  
    },
    computed: {
        comprobar(){
            return this.text.length > 2 ? true : false;
        }
    }
}
</script>
