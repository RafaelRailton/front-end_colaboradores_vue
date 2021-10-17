import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import bulma from '../node_modules/bulma/css/bulma.css'
import VueTheMask from 'vue-the-mask'
Vue.config.productionTip = false

new Vue({
  VueTheMask,
  bulma,
  vuetify,
  router,
  
  render: h => h(App)
}).$mount('#app')
