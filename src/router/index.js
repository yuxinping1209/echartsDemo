import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import monitor from '@/pages/monitor'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: home,
		redirect: '/monitor',
		children: [{
			path: '/monitor',
			name: 'monitor',
			component: monitor,
			meta: {
				title: '首页',
				tabClass: 'custom-tab'
			}
		}],
	}]
})