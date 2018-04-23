<template>
  <div>
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
            <Menu active-name="调研列表" theme="light" width="auto" :open-names="[0]">
              <Submenu :name = 'index' v-for="(submenu,index) in menu" :key="index">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  {{submenu.title}}
                </template>
                <router-link :to="{ name: item.path }" :key="item.path" v-for="item in submenu.subMenu">
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

<script src="./index.js"></script>

<style>
  .step-content{
    padding: 30px 0px;
  }
</style>
