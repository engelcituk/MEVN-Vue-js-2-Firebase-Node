import Vue from 'vue'
import Vuex from 'vuex'

var firebase = require('firebase/app')
import router from '../router'
import { db } from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error:'',
    tareas: [],
    tarea:{nombre:'',id:''}
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload;
    },
    setError(state, payload){
      state.error = payload;
    },
    setTareas(state, payload){
      state.tareas = payload;
    },
    setTarea(state, payload){
      state.tarea = payload;
    },
    setEliminarTarea(state,payload){
      const tareasFiltradas = state.tareas.filter(item => item.id !== payload)
      state.tareas = tareasFiltradas
    }
  },
  actions: {
    crearUsuario({commit},payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then( res => {
          commit('setUsuario',{email: res.user.email, uid: res.user.uid})
          db.collection(res.user.email).add({
            nombre : 'Tarea de ejemplo'
          })
          .then( () => {
            router.push({name:'Inicio'})
          })

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
    },
    detectarUsuario({commit},payload){
      if(payload != null){
        commit('setUsuario',{email: payload.email, uid: payload.uid })
      }else{
        commit('setUsuario',null)
      }
    },
    cerrarSesion({commit}){
      firebase.auth().signOut()
      commit('setUsuario',null)
      router.push({name:'Ingreso'})

    },
    getTareas({commit}){
      const usuario = firebase.auth().currentUser
      const tareas = [];
      db.collection(usuario.email).get()
      .then(res => {
        res.forEach(doc => {
          let tarea = doc.data();
          tarea.id = doc.id;
          tareas.push(tarea);
        })
      }) 
      commit('setTareas',tareas)
    },
    getTarea({commit},idTarea){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(idTarea).get().
      then( doc => {
        console.log(doc.id);
        console.log(doc.data());
        let tarea = doc.data()
        tarea.id = doc.id
        commit('setTarea', tarea)
      })
    },
    editarTarea({commit}, tarea){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre
      }).
      then( ()=> {
        router.push('/')
      })
    },
    agregarTarea({commit},nombreTarea){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).add({
        nombre: nombreTarea
      }).
      then( doc => {
        router.push('/')
      })
    },
    eliminarTarea({commit, dispatch},idTarea){
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(idTarea).delete()
       .then( ()=> {
          //dispatch('getTareas')
          commit('setEliminarTarea',idTarea)
       })
    }
  },
  getters:{
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined){
        return false
      }else{
        return true
      }
    }
  },
  modules: {
  }
})
