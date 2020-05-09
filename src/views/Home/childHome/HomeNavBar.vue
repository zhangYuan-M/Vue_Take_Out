<template>
  <div class="home">
    <!-- 顶部导航条 -->
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <i class="iconfont icon-sousuo"></i>
      </template>
      <template v-slot:center>
        <p class="center-text">硅谷外卖</p>
      </template>
      <template v-slot:right>
        <router-link class="login-box" to="/login" tag="a">
          <span>登录</span>|
          <span>注册</span>
        </router-link>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  name: 'HomeNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.nav-bar {
  background: var(--color-base);
}
/* 字体图标样式 */
.icon-sousuo {
  font-size: 27px;
  color: white;
}
.center-text {
  font-size: 23px;
  color: white;
  font-weight: 450;
}
/* 登录注册区域 */
.login-box {
  display: flex;
  font-size: 14px;
  color: whitesmoke;
}
</style>