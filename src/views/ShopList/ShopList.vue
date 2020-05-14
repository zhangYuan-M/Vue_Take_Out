.<template>
  <div class="shop-list">
    <!-- 头部 -->
    <shop-list-header></shop-list-header>
    <!-- 路由占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部 -->
    <shop-list-bottom-bar v-if="$route.meta.isShowCart" />
  </div>
</template>

<script>
import ShopListBottomBar from './childShopList/ShopListBottomBar'
import Scroll from '../../components/common/scroll/Scroll'
import ShopListHeader from './childShopList/ShopListHeader'
import { getGoodsData } from '../../network/detailShop'

export default {
  components: {
    ShopListHeader,
    ShopListBottomBar,
    Scroll
  }
}
</script>

<style scoped>
</style>