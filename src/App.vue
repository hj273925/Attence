<template>
  <div id="app" autoscroll="true">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
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
