export default {
	// 获取购物车的食品数量
	getAddCarCount(state) {
		console.log(123)
		// shopGoods 的里面 是监听不到
		// return state.shopGoods.reduce((prePrice, food) => {
		// 	return prePrice + food.count && food.count
		// }, 0)
		// 这里才能监听到
		return state.addFoodList.reduce((preCount, food) => {
			return preCount + food.count
		}, 0)
	},
	// 获取购物车的价格
	getCarTotlePrice(state) {
		return state.addFoodList.reduce((prePrice, food) => {
			return prePrice + food.count * food.price
		}, 0)
	},

	// 计算评论的数据
	getShopRating(state) {}
}
