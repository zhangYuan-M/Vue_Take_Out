<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in 4" :key="index">
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/1.jpg" />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/2.jpg" />
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/3.jpg" />
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/4.jpg" />
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/5.jpg" />
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/6.jpg" />
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/7.jpg" />
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../../../assets/images/nav/8.jpg" />
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
      </swiper-item>
    </swiper>
    <p class="home-swiper-bottom"></p>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index.js'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      num: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 200px;
  width: 100%;
}
.link_to_food {
  width: 25%;
  text-align: center;
  display: block;
  text-align: center;
  font-size: 13px;
  color: #666;
}

.link_to_food img {
  width: 50px;
  height: 50px;
}

/* 轮播图下面的一条分割线样式表 */
.home-swiper-bottom {
  background-color: var(--color-bottom);
  height: 12px;
  border-top: 1px solid rgb(241, 241, 241);
  border-bottom: 1px solid rgb(231, 231, 231);
}
</style>