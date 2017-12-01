import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      component: load('Index'),
      children: [
        {
          path: 'token/:token/type/:type/id/:id',
          component: load('channels/Index')
        },
        {
          path: 'channels',
          component: load('channels/Index')
        },
        {
          path: 'channels/:id',
          component: load('channels/Index')
        },
        {
          path: 'devices',
          component: load('devices/Index')
        },
        {
          path: 'devices/:id',
          component: load('devices/Index')
        }
      ]
    },
    { path: '/login', component: load('Login') },
    { path: '/login/:token', component: load('Login') }
  ]
})