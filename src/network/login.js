import finalRequest from './index'

// 用户名密码登陆
export function loginHandleByUserName({ name, pwd, captcha }) {
	return finalRequest({
		url: '/api/login_pwd',
		method: 'POST',
		data: { name, pwd, captcha }
	})
}

// 发送短信验证码
export function getMessageCode(phone) {
	return finalRequest({
		url: '/api/sendcode',
		method: 'GET',
		params: {
			phone
		}
	})
}

// 手机号验证码登陆
export function LoginByPhone(phone, code) {
	return finalRequest({
		url: '/api/login_sms',
		method: 'Post',
		data: { phone, code }
	})
}
