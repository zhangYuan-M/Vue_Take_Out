.<template>
  <div class="search">
    <!-- 顶部tabBar -->
    <nav-bar class="navbar-search">
      <template v-slot:center>
        <span class="search-title">搜索</span>
      </template>
    </nav-bar>

    <!-- 搜索框区域 -->
    <search-input />
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import SearchInput from './childSearch/SearchInput'
export default {
  name: 'Search',
  components: {
    NavBar,
    SearchInput
  }
}
</script>

<style scoped>
.navbar-search {
  background: var(--color-base);
}
.search-title {
  font-size: 22px;
  color: whitesmoke;
  font-weight: 500;
}
</style>