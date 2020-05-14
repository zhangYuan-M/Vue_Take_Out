.<template>
  <div>
    <div class="score-assess">
      <div class="left-part">
        <div class="left1">4.2</div>
        <div class="left2">综合评分</div>
        <div class="left3">高于周边商家99.9%</div>
      </div>
      <div class="right-part">
        <div class="right1">
          <star :score="4.3" />
          <span>服务态度 4.3</span>
        </div>
        <div class="right2">
          <star :score="3.3" class="star" />
          <span>商品评分 3.3</span>
        </div>
        <div class="right3">
          <span>送达时间</span>
          <span>28分钟</span>
        </div>
      </div>
    </div>
    <!-- 一个灰条10px -->
    <div class="character"></div>
  </div>
</template>

<script>
import Star from '../../../../components/content/start/Star'
export default {
  components: {
    Star
  }
}
</script>

<style scoped>
.score-assess {
  padding: 30px 36px;
  display: flex;
}
.left-part {
  border-right: 1px solid gainsboro;
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left1 {
  margin-bottom: 6px;
  line-height: 28px;
  font-size: 24px;
  color: #f90;
}
.left2 {
  margin-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: #07111b;
}
.left3 {
  line-height: 10px;
  font-size: 10px;
  color: #93999f;
}
.right-part {
  font-size: 14px;
  margin-left: 30px;
}
.right1,
.right2,
.right3 {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-around;
}
.character {
  height: 18px;
  background: rgb(241, 241, 241);
  border-bottom: 1px solid rgb(184, 184, 184);
  border-top: 1px solid rgb(187, 187, 187);
}
</style>