.<template>
  <div class="search-input">
    <input type="text" placeholder="请输入搜索的关键字" />
    <button>提交</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
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