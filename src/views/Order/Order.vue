<template>
  <div class="order">
    <!-- 顶部tabBar -->
    <nav-bar class="navbar-search">
      <template v-slot:center>
        <span class="search-title">订单列表</span>
      </template>
    </nav-bar>

    <!-- 没有登录的展示区域 -->
    <order-login />
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import OrderLogin from './childOrder/OrderLogin.vue'

export default {
  name: 'Order',
  components: {
    OrderLogin,
    NavBar
  }
}
</script>

<style scoped>
.navbar-search {
  background: var(--color-base);
}
.search-title {
  font-size: 21px;
  color: whitesmoke;
  font-weight: 500;
}
</style>