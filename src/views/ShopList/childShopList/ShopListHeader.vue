.<template>
  <div class="shop-list-header">
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <i class="iconfont icon-arrow_left" @click="$router.back()"></i>
      </template>
      <template v-slot:center>
        <img :src="shopInfo.avatar" class="img_logo" />
      </template>
    </nav-bar>
    <div class="shop-intruduce">
      <div class="top">
        <span class="mini-tag3">品牌</span>
        <span class="content-name">{{shopInfo.name}}</span>
        <span class="mini-tag4">></span>
      </div>
      <div class="center">
        <span class="shop-message-detail">{{shopInfo.score}}</span>
        <span class="shop-message-detail">月售{{shopInfo.sellCount}}单</span>
        <span class="shop-message-detail">
          {{shopInfo.description}}
          <span>约 {{shopInfo.deliveryTime}}分钟</span>
        </span>
        <span class="shop-message-detail">距离{{shopInfo.distance}}</span>
      </div>
      <div class="bottom">
        <span class="mini-tag1">首单</span>
        <span
          class="activity-content ellipsis"
        >{{shopInfo.supports ? shopInfo.supports[0].content: ''}}</span>
        <span class="discounts-right">8个优惠</span>
      </div>
    </div>
    <nav-bar class="nav-bar2">
      <template v-slot:left>
        <span
          :class="{'active-nav': $route.path === '/shopList/ShopListOrder' }"
          @click="linkClick(1)"
        >点餐</span>
      </template>
      <template v-slot:center>
        <span
          :class="{'active-nav': $route.path === '/shopList/ShopListAssess'  }"
          @click="linkClick(2)"
        >评价</span>
      </template>
      <template v-slot:right>
        <span
          :class="{'active-nav': $route.path === '/shopList/ShopListInfo'}"
          @click="linkClick(3)"
        >商家</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  mounted() {
    this.getShopInfoData()
  },
  methods: {
    ...mapActions(['getShopInfoData']),
    linkClick(index) {
      if (index === 1) {
        if (this.$route.path === '/shopList/ShopListOrder') return
        this.$router.replace('/shopList/ShopListOrder')
      } else if (index === 2) {
        if (this.$route.path === '/shopList/ShopListAssess') return
        this.$router.replace('/shopList/ShopListAssess')
      } else {
        if (this.$route.path === '/shopList/ShopListInfo') return
        this.$router.replace('/shopList/ShopListInfo')
      }
    }
  },
  computed: {
    ...mapState(['shopInfo'])
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.img_logo {
  position: relative;
  transform: translateY(20%);
  height: 66px;
  width: 66px;
  margin: 0 auto;
}
.nav-bar {
  background-image: url(https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png);
  background-position: center;
  background-size: 100% auto;
}
.icon-arrow_left {
  font-size: 28px;
  color: white;
}
.shop-intruduce {
  margin: 34px 30px 0px 30px;
}
.content-name {
  font-weight: 700;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  display: inline-block;
  margin: 0 auto;
  min-width: 250px;
  line-height: 24px;
  height: 24px;
  text-align: center;
}
.top,
.center,
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.mini-tag3 {
  width: 90px;
  background: rgba(255, 217, 0, 0.849);
  border-radius: 4px;
  font-size: 13px;
  line-height: 20px;
  color: black;
  font-weight: bold;
  position: relative;
  right: -23px;
  text-align: center;
}
.mini-tag4 {
  width: 100px;
  position: relative;
  right: 40px;
  text-align: center;
}
.shop-message-detail {
  text-align: center;
  font-size: 13px;
}
.center {
  margin: 10px;
}
.activity-content {
  font-size: 12px;
  color: gray;
}
.mini-tag1 {
  padding: 0px 20px 0px;
  background: green;
  border-radius: 20px;
  color: white;
}
.discounts-right {
  font-size: 12px;
  color: rgb(83, 83, 83);
  border: 1px solid rgb(197, 197, 197);
  padding: 2px;
}
.nav-bar2 {
  padding: 0px 50px 0px;
  font-size: 15px;
  border-top: 1px solid rgb(252, 252, 252);
  border-bottom: 1px solid rgb(230, 230, 230);
}
.active-nav {
  bottom: 1px;
  width: 35px;
  height: 2px;
  padding-bottom: 9px;
  color: #02a774;
  border-bottom: 2px solid #02a774;
}
</style>