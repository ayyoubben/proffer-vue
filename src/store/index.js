import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    user: null,
    inscDocuments: [],
  },
  mutations: {
    setUser: (state, payload) => state.user = payload, 
    setInsc: (state, payload) => state.insc = payload,
    setInscNom: (state, payload) => state.inscNom = payload,
    setInscType: (state, payload) => state.inscType = payload,
    setInscDocuments: (state, payload) => state.inscDocuments = payload
  },
  actions: {
    
  },
  getters: {
    user: state => state.user,
    insc: state => state.insc,
    inscNom: state => state.inscNom,
    inscType: state => state.inscType,
    inscDocuments: state => state.inscDocuments
  }
})