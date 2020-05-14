.<template>
  <div class="common">
    <div class="top-part">
      <span class="top1" :class="{'active-top1': currentIndex === 0}" @click="currentIndex = 0">全部</span>
      <span class="top1" :class="{'active-top1': currentIndex === 1}" @click="currentIndex = 1">满意</span>
      <span class="top1" :class="{'active-top1': currentIndex === 2}" @click="currentIndex = 2">不满意</span>
    </div>
    <div class="center-part">
      <input type="checkbox" id="checkbox" v-model="isShowTextCommon" />
      <label for="checkbox">只看有内容的评价</label>
    </div>
    <div class="bottom-part">
      <ul>
        <li v-for="(item, index) in textContent" :key="index">
          <div class="user-box">
            <img :src="item.avatar" />
            <div class="center1">
              <span class="center2">{{item.username}}</span>
              <star :score="4"></star>
            </div>
            <span class="center3">2020 / 12 / 09</span>
          </div>
          <div class="conten-ledt">
            <div class="conten-ledt">{{item.text}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Star from '../../../../components/content/start/Star'
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'ShopCommon',
  data() {
    return {
      currentIndex: 0,
      isShowTextCommon: true
    }
  },
  components: {
    Star
  },
  mounted() {
    this.getShopRatinds()
  },
  methods: {
    ...mapActions(['getShopRatinds'])
  },
  computed: {
    ...mapState(['shopRating']),
    // ...mapGetters(['getShopRating']),
    textContent() {
      switch (this.currentIndex) {
        case 0:
          return this.shopRating
        case 1:
          return this.shopRating.filter(item => item.rateType === 0)
        case 2:
          return this.shopRating.filter(item => item.rateType === 1)
      }
      if (this.isShowTextCommon) {
        return this.shopRating.filter(item => item.text)
      } else {
        return this.shopRating.filter(item => item.text === '')
      }
      // return this.shopRating.filter(item => item.text)
    }
  }
}
</script>

<style scoped>
.top-part {
  padding: 20px 10px;
}
.top1 {
  padding: 6px 10px;
  font-size: 14px;
  background: rgb(226, 226, 226);
  margin-left: 13px;
  border-radius: 4px;
}
.active-top1 {
  background: rgb(117, 180, 22);
  color: white;
}
.center-part {
  border-bottom: 1px solid gainsboro;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 30px;
  height: 30px;
  width: 100%;
}
.center-part > input {
  margin-right: 10px;
  height: 17px;
  width: 17px;
  appearance: button;
  border-radius: 50%;
  background: skyblue;
}
li > div {
  padding: 10px 28px;
  display: flex;
  justify-content: flex-start;
}
li img {
  height: 30px;
  border-radius: 50%;
}
.center1 {
  width: 60%;
}
.bottom-part li {
  border-bottom: 1px solid rgba(196, 196, 196, 0.452);
}
.conten-ledt {
  text-align: left;
}
</style>