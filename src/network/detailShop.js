import finalRequset from './index'
// 返回goods的接口
export function getGoodsData() {
	return finalRequset({
		url: '/goods',
		method: 'GET'
	})
}
// 返回ratings的接口
export function getRatingsData() {
	return finalRequset({
		url: '/ratings',
		method: 'GET'
	})
}
// 返回info的接口
export function getShopInfo() {
	return finalRequset({
		url: '/info',
		method: 'GET'
	})
}
