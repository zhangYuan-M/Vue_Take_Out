<template>
  <div class="food" @click="clickHandle(1)" v-if="isShowFood">
    <div class="food-content" @click.stop="clickHandle(2)">
      <div class="image-header">
        <img
          src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
        />
        <p class="foodpanel-desc">{{food.info}}</p>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  data() {
    return {
      isShowFood: false
    }
  },
  methods: {
    clickHandle(index) {
      if (index === 1) {
        this.isShowFood = false
      }
    }
  }
}
</script>

<style scoped>
.content {
  font-size: 12px;
  padding-left: 20px;
}
.food {
  height: 100%;
  width: 100%;
  top: 0;
  background: rgba(22, 22, 22, 0.486);
  position: absolute;
  z-index: 99;
}
.food-content {
  height: 66%;
  width: 340px;
  margin: 90px auto;

  background: white;
}
.image-header > img {
  height: 350px;
  width: 100%;
}
.foodpanel-desc {
  position: relative;
  bottom: 30px;
  color: white;
}
</style>