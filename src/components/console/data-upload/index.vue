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
          <Button  type="primary" >保存</Button>
          <Button  type="primary" >删除</Button>
          <Upload :before-upload="handleUpload" action="http://localhost:8080/staff/upload?surveyId=5add4e5484f19c2b78743945" style='display:inline-block'>
              <Button type="primary" icon="ios-cloud-upload-outline">上传数据</Button>
          </Upload>
          <div v-if="file !== null" style='display:inline-block' class="pull-right">文件: {{ file.name }} <Button type="primary" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : '点击上传' }}</Button></div>
        </div>
        <div>
          <Table border stripe ref="selection" :columns="columns" :data="data"></Table>
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

