import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './index.css' // CSS file
import Notifications from "vue-notification";

Vue.use(Notifications);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
