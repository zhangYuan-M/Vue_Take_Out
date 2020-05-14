.<template>
  <div class="search-input">
    <input type="text" placeholder="请输入搜索的关键字" v-model="searchKey" />
    <button @click="btnClick">提交</button>
  </div>
</template>

<script>
import { getShopListByKeyword } from '../../../network/search'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      shopLists: [],
      searchKey: '1'
    }
  },
  mounted() {
    console.log('mounted')
    this.getSearchList({ keyword: '1' })
  },
  methods: {
    ...mapActions(['getSearchList']),
    btnClick() {
      this.getSearchList({ keyword: this.searchKey })
    }
  },
  computed: {}
}
</script>

<style scoped>
button {
  border-radius: 5px;
  -webkit-appearance: none;
  border: none;
}
button:checked {
  border: 1px solid greenyellow;
}
.search-input {
  display: flex;
  justify-content: space-around;
  padding: 6px 10px 10px 6px;
  background: rgba(235, 235, 235, 0.836);
}
.search-input input {
  width: 66%;
  background: rgba(228, 228, 228, 0.842);
}
.search-input button {
  background: var(--color-base);
  padding: 8px 12px 8px 12px;
  color: whitesmoke;
  font-weight: 500;
}
</style>