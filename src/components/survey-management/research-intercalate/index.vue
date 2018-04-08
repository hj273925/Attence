<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
      <BreadcrumbItem>调研设置</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <Steps :current="0">
        <Step title="调研设置" icon="person-add"></Step>
        <Step title="人员数据上传" icon="camera"></Step>
        <Step title="样本筛选" icon="email"></Step>
        <Step title="问卷发放" icon="email"></Step>
        <Step title="填写进度" icon="email"></Step>
      </Steps>

    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

