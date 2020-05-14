<template>
  <div ref="shopInfoRef" class="shop-info">
    <div class="shop-list-info">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <span class="delivery-icon">硅谷专送</span>
            <span>由商家配送提供配送，约28分钟送达，距离1000m</span>
          </div>
          <div class="delivery-money">配送费￥4</div>
        </div>
      </section>
      <!-- 一个灰条10px -->
      <div class="character"></div>
      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity">
          <div class="activity-item activity-green">
            <span class="content-tag">
              <span class="mini-tag">首单</span>
            </span>
            <span class="activity-content">新用户下单立减17元(不与其它活动同享)</span>
          </div>
          <div class="activity-item activity-red">
            <span class="content-tag">
              <span class="mini-tag">满减</span>
            </span>
            <span class="activity-content">满35减19，满65减35</span>
          </div>
          <div class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减19.5元】欢乐小食餐</span>
          </div>
          <div class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减29元】火烤菠萝皇堡双人餐</span>
          </div>
          <div class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减16.5元】火烤菠萝皇堡单人餐</span>
          </div>
          <div class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减15】经典安格斯单人餐</span>
          </div>
          <div class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减11.95】皇堡双人餐</span>
          </div>
          <div class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减19.8】半价单人餐</span>
          </div>
        </div>
      </section>
      <!-- 一个灰条10px -->
      <div class="character"></div>
      <section class="section3">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
              />
            </li>
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/6/82/2cd3d681f5e93292b3eb49d6b412ajpeg.jpeg"
              />
            </li>
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/8/93/4cf527b6462eea634f69755374f88jpeg.jpeg"
              />
            </li>
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/3/f2/2a8796ba025a5773fd685a95ac369jpeg.jpeg"
              />
            </li>
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/a/c4/5a78f477fd616a51ce33586a76ddbjpeg.jpeg"
              />
            </li>
          </ul>
        </div>
      </section>
      <section class="section section3" style="pointer-events: auto;">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li>
            <span class="bold">品类</span>
            <span>包子粥店, 简餐</span>
          </li>
          <li>
            <span class="bold">商家电话</span>
            <span>18501083744</span>
          </li>
          <li>
            <span class="bold">地址</span>
            <span>北京市丰台区太平桥44号</span>
          </li>
          <li>
            <span class="bold">营业时间</span>
            <span>09:35-24:00</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ShopListInfo',
  mounted() {
    new BScroll(this.$refs.shopInfoRef, {
      click: true
    })
    new BScroll('.pic-wrapper', {
      scrollX: true
    })
  }
}
</script>

<style scoped>
.pic-wrapper {
  width: 500px;
  overflow: hidden;
}
.pic-list {
  width: 800px;
  display: flex;
}
.section {
  padding: 12px 20px;
  font-size: 14px;
}
.section-title {
  color: #000;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 12px;
}

.delivery-icon {
  width: 55px;
  font-size: 11px;
  margin-right: 10px;
  display: inline-block;
  text-align: center;
  color: #fff;
  background-color: #0097ff;
  padding: 1px 0;
  border-radius: 4px;
}
.character {
  height: 18px;
  background: rgb(241, 241, 241);
  border-bottom: 1px solid rgb(184, 184, 184);
  border-top: 1px solid rgb(187, 187, 187);
}
.activity-item {
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.activity-orange .content-tag {
  background: rgb(201, 156, 34);
  border-radius: 5px;
  color: white;
  padding: 4px;
}
.activity-red .content-tag {
  color: white;
  border-radius: 5px;
  margin-right: 8px;
  padding: 4px;
  background: red;
}
.activity-green .content-tag {
  color: white;
  border-radius: 5px;
  margin-right: 8px;
  padding: 4px;
  background: green;
}

.section3 {
  padding: 10px 12px;
}
.pic-item {
  list-style: none;
  margin-left: 13px;
}
.detail li {
  display: flex;
  border-bottom: 1px solid rgb(243, 243, 243);
  padding: 15px 4px;
  font-size: 13px;
  justify-content: space-between;
}
.bold {
  font-weight: 700;
}
.shop-info {
  position: absolute;
  top: 200px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>