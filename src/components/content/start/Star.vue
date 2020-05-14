<template>
  <div class="star">
    <span class="star-item" v-for="(item, index) in starClasses" :key="index" :class="item"></span>
  </div>
</template>     

<script>
export default {
  name: 'Star',
  props: {
    score: Number
  },
  computed: {
    starClasses() {
      const score = this.score
      const arr = []
      let num = 0
      // 向arr中添加n个'on'
      num = Math.floor(score)
      for (let i = 0; i < num; i++) {
        arr.push('on')
      }
      // 向arr中添加0/1个'half'
      if (score * 10 - num * 10 >= 5) {
        arr.push('half')
      }
      // 向arr中添加n个'off'
      num = 5 - num
      for (let i = 0; i < num; i++) {
        arr.push('off')
      }
      return arr
    }
  }
}
</script>

<style scoped>
.star {
  display: flex;
}
.star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}
.half {
  background-image: url('../../../assets/images/stars/star24_half@2x.png');
}
.on {
  background-image: url('../../../assets/images/stars/star24_on@2x.png');
}
.off {
  background-image: url('../../../assets/images/stars/star24_off@2x.png');
}
</style>