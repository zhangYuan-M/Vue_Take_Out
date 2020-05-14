<template>
  <div class="home-swiper">
    <swiper v-if="foodCategoryArr.length">
      <swiper-item v-for="(categorys, index) in foodCategoryArr" :key="index">
        <div class="swiper-slide">
          <a :href="item.link" class="link_to_food" v-for="(item,indey) in categorys" :key="indey">
            <div class="food_container">
              <img :src="'https://fuss10.elemecdn.com/' +item.image_url" />
            </div>
            <span>{{item.title}}</span>
          </a>
        </div>
      </swiper-item>
    </swiper>
    <img src="../../../assets/images/msite_back.svg" alt v-else />
    <p class="home-swiper-bottom"></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperItem } from '../../../components/common/swiper/index.js'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      // foodCategoryArr: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  computed: {
    ...mapState(['foodCategorys']),
    foodCategoryArr() {
      const { foodCategorys } = this
      const pageSize = 8
      const newArr = []
      let minArr = []
      foodCategorys.forEach((item, index) => {
        minArr.push(item)
        if (!((index + 1) % pageSize)) {
          newArr.push(minArr)
          minArr = []
        }
      })
      return newArr
    }
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