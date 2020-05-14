<template>
  <div class="shopcart">
    <div class="content" @click="showDetailClick">
      <div class="logo">
        <i class="iconfont icon-shopping_cart"></i>
      </div>
      <div class="center-part">
        <div class="price">￥{{getCarTotlePrice}}</div>
        <div class="desc">另需配送费￥4元 共 {{getAddCarCount}} 个</div>
      </div>
      <div class="pay-handle">
        <div class="pay not-enough" v-if="!getCarTotlePrice">￥20元起送</div>
        <div class="pay not-enough" v-else-if="getCarTotlePrice < 20">差￥{{leavePrice}}元起送</div>
        <div class="pay not-enough2 not-enough" v-else>结算</div>
      </div>
    </div>
    <transition name="move">
      <div class="shopcart-list" v-if="isShowTotleCar && addFoodList.length !== 0">
        <div class="list-header">
          <h3 class="title">购物车</h3>
          <span class="empty" @click="clearCart">清空</span>
        </div>
        <ul
          v-if="addFoodList.length !== 0"
          ref="scrollContent"
          :style="{height: currentHeight}"
          class="scroll-wraper"
        >
          <div>
            <li v-for="(item, index) in addFoodList" :key="index">
              <span>{{item.name}}</span>
              <span class="cart-price-food">￥{{item.price}}</span>
              <cart-control :food="item" class="cart-control-bar"></cart-control>
            </li>
          </div>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import BScroll from 'better-scroll'
import CartControl from '../../../components/common/CartControl/CartControl'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      isShowTotleCar: false
    }
  },
  components: {
    CartControl
  },
  methods: {
    showDetailClick() {
      this.isShowTotleCar = !this.isShowTotleCar
      if (this.isShowTotleCar) {
        // 状态改变了界面不一定会更新
        this.$nextTick(() => {
          const scroll = new BScroll(this.$refs.scrollContent, {
            click: true
          })
          scroll && scroll.refresh()
        })
      }
    },
    // 清空购物车
    clearCart() {
      MessageBox.confirm('确认清除购物车?').then(
        _ => {
          this.$store.dispatch('clearCart')
        },
        _ => {}
      )
    }
  },
  computed: {
    ...mapState(['addFoodList']),
    leavePrice() {
      return 20 - this.getCarTotlePrice
    },
    currentHeight() {
      console.log(this.addFoodList.length * 45)
      return this.addFoodList.length * 45 + 'px'
    },
    ...mapGetters(['getAddCarCount', 'getCarTotlePrice'])
  }
}
</script>

<style scoped>
.not-enough2 {
  background-color: rgba(144, 214, 39, 0.774);
  min-width: 100px;
  text-align: center;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list-header {
  display: flex;
  justify-content: space-around;
  color: black;
  align-items: center;
}
.cart-control-bar {
  position: absolute;
  right: 0px;
  color: #f01414;
}
.cart-price-food {
  position: absolute;
  right: 100px;
  color: #f01414;
}
.shopcart-list > ul {
  background-color: rgb(255, 255, 255);
}
.shopcart-list > ul li {
  line-height: 40px;
  display: flex;
  padding: 4px 20px;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  color: rgb(85, 82, 77);
}

/* Vue动画 */
/* 进入瞬间， */
/* 动画开始的位置是向下100% */
.move-enter {
  transform: translateY(100%);
  opacity: 0;
}
/* 离开瞬间 */
/* 向上100%逐渐消失 */
.move-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* 动画过程控制 */
.move-leave-active,
.move-enter-active {
  transition: all 0.5s;
}
/* 开始离开瞬间，进入结束瞬间 */
.move-enter-to,
.move-leave {
  opacity: 1;
}
.shopcart-list {
  min-height: 30px;
  background: rgb(230, 230, 230);
  position: absolute;
  width: 100%;
  bottom: 49px;
}
.scroll-wraper {
  overflow: hidden;
  max-height: 280px;
}
.content {
  z-index: 999;
  position: absolute;
  display: flex;
  width: 100%;
}
.pay-handle {
  background: rgb(70, 70, 70);
  text-align: center;
  height: 49px;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.89);
}
.desc {
  margin-top: 8px;
  font-size: 10px;
}
.center-part {
  width: 59%;
}
.icon-shopping_cart {
  font-size: 30px;
  border-radius: 50%;
  position: relative;
  top: -6px;
  z-index: 999;
  color: rgb(43, 158, 43);
  background: black;
  padding: 10px;
}
.shopcart {
  position: absolute;
  z-index: 99;
  color: rgba(240, 240, 240, 0.795);
  bottom: 0;
  height: 49px;
  width: 100%;
  background: rgb(29, 29, 29);
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>