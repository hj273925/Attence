<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
      <BreadcrumbItem>问卷发放</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <Card style="margin-bottom: 40px">
          <p slot="title">
            问卷发放
          </p>
        </Card>
        <div class="table-toolbar">
          <Button  type="primary" @click="loadAll()">全部</Button>
          <Button  type="primary" @click="loadNotified(true)">已发放</Button>
          <Button  type="primary" @click="loadNotified(false)">未发放</Button>
        </div>
        <div>
          <Table border stripe ref="selection" :columns="columns" :data="data"></Table>
        </div>
        <div class="table-page">
          <Page  show-elevator></Page>
        </div>
        <Button type="primary" @click="last">上一步</Button>
        <Button type="primary" @click="next">下一步</Button>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

