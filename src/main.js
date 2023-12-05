// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入组件和样式
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import * as echarts from 'echarts'
import './assets/echartsTheme/hgCharts.js'
import '@/assets/main.scss'


Vue.config.productionTip = false
Vue.use(RouterTab)
Vue.use(ElementUI);
Vue.prototype.$echar = echarts

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})