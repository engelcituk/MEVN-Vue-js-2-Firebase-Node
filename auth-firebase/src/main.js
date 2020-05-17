import '@babel/polyfill'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require('firebase/app')

require('firebase/auth')
 //require('firebase/database')
require('firebase/firestore')/*
require('firebase/messaging')
require('firebase/functions') */

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBW8oQFVE5x1KJJX4xBbfN7qfrcdk5-v1A",
  authDomain: "crud-vue-13645.firebaseapp.com",
  databaseURL: "https://crud-vue-13645.firebaseio.com",
  projectId: "crud-vue-13645",
  storageBucket: "crud-vue-13645.appspot.com",
  messagingSenderId: "930595877001",
  appId: "1:930595877001:web:ecb616b57acead5e9fd658"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}

firebase.auth().onAuthStateChanged( (user)=> {
  console.log(user);
  if(user){
    store.dispatch('detectarUsuario',{email: user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }

  Vue.config.productionTip = false

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})


