.<template>
  <div class="shop-list-assess" ref="shopAssessRef">
    <div class="content">
      <!-- 头部评分组件 -->
      <shop-list-assess-score></shop-list-assess-score>

      <!-- 评论的内容 -->
      <shop-list-assess-common />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ShopListAssessScore from './childShopAssess/ShopListAssessScore'
import ShopListAssessCommon from './childShopAssess/ShopListAssessCommon'

export default {
  mounted() {
    setTimeout(() => {
      new BScroll(this.$refs.shopAssessRef, {
        click: true
      })
    }, 300)
  },
  components: {
    ShopListAssessScore,
    ShopListAssessCommon
  }
}
</script>

<style scoped>
.shop-list-assess {
  z-index: 9999;
  background: white;
  position: relative;
  height: 550px;
  bottom: 10px;
  overflow: hidden;
}
/* .content {
  height: 100%;
} */
</style>