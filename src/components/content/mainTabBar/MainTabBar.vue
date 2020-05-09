<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item class="item" v-for="(item, index) in linkList" :key="index" :link="item.link">
        <template v-slot:icon>
          <i :class="item.className"></i>
        </template>
        <template v-slot:active-icon>
          <i :class="item.activeClassName"></i>
        </template>
        <template v-slot:text>{{item.text}}</template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  data() {
    return {
      linkList: [
        {
          className: 'iconfont icon-waimai',
          activeClassName: 'iconfont icon-waimai',
          text: '首页',
          link: '/home'
        },
        {
          className: 'iconfont icon-sousuo',
          activeClassName: 'iconfont icon-sousuo',
          text: '搜索',
          link: '/search'
        },
        {
          className: 'iconfont icon-dingdan',
          activeClassName: 'iconfont icon-dingdan',
          text: '订单',
          link: '/order'
        },
        {
          className: 'iconfont icon-geren',
          activeClassName: 'iconfont icon-geren',
          text: '个人',
          link: '/profile'
        }
      ]
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
i {
  font-size: 24px;
}
</style>