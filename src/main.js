import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入mock数据
import './mock/mockServer'

Vue.config.productionTip = false
import loading from './assets/images/imgs/loading.gif'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
	preLoad: 1.3,
	error: './static/error.png',
	loading,
	attempt: 1
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
