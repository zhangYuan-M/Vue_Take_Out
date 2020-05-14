import finalReuquest from './index'

// 根据关键字搜索店铺数据
export function getShopListByKeyword({ keyword, geohash }) {
	return finalReuquest({
		url: '/api/search_shops',
		method: 'get',
		params: {
			keyword,
			geohash
		}
	})
}
