import Vue from "vue"
import axios from "axios"

import "./assets/tailwind.css"

import App from "./App.vue"
import router from "./router"
import store from "./store"

if (process.env.NODE_ENV === "development") {
  Vue.config.backend_base_url = "http://localhost:6543"
  //Vue.config.backend_base_url = "http://localhost:8000"
} else {
  Vue.config.productionTip = false
  Vue.config.backend_base_url = "http://saas.onna.com"
}

axios.defaults.baseURL = Vue.config.backend_base_url

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
