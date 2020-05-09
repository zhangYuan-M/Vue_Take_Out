<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive">
      <slot name="icon"></slot>
    </div>
    <div class="item-active-icon" v-show="isActive">
      <slot name="active-icon"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    // 每个item绑定的链接
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    // 只有当前路由和每个item绑定的路由有关系才会激活
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    // 激活时的样式
    activeStyle() {
      return this.isActive ? { color: 'green' } : {}
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.link) {
        this.$router.replace(this.link)
      }
    }
  }
}
</script>

<style scoped>
/* flex布局保证每一个大小一致 */
#tab-bar-item {
  flex: 1;
}
/* 激活时候的颜色 */
.item-active-icon {
  color: green;
}

/* 强制图标的大小 */
.item-icon img,
.item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

/* 图标下面的文字样式 */
.item-text {
  font-size: 12px;
  margin-top: 4px;
  color: #333;
}
</style>