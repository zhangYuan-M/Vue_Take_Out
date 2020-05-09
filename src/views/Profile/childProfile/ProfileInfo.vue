.<template>
  <div class="profile-info">
    <section class="profile-number">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </a>
    </section>
    <section class="profile_info_data">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top1">
            <span>0.00</span>元
          </span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top2">
            <span>0</span>个
          </span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top3">
            <span>0</span>分
          </span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* 定位个人信息框样式表 */
.profile-link {
  border-top: 1px solid rgba(0, 128, 0, 0.548);
  padding: 10px 14px 3px 14px;
  display: flex;
  align-items: center;
  color: whitesmoke;
}
.profile_image {
  overflow: hidden;
  border-radius: 50%;
  min-width: 59px;
  max-height: 70px;
  color: rgb(136, 136, 136);
  background: #e4e4e4;
}
.arrow {
  min-width: 22px;
  vertical-align: text-top;
}
.user-info {
  flex: 1;
}

.profile-number {
  min-height: 101px;
  background: var(--color-base);
}
.icon-person {
  position: relative;
  top: -5px;
  overflow: hidden;
  font-size: 75px;
}
.icon-mobile {
  font-size: 25px;
  position: relative;
  top: 5px;
}
.user-info-top {
  font-size: 19px;
  font-weight: 700;
  margin-left: 12px;
  margin-bottom: 10px;
}
/* 第二部分 */
.info_data_list {
  display: flex;
  /* justify-content: space-around; */
}
.info_data_link {
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 80px;
}
.info_data_top1 {
  color: goldenrod;
}
.info_data_top2 {
  color: rgb(218, 100, 32);
}
.info_data_top3 {
  color: rgb(32, 218, 79);
}
.info_data_top1 > span,
.info_data_top2 > span,
.info_data_top3 > span {
  font-size: 30px;
  margin: 6px;
  font-weight: 500;
}
.info_data_bottom {
  font-size: 14px;
  color: #666;
  font-weight: 400;
  margin-top: 5px;
  padding-bottom: 10px;
}
.profile_info_data {
  border-bottom: 10px solid rgb(238, 238, 238);
}
</style>