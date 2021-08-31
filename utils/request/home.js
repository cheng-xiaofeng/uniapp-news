export function getHomeNewsList({params}) {
	return uni.request({
		url: 'https://unidemo.dcloud.net.cn/api/news',
		method: 'GET',
		data: {},
		params,
	});
}