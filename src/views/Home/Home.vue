<template>
  <div class="home">
    <!-- 顶部导航条 -->
    <home-nav-bar />

    <scroll class="home-scroll">
      <div>
        <!-- 轮播图 -->
        <home-swiper></home-swiper>

        <!-- 首页附近商家 -->
        <home-near-shop></home-near-shop>
      </div>
    </scroll>
  </div>
</template>

<script>
import {
  getLocalPosition,
  getFoodCategory,
  getShopListByPosition
} from '../../network/home.js'
import Scroll from '../../components/common/scroll/Scroll'
import HomeNavBar from './childHome/HomeNavBar'
import HomeSwiper from './childHome/HomeSwiper'
import HomeNearShop from './childHome/HomeNearShop'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeNearShop,
    Scroll
  },
  async mounted() {
    const res = await getFoodCategory()
    // console.log(res)
    this.$store.dispatch('getPositions')
    this.$store.dispatch('getFoodCatrgorys')
    this.$store.dispatch('getShopList')
  }
}
</script>

<style scoped>
.home-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>