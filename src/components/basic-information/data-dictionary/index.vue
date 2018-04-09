<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>基础信息</BreadcrumbItem>
      <BreadcrumbItem>数据字典</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary">新建</Button>
          <Button  type="primary">删除</Button>
          <Button  type="primary">刷新</Button>
          <i-input placeholder="按订单搜索"  icon="ios-search" class="search_input pull-right" style="width: 200px">
          </i-input>
        </div>
        <div>
          <Table border stripe ref="selection" :columns="columns4" :data="data1"></Table>
        </div>
        <div class="table-page">

        </div>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

