<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary">新建</Button>
          <Button  type="primary" :disabled = !Boolean(selected.length) @click="deleteUsers">删除</Button>
          <Button  type="primary" @click="loadUserlist">刷新</Button>
        </div>
        <div>
          <Table :loading="tableLoading"  @on-selection-change="selectChange" border ref="selection" :columns="columns" :data="data"></Table>
        </div>
        <div class="table-page">
          <Page v-show="data.length" :total="data.length"  @on-change="changePage" show-elevator></Page>
        </div>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

