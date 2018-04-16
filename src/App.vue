<template>
  <div id="app" autoscroll="true">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
              <span>SAIC SURVEY CONSOLE</span>
            </div>
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
            {name: '问卷信息', path: 'ManageQuestionnaire'},
            {name: '问卷设计', path: 'QuestionnaireDesign'}
          ]
        }, {
          title: '调研管理',
          subMenu: [
            {name: '调研信息', path: 'ResearchManageService'},
            {name: '调研设置', path: 'SurveyIntercalate'}
          ]
        }, {
          title: '数据分析',
          subMenu: [
            {name: '样本成分分析', path: 'SampleComposition'},
            {name: '满意度对比', path: 'SatisfactionComparison'},
            {name: '满意度分布', path: 'SatisfactionDistribution'},
            {name: '7维21指标对比', path: 'IndexComparison'},
            {name: '7维21指标分布', path: 'IndexDistribution'},
            {name: '问题选项分布', path: 'ProblemDistribution'}
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
  float: left;
  position: relative;
  left: -25px;
}
.layout-logo span{
  color: white;
  font-size: 20px;
}
.layout-nav{
  width: 120px;
  margin: 0 auto;
  margin-right: 20px;
}
a{
  color: grey;
}
.ivu-layout-sider{
  overflow: auto;
}
.ivu-layout-content{
  height: calc(100vh - 180px);
  min-height: 500px;
  overflow: auto;
}
</style>
