.<template>
  <div class="home-near-list">
    <!-- 附近商家标题 -->
    <div class="home-near-title">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>

    <!-- 商家列表 -->
    <single-row v-if="shops.length">
      <div @click="shopItemClick">
        <single-row-item v-for="(item, index) in shops" :key="index">
          <!-- <router-link to="/shopList" tag="a"> -->
          <template v-slot:left>
            <div class="shop_left">
              <img class="shop_img" v-lazy="imgRandomURl" />
            </div>
          </template>
          <template v-slot:center>
            <section class="shop_center">
              <h4 class="shop_title ellipsis">
                <span>品牌</span>
                {{item.name }}
              </h4>
              <div class="star star-24">
                <star :score="item.rating" />
                <div class="rating_section">{{item.rating}}</div>
                <div class="order_section">月售{{item.recent_order_num}}单</div>
              </div>

              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>{{item.piecewise_agent_fee.tips}}</span>
              </p>
            </section>
          </template>
          <template v-slot:right>
            <section class="shop_right">
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
              <span class="delivery_style delivery_right">{{item.delivery_mode.text}}</span>
            </section>
          </template>
          <!-- </router-link> -->
        </single-row-item>
      </div>
    </single-row>

    <!-- 加载中的图片 -->
    <img src="../../../assets/images/msite_back.svg" alt v-else v-for="item in 7" :key="item" />
  </div>
</template>

<script>
import SingleRow from '../../../components/common/singleRow/singleRow.vue'
import SingleRowItem from '../../../components/common/singleRow/singleRowItem.vue'
import Star from '../../../components/content/start/Star'

import { mapState } from 'vuex'

export default {
  name: 'HomeNearShop',
  data() {
    return {
      imgRandomURl:
        'https://uploadbeta.com/api/pictures/random?tiem=' + Date.now()
    }
  },
  components: {
    SingleRow,
    SingleRowItem,
    Star
  },
  methods: {
    shopItemClick() {
      console.log(123)
      this.$router.push('/shopList')
    }
  },
  computed: {
    ...mapState(['shops'])
  }
}
</script>

<style scoped>
/* 附近商家标题 */
.home-near-title {
  margin: 9px;
  font-size: 15px;
}
.shop_header_title {
  margin-left: 10px;
}
/* 商家列表样式表 */
.shop_left {
  height: 100%;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shop_img {
  height: 80%;
  width: 96%;
}
/* 2，中间 */
.shop_center {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}
.shop_title > span {
  font-size: 11px;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 3px;
  margin-right: 5px;
}

.shop_center h4 {
  width: 140px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  /* 超出的元素 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.star {
  display: flex;
}
.rating_section {
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}
.order_section {
  margin-left: 10px;
  font-size: 10px;
  color: #666;
}
.shop_delivery_msg {
  display: flex;
  font-size: 10px;
  color: #666;
}
/* 3.右边 */
.shop_detail_ul {
  display: flex;
  width: 40%;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
  text-decoration: none;
  list-style: none;
}
.delivery_right {
  color: #02a774;
  border: 1px solid #02a774;
  font-size: 10px;
  width: 88%;
  text-align: center;
}
.shop_right {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 70%;
}
</style>