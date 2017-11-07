// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import {sync} from 'vuex-router-sync'
// import Routers from './router.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed' // youtube embed framework
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
// Vue.use(VueYouTubeEmbed, { global: false }) // if not global
Vue.component('panel', Panel)

sync(store, router)
// Vue.use(iView)

// const RouterConfig = {
//   routes: Routers
// }
// const router = new VueRouter(RouterConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
