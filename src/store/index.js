import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 导入根级别数据的模块
 */
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
	/* Home首页的数据 */
	latitude: 40.0, //经度
	longitude: 116.121, // 维度
	address: {}, //地址信息
	foodCategorys: [], //食品分类数组
	shops: [], //商家列表的数组
	/* 每个商家的详细数据 */
	shopGoods: [], // 每个商家店铺数据
	shopRating: [], // 商家评价
	shopInfo: {}, //商家的描述信息
	addFoodList: [], // 添加到购物车的数据
	searchList: []
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {}
})
