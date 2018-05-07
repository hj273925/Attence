<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
      <BreadcrumbItem>填写进度</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <Card style="margin-bottom: 40px">
          <p slot="title">
            填写进度
          </p>
        </Card>
        <div class="table-toolbar">
          <Button  type="primary" @click="loadAll()" >全部</Button>
          <Button  type="primary" @click="loadCompleted(true)" >已填写</Button>
          <Button  type="primary" @click="loadCompleted(false)">未填写</Button>
          <Button class="pull-right" type="primary" >催填</Button>
        </div>
        <div>
          <Table border stripe ref="selection" :columns="columns" :data="data"></Table>
        </div>
        <div class="table-page">
          <Page  show-elevator></Page>
        </div>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

