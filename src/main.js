// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// check for pfornt SERVER
window._SERVER = SERVER
if (PROD && SERVER) {
  if (window.location.host.indexOf('localhost') !== -1) {
    window._SERVER = ''
  }
}

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueClipboard from 'vue-clipboard2'
let store = require('./store/index').default

Vue.use(VueClipboard)

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'mdi/css/materialdesignicons.min.css'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  store,
  render: h => h(require('./App').default)
})
