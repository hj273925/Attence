<template>
  <div>
    <div class="layout">
      <Layout>
        <Header>
          <Savater/>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="总览" theme="light" width="auto" :open-names="[0]">
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
