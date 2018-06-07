import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import config from '../config'

Vue.use(Vuex)

let state = {
  token: '',
  items: [],
  offline: false,
  isLoading: false,
  config: JSON.parse(JSON.stringify(config)),
  errors: [],
  tokenInfo: {}
}

const store = new Vuex.Store(
  {
    state,
    actions,
    mutations
  }
)

export default store
