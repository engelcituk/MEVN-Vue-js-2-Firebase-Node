import Vue from 'vue'
import Vuex from 'vuex'

var firebase = require('firebase/app')
import router from '../router'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error:'',
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload;
    },
    setError(state, payload){
      state.error = payload;
    }
  },
  actions: {
    crearUsuario({commit},payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then( res => {
          commit('setUsuario',{email: res.user.email, uid: res.user.uid})
          router.push({name:'Inicio'})
        })
        .catch(err => {
          console.log(err.message);
          commit('setError',err.message)

        })
    },
    ingreseUsuario({commit},payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then( res => {
        commit('setUsuario',{email: res.user.email, uid: res.user.uid})
        router.push({name:'Inicio'})
      })
      .catch( err => {
        console.log(err.message);
        commit('setError',err.message)

      })
    }
  },
  modules: {
  }
})
