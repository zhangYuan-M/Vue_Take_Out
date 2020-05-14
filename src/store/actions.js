import {
	RECEIVE_POSITION,
	RECEIVE_FOOD_CATEGORYS,
	RECEIVE_SHOP_LIST,
	RECEIVE_SHOP_GOODS,
	RECEIVE_SHOP_RATINGS,
	RECEIVE_SHOP_INFO,
	ADD_FOOD_COUNT,
	DECREMENT_FOOD_COUNT,
	CLEAR_CART,
	GET_SEARCH_LIST
} from './mutation-type'
import { getLocalPosition, getFoodCategory, getShopListByPosition } from '../network/home.js'
import { getGoodsData, getRatingsData, getShopInfo } from '../network/detailShop'
import { getShopListByKeyword } from '../network/search'

export default {
	// 1.添加位置信息
	async getPositions({ commit }) {
		const res = await getLocalPosition()
		if (res.code === 0) {
			const data = res.data
			commit(RECEIVE_POSITION, { data })
		}
	},
	// 2. 添加食品分类数组
	async getFoodCatrgorys({ commit }) {
		const res = await getFoodCategory()
		if (res.code === 0) {
			const data = res.data
			commit(RECEIVE_FOOD_CATEGORYS, data)
		}
	},
	//3. 添加商家列数组
	async getShopList({ commit, state }) {
		const res = await getShopListByPosition(state.latitude, state.longitude)
		if (res.code === 0) {
			const data = res.data
			commit(RECEIVE_SHOP_LIST, data)
		}
	},

	// 1. 返回Shop_goods的接口
	async getShopGoods({ commit }, callback) {
		const res = await getGoodsData()
		if (res.code === 0) {
			const data = res.data
			commit(RECEIVE_SHOP_GOODS, data)
			callback && callback()
		}
	},
	// 2.返回Shop_ratings的接口
	async getShopRatinds({ commit }) {
		const res = await getRatingsData()
		if (res.code === 0) {
			const data = res.data
			commit(RECEIVE_SHOP_RATINGS, data)
		}
	},
	// 2.返回Shop_info的接口
	async getShopInfoData({ commit }) {
		const res = await getShopInfo()
		if (res.code === 0) {
			const data = res.data
			commit(RECEIVE_SHOP_INFO, data)
		}
	},

	// 1.更新food中的count数量
	foodCountHandle({ commit }, { food, isAdd }) {
		if (isAdd) {
			commit(ADD_FOOD_COUNT, { food })
		} else {
			commit(DECREMENT_FOOD_COUNT, { food })
		}
	},

	// 清除购物车
	clearCart({ commit }) {
		commit(CLEAR_CART)
	},

	// 获取搜索列表
	async getSearchList({ commit, state }, { keyword }) {
		const res = await getShopListByKeyword({
			keyword,
			geohash: state.latitude + ',' + state.longitude
		})
		if (res.code === 0) {
			commit(GET_SEARCH_LIST, res.data)
		}
	}
}
