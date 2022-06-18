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
    dashInscId: null,
    newOffre: {},
    newLot: {},
    myInsc: {},
    newSoum: {}
  },
  mutations: {
    setUser: (state, payload) => state.user = payload, 
    setMyInsc: (state, payload) => state.myInsc = payload,
    setInscDocuments: (state, payload) => state.inscDocuments = payload,
    setDashInscId: (state, payload) => state.dashInscId = payload,
    setNewOffre: (state, payload) => state.newOffre = payload,
    setNewLot: (state, payload) => state.newLot = payload,
    setNewSoum: (state, payload) => state.newSoum = payload
  },
  actions: {
    
  },
  getters: {
    user: state => state.user,
    myInsc: state => state.myInsc,
    inscDocuments: state => state.inscDocuments,
    dashInscId: state => state.dashInscId,
    newOffre: state => state.newOffre,
    newLot: state => state.newLot,
    newSoum: state => state.newSoum
  }
})