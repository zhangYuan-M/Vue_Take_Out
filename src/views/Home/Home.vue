<template>
  <div class="home">
    <!-- 顶部导航条 -->
    <home-nav-bar />

    <!-- 轮播图 -->
    <home-swiper></home-swiper>

    <!-- 首页附近商家 -->
    <home-near-shop></home-near-shop>
  </div>
</template>

<script>
import HomeNavBar from './childHome/HomeNavBar'
import HomeSwiper from './childHome/HomeSwiper'
import HomeNearShop from './childHome/HomeNearShop'
export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeNearShop
  }
}
</script>

<style scoped>
</style>