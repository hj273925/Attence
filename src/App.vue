<template>
  <div id="app" autoscroll="true">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Avatar icon="person" />
                admin
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="组织管理" theme="light" width="auto" :open-names="[0]">
              <Submenu :name = index v-for="(submenu,index) in menu">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  {{submenu.title}}
                </template>
                <router-link :to="{ name: item.path }" v-for="item in submenu.subMenu">
                  <MenuItem :name="item.name">{{item.name}}</MenuItem>
                </router-link>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <router-view></router-view>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      menu: [
        {
          title: '基础信息',
          subMenu: [
            {name: '组织管理', path: 'Manage0rganization'},
            {name: '用户管理', path: 'ManageUser'},
            {name: '数据字典', path: 'DataDictionary'}
          ]
        }, {
          title: '问卷管理',
          subMenu: [
            {name: '问卷设计', path: 'Manage0rganization'}
          ]
        }, {
          title: '调研管理',
          subMenu: [
            {name: '调研管理', path: 'SurveyManagement'},
            {name: '调研设置', path: 'SurveyIntercalate'}
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,Neue Haas Grotesk Text Pro,Arial Nova,Segoe UI,Helvetica Neue,\.PingFang SC,PingFang SC,Microsoft YaHei,Microsoft JhengHei,Source Han Sans SC,Noto Sans CJK SC,Source Han Sans CN,Noto Sans SC,Source Han Sans TC,Noto Sans CJK TC,Hiragino Sans GB,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50
}
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
.ivu-layout{
  height:100%;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 120px;
  margin: 0 auto;
  margin-right: 20px;
}
a{
  color: grey;
}
</style>
