import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from "./store";
import './icons' //引入第三方图标


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {App},
  router,
  store,
  render: h => h(App)
})
