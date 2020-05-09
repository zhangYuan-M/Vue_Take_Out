.<template>
  <div class="search">
    <!-- 顶部tabBar -->
    <nav-bar class="navbar-search">
      <template v-slot:center>
        <span class="search-title">个人中心</span>
      </template>
    </nav-bar>

    <!-- 个人信息区域 -->
    <profile-info />

    <!-- 选择功能区域 -->
    <profile-func />
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import ProfileInfo from './childProfile/ProfileInfo'
import ProfileFunc from './childProfile/ProfileFunc'
export default {
  name: 'Search',
  components: {
    NavBar,
    ProfileInfo,
    ProfileFunc
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