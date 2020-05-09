.<template>
  <div class="single-row-item">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.single-row-item {
  border-bottom: 1px solid var(--color-bottom);
  min-height: 102px;
  display: flex;
  justify-content: space-between;
}
.center {
  flex: 1;
}

.left {
  width: 95px;
}
.right {
  width: 65px;
}
</style>