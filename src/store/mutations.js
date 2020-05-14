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
import Vue from 'vue'
export default {
	[RECEIVE_POSITION](state, { data }) {
		state.address = data
	},
	[RECEIVE_FOOD_CATEGORYS](state, data) {
		state.foodCategorys = data
	},
	[RECEIVE_SHOP_LIST](state, data) {
		state.shops = data
	},
	[RECEIVE_SHOP_GOODS](state, data) {
		state.shopGoods = data
	},
	[RECEIVE_SHOP_RATINGS](state, data) {
		state.shopRating = data
	},
	[RECEIVE_SHOP_INFO](state, data) {
		state.shopInfo = data
	},
	[ADD_FOOD_COUNT](state, { food }) {
		if (!food.count) {
			// food.count = 1  界面没有响应式改变
			Vue.set(food, 'count', 1)
			// 向购物车添加数据
			state.addFoodList.push(food)
		} else {
			food.count++
		}
	},
	[DECREMENT_FOOD_COUNT](state, { food }) {
		if (food.count === 1) {
			const index = state.addFoodList.findIndex(item => item === food)
			state.addFoodList.splice(index, 1)
		}
		if (food.count === 0) return
		food.count--
	},
	[CLEAR_CART](state) {
		// 清除在shopGoods中的count数量
		state.shopGoods.forEach(food => {
			food.foods.map(item => {
				if (item.count) {
					item.count = 0
				}
			})
		})
		state.addFoodList = []
	},
	[GET_SEARCH_LIST](state, data) {
		state.searchList = data
	}
}
