import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { id: 1, nombre: "Manzana", cantidad: 0 },
      { id: 2, nombre: "Naranaja", cantidad: 0 },
      { id: 2, nombre: "Pera", cantidad: 0 }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
