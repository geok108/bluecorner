import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from "./views/Home.vue"
import PostDetails from "./views/PostDetails.vue"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { name: "PostDetails", path: '/:slug', component: PostDetails, props:true}
];
const router = new VueRouter({
  mode: 'hash',
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
