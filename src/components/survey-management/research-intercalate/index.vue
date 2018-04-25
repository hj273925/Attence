<template>
  <div>
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
        <QuestionnaireSetting v-if="current === 0" @changePage="next"/>
        <DataUpload v-if="current === 1" @changePage="next"/>
        <SampleSelection v-if="current === 2" @changePage="next"/>
        <QuestionnaireDistribution v-if="current === 3" @changePage="next"/>
        <FillProgress v-if="current === 4"/>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>
  .step-content{
    padding: 30px 0px;
  }
</style>

