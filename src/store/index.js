import Vue from "vue"
import Vuex from "vuex"

import API from "@/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    schema: {},
    schema_str: null,
  },

  mutations: {
    SET_LOADING(state, loading) {
      state.isLoading = loading
    },
    SET_SCHEMA(state, schema) {
      state.schema = schema
      state.schema_str = JSON.stringify(schema, undefined, 4)
    },
  },

  actions: {
    async LOAD_SCHEMA({ commit }) {
      commit("SET_LOADING", true)
      const schema = await API.step()
      commit("SET_SCHEMA", schema)
      commit("SET_LOADING", false)
    },
  },

  modules: {},
})
