import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 路由懒加载模块
 */
const Home = () => import('../views/Home/Home.vue')
const Profile = () => import('../views/Profile/Profile.vue')
const Search = () => import('../views/Search/Search.vue')
const Order = () => import('../views/Order/Order.vue')
const Login = () => import('../views/Login/Login.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			isShowTabBar: true
		}
	},
	{
		path: '/order',
		name: 'Order',
		component: Order,
		meta: {
			isShowTabBar: true
		}
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
		meta: {
			isShowTabBar: true
		}
	},
	{
		path: '/search',
		name: 'Search',
		component: Search,
		meta: {
			isShowTabBar: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = new VueRouter({
	routes
})

export default router
