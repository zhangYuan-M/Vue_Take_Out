<template>
  <section>
    <i class="iconfont icon-jiantou2" @click="iconClick"></i>
    <div class="loginInner">
      <!-- 切换的选项卡标签 -->
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>

      <!-- 表单区域 -->
      <div class="login_content">
        <!-- 账号密码登录区域 -->
        <form v-if="!loginWay">
          <section class="form-box">
            <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
            <div class="password-box">
              <input
                type="password"
                maxlength="8"
                placeholder="密码"
                v-if="!showPwd"
                v-model="pwd"
                class="fooas"
              />
              <input type="text" maxlength="8" placeholder="密码" v-else v-model="pwd" class="fooas" />
              <label class="switch" @click="showPwd = !showPwd">
                <input type="checkbox" class="checke" />
              </label>
            </div>

            <section class="login_message">
              <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" />
              <img
                class="get_verification"
                src="http://localhost:4000/captcha"
                alt="captcha"
                ref="captcha"
                @click="imgClick"
              />
            </section>
          </section>
          <button class="login_submit" @click.prevent="submitClick(1)">登录</button>
        </form>
        <!-- 手机号登录表单区域 -->
        <form v-else>
          <div>
            <section class="form-box">
              <div class="form-phone">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="手机号"
                  v-model="phone"
                  class="input1 vaaaa"
                />
                <button
                  class="get-number"
                  :class="{right_phone: rightPhone}"
                  :disabled="!rightPhone"
                  @click.prevent="btnClick"
                >{{computeTime ? `已发送(${computeTime})秒` :'获取验证码'}}</button>
              </div>
              <input type="text" maxlength="11" placeholder="验证码" v-model="code" class="input1" />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;" style="color:green;">《用户服务协议》</a>
            </section>
          </div>
          <button class="login_submit" @click.prevent="submitClick(0)">注册</button>
        </form>

        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </section>
</template>

<script>
import { MessageBox } from 'mint-ui'
import {
  loginHandleByUserName,
  getMessageCode,
  LoginByPhone
} from '../../network/login'

export default {
  data() {
    return {
      loginWay: false, // true代表短信登陆, false代表密码
      computeTime: 0, // 计时的时间
      showPwd: false, // 是否显示密码
      phone: '', // 手机号
      code: '', // 短信验证码
      name: '', // 用户名
      pwd: '', // 密码
      captcha: '', // 图形验证码
      alertText: '', // 提示文本
      alertShow: false // 是否显示警告框
    }
  },

  methods: {
    // 返回的图标被点击
    iconClick() {
      this.$router.back()
    },
    // 点击获取验证码按钮
    async btnClick() {
      console.log('121')
      // 如果当前没有计时
      if (!this.computeTime) {
        // 启动倒计时
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            // 停止计时
            clearInterval(this.intervalId)
          }
        }, 1000)
      }
      // 发送短信验证码
      const res = await getMessageCode(this.phone)
      if (res.code === 1) {
        MessageBox('提示', res.msg)
        // 停止倒计时
        if (this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
        }
      }
    },
    // 提交表单
    async submitClick(flag) {
      // 密码登录
      const { name, captcha, phone, code, pwd } = this
      if (flag) {
        console.log('账号密码登录')
        if (!name) {
          // 账号不能为空
          return MessageBox('提示', '账号不能为空')
        } else if (!pwd) {
          //密码不能为空
          return MessageBox('提示', '密码不能为空')
        } else if (!captcha) {
          // 验证码不能为空
          return MessageBox('提示', '验证码不能为空')
        } else {
          // 发送账号登录请求
          const res1 = await loginHandleByUserName({
            name,
            pwd,
            captcha
          })
          console.log(res1)
          if (res1.code === 1) {
            // captcha = ''
            return MessageBox('错误提示', res1.msg)
          }
          return MessageBox('提示', res1.msg)
        }
      }
      // 手机号登录
      else {
        if (!phone) {
          // 手机号不能为空
          return MessageBox('提示', '手机号不能为空')
        } else if (!code) {
          // 验证码不能为空
          return MessageBox('提示', '验证码不能为空')
        } else {
          // 发送手机验证码登录请求
          const res1 = await LoginByPhone(phone, code)
          if (res1.code === 1) {
            // captcha = ''
            return MessageBox('提示', res1.msg)
          }
          return MessageBox('提示', res1.msg)
        }
      }
    },
    // 点击切换验证码
    imgClick(event) {
      // event.target.src = 'http://localhost:4000/captcha?time=' + Date.now
      // 每次的src值不一样
      this.$refs.captcha.src =
        'http://localhost:4000/captcha?time=' + Date.now()
    }
  },

  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone)
    }
  },

  components: {}
}
</script>

<style scoped>
/* 大盒子的布局 */
.loginInner {
  margin: 0 auto;
  width: 75%;
  margin-top: 50px;
}
.iconfont {
  font-size: 30px;
  color: #999;
}
/* 内容头部盒子 */
.login_header_title {
  font-size: 14px;
  text-align: center;
  padding: 0px 30px 10px 30px;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
}
/* 选项卡选中的样式变绿色 */
.on {
  font-size: 15px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
  border-bottom: 1px solid #02a774;
}
/* 内容中的表单input区域 */
.form-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.form-box > input,
.form-box > div > input {
  padding-left: 14px;
  font: 400 14px Arial;
  width: 100%;
  margin-bottom: 15px;
  height: 50px;
  border: 1px solid rgb(228, 228, 228);
}
.login_message {
  display: flex;
}
.login_message > input {
  padding-left: 14px;
  font: 400 14px Arial;
  width: 100%;
  border: 1px solid rgb(228, 228, 228);
  border-right: 0;
}
.get_verification {
  position: relative;
  border: 1px solid rgb(228, 228, 228);
  border-left: 0;
  z-index: 9;
}

.login_submit {
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}
.about_us {
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

.form-phone {
  width: 100%;
  display: flex;
}
.vaaaa {
  border-right: 0 !important;
}
.get-number {
  width: 36%;
  font-size: 13px;
  color: rgb(170, 170, 170);
  border: 1px solid rgb(216, 216, 216);
  border-left: 0;
  background: white;
  margin-bottom: 15px;
}
.right_phone {
  color: black;
}
.password-box {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.fooas {
  border-right: 0 !important;
}
.switch {
  border: 1px solid rgb(230, 230, 230);
  border-left: none !important;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border-left: none;
}
/* 开关样式 */
.checke {
  position: relative;
  -webkit-appearance: none;
  width: 65px;
  height: 28px;
  line-height: 34px;
  background: #eee;
  border-radius: 30px;
  outline: none;
}
.checke:before {
  position: absolute;
  left: 0;
  content: '';
  width: 25px;
  height: 27px;
  border-radius: 50%;
  background: #eee;
  box-shadow: 0px 0px 5px #ddd;
  transition: all 0.2s linear;
}
.checke:checked {
  background: #14c50a;
}
.checke:checked:before {
  left: 39px;
  transition: all 0.2s linear;
}
</style>