import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import { Common, Mobile } from 'vue-superset'
import AxiosConfig from '../axios.config'
import 'vant/lib/index.css'
import './assets/css/vant.cover.css'

// 全局组件导入
import HelloWorld from './components/HelloWorld'

// 全局组件注册
Vue.component('HelloWorld', HelloWorld)

Vue.use(Vant)
Vue.use(AxiosConfig)
Vue.use(Common)
Vue.use(Mobile)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
