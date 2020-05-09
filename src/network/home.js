import finalRequest from './index'

// 1.获取经纬度信息
export function getLocalPosition() {
	return finalRequest({
		url: '/position/40.10038,116.36867',
		method: 'get'
	})
}

// 2、获取食品分类列表
export function getFoodCategory() {
	return finalRequest({
		url: '/index_category',
		method: 'get'
	})
}

// 3、根据经纬度获取商铺列表
export function getShopListByPosition(latitude, longitude) {
	return finalRequest({
		url: '/shops',
		method: 'get',
		params: {
			latitude,
			longitude
		}
	})
}
