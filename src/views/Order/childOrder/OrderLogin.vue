<template>
  <section class="order_no_login">
    <img src="../../../assets/images/order/person.png" />
    <h3>登录后查看外卖订单</h3>
    <button @click="btnClick">立即登陆</button>
  </section>
</template>

<script>
export default {
  methods: {
    btnClick() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.order_no_login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
button {
  display: block;
  margin: 0 auto;
  width: 120px;
  background: #02a774;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>