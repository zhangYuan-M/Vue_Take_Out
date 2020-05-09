<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view />

    <!-- 底部tabBar -->
    <!-- 路由元数据 -->
    <main-tab-bar v-show="$route.meta.isShowTabBar" />
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'
export default {
  name: 'App',
  components: { MainTabBar }
}
</script>

<style>
/* 全局样式 */
@import 'assets/css/base.css';
/* 阿里字体图标链接 */
@import url('http://at.alicdn.com/t/font_518606_6676bmcalnrhehfr.css');
</style>
