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
            <Menu active-name="调研设置" theme="light" width="auto" :open-names="[0]">
              <Submenu :name = index v-for="(submenu,index) in menu" :key="index">
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
            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>调研管理</BreadcrumbItem>
              <BreadcrumbItem>调研设置</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <Steps :current="current">
                <Step title="调研设置" icon="person-add"></Step>
                <Step title="人员数据上传" icon="camera"></Step>
                <Step title="样本筛选" icon="email"></Step>
                <Step title="问卷发放" icon="email"></Step>
                <Step title="填写进度" icon="email"></Step>
              </Steps>
              <div class="step-content">
                <QuestionnaireSetting v-if="current === 0"/>
                <DataUpload v-if="current === 1" @changePage="next"/>
                <SampleSelection v-if="current === 2" @changePage="next"/>
                <QuestionnaireDistribution v-if="current === 3" @changePage="next"/>
                <FillProgress v-if="current === 4"/>
              </div>
              <div>
                <Button type="primary" @click="next">Next step</Button>
              </div>
            </Content>
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
