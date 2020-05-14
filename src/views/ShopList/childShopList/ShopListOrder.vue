<template>
  <div class="shop-list-order">
    <scroll class="shop-list-scroll1">
      <div class="part-category">
        <ul class="category-ul" v-if="shopGoods.length">
          <li
            v-for="(item, index) in shopGoods"
            :key="index"
            :class="{'active-li': index === currentIndex}"
            @click="linkClickCate(index)"
          >
            <img :src="item.icon" v-if="item.icon" class="icon-tille" />
            {{item.name}}
          </li>
        </ul>
      </div>
    </scroll>

    <scroll
      class="shop-list-scroll"
      :probeType="2"
      @position="position"
      ref="scroll2"
      @scrollEnd="scrollEnd"
    >
      <div class="part-detail-food">
        <!-- 一个分组 -->
        <div class="food-category" v-for="(goods, index) in shopGoods" :key="index">
          <p class="food-title_">{{goods.name}}</p>
          <div
            class="foo-item"
            v-for="(item, indey) in goods.foods"
            :key="indey"
            @click="handleShowClick(item)"
          >
            <img :src="item.image" />
            <div class="food-intruduce">
              <span class="food-intruduce1">{{item.name}}</span>
              <span class="food-intruduce2">{{item.description}}</span>
              <span>
                <span class="food-intruduce2">月售{{item.sellCount}}份</span>
                <span class="food-intruduce2">好评率 {{item.rating}}%</span>
              </span>
              <span class="food-intruduce3">￥{{item.price}}</span>
            </div>
            <cart-control :food="item" class="aaaaa" />
          </div>
        </div>
      </div>
    </scroll>
    <show-food ref="showfoodRef" :food="currentFood" />
  </div>
</template>

<script>
import ShowFood from '../../../components/content/showFood/ShowFood'
import Scroll from '../../../components/common/scroll/Scroll'
import CartControl from '../../../components/common/CartControl/CartControl'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ShopListOrder',
  data() {
    return {
      currentFood: {},
      bscroll: null,
      scorllY: 0, // 当前高度
      tips: [] // 每个分类的高度
    }
  },
  components: {
    CartControl,
    ShowFood,
    Scroll
  },
  mounted() {
    this.getShopGoods()
    // this.$nextTick(() => {
    //   this.initTips()
    // })
    setTimeout(() => {
      this.initTips()
    }, 100)
  },
  methods: {
    ...mapActions(['getShopGoods']),
    // scroll 组件派发事件
    position({ x, y }) {
      this.scorllY = Math.abs(y)
    },
    scrollEnd({ x, y }) {
      this.scorllY = Math.abs(y)
    },

    //初始化tips
    initTips() {
      const divs = document.querySelectorAll('.food-title_')
      Array.prototype.slice.call(divs).forEach(item => {
        this.tips.push(item.offsetTop)
      })
    },
    // 分类点击
    linkClickCate(index) {
      this.$refs.scroll2.scrollTo(0, -this.tips[index], 300)
    },
    // 显示卡片
    handleShowClick(item) {
      this.currentFood = item
      this.$refs.showfoodRef.isShowFood = true
    }
  },
  computed: {
    ...mapState(['shopGoods']),
    // 计算当前滚动的标记
    currentIndex() {
      // Array.prototype.slice.call(this.tips).findIndex()
      const newArr = Array.prototype.slice.call(this.tips)
      if (newArr.length === 0) return
      newArr.push(100000)
      const index = newArr.findIndex((item, index) => {
        // console.log(item + '----')
        return item > this.scorllY
      })
      return index - 1
    }
  }
}
</script>

<style scoped>
.active-li {
  color: rgb(94, 201, 165) !important;
  background: white;
  border-bottom: 1px solid rgb(173, 173, 173) !important;
}
.shop-list-scroll1 {
  width: 20%;
  position: absolute;
  top: 199px;
  bottom: 49px;
  left: 0px;
  overflow: hidden;
}
.shop-list-scroll {
  width: 80%;
  position: absolute;
  top: 199px;
  bottom: 49px;
  right: 0px;
  overflow: hidden;
}
.shop-list-order {
  display: flex;
}
.part-category {
  background: rgb(240, 240, 240);
}

.category-ul > li {
  border-bottom: 1px solid rgb(255, 255, 255);
  font-size: 14px;
  color: rgb(66, 65, 65);
  height: 54px;
  line-height: 54px;
  padding: 0px 10px;
}
.foo-item > img {
  height: 60px;
  width: 60px;
  border-radius: 3px;
}
.category-ul > li {
  display: flex;
  align-items: center;
}
.foo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid gainsboro;
}
.food-title_ {
  background: rgba(231, 231, 231, 0.637);
  border-left: 2px solid rgb(170, 170, 170);
  padding: 3px;
  padding-left: 13px;
  font-size: 13px;
}
.icon-tille {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
}
.food-intruduce {
  width: 170px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}
.food-intruduce1 {
  font-size: 17px;
  color: rgb(82, 82, 82);
  font-weight: 600;
  margin-bottom: 7px;
}
.food-intruduce2 {
  font-size: 13px;
  color: rgba(88, 87, 87, 0.63);
  font-weight: 400;
}
.food-intruduce3 {
  margin-top: 6px;
  margin-right: 8px;
  font-size: 14px;
  color: #f01414;
}
</style>