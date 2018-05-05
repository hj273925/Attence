<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
      <BreadcrumbItem>样本筛选</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <Card style="margin-bottom: 40px">
          <p slot="title">
            抽样信息
          </p>
          <template :model="sampleColumns">
            <Row>
                <Col span="12">
                  <p><span>总样本：{{sampleColumns.scale}}</span></p>
                  <p><span>抽样率：{{sampleColumns.sampleRate}}%</span></p>
                  <p><span>冗余率：{{sampleColumns.extraRate}}%</span></p>
                </Col>
                <Col span="12">
                <p><span>抽样数量：{{sampleColumns.sampleNum}}</span></p>
                <p><span>抽样：{{sampleColumns.sample}}</span></p>
                <p><span>冗余：{{sampleColumns.extraNum}}</span></p>
                </Col>
            </Row>
          </template>
        </Card>
        <div class="table-toolbar">
          <ButtonGroup>
            <Button type="primary" @click="filtrate">开始筛选</Button>
            <Button @click="clean">清除</Button>
          </ButtonGroup>
          <ButtonGroup style="margin-left: 20px">
            <Button type="primary">补充</Button>
            <Button @click="cleanByIds">删除</Button>
          </ButtonGroup>
          <Button class="pull-right" type="primary" >确认筛选完毕</Button>
        </div>
        <div>
          <Table border stripe @on-selection-change="selectChange" ref="selection" :columns="columns" :data="rows"></Table>
        </div>
        <div class="table-page">
          <Page  show-elevator></Page>
        </div>
        <Button type="primary" @click="next">下一步</Button>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

