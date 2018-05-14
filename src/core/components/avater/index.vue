<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <span>区块链签到统计系统</span>
      </div>
      <div>
        <Dropdown trigger="click" @on-click="logout" class="pull-right">
          <Avatar icon="person" style="background-color: #00a2ae" />
          <span style="color: white">238432@qq.com</span>
          <DropdownMenu slot="list">
            <DropdownItem>退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Menu>
  </div>
</template>

<script>
import LoginService from '@/services/login.service'
export default {
  name: 'Savater',
  computed: {
    name() {
      return this.$store.state.userInfo.name
    }
  },
  methods: {
    logout() {
      LoginService.Logout()
        .then(() => {
          this.$router.push({name: 'App'})
        })
        .catch(() => {
          this.$Message.error('退出登录失败！')
        })
    }
  }
}
</script>

<style>
  .ivu-layout-header{
    background-color: #2d8cf0;
  }
  .ivu-menu-dark{
    background-color: #2d8cf0;
  }
  .layout-logo{
    float: left;
    position: relative;
    left: -25px;
    display: flex;
    align-items: center;
  }
  .layout-logo span{
    color: white;
    font-size: 20px;
  }
</style>
