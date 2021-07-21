import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'

import { loading } from './modules/loading'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'application',
  storage: sessionStorage,
  reducer: state => ({
    authentication: state.authentication
  })
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    loading
  },
});
