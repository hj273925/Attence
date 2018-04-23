<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
      <BreadcrumbItem>人员数据上传</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary" >膜版下载</Button>
          <Upload action="http://localhost:8080/staff/upload?surveyId=5add4e5484f19c2b78743945" style='display:inline-block'>
              <Button type="primary" icon="ios-cloud-upload-outline">上传数据</Button>
          </Upload>
          <Button  type="primary" >保存</Button>
          <Button  type="primary" >删除</Button>
          <Button class="pull-right" type="primary" >确认上传完毕</Button>
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

