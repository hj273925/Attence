<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <span>SAIC SURVEY CONSOLE</span>
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Dropdown trigger="click" @on-click="logout">
            <a href="javascript:void(0)">
              <Avatar icon="person" />
              {{name}}
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuItem>
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

</style>
