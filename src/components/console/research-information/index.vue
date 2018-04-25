<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
      <BreadcrumbItem>调研信息</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', background: '#fff'}">
      <div class="table-container">
        <Form label-position="left" :label-width="100" :model="surveyColumns">
          <FormItem label="问卷">
            <Row>
              <Col span="5">
                <span>{{surveyColumns.surveyDocId}}</span>
              </Col>
              <Col offset="1">
                <Button  type="primary" >下载</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="其它参数">
            <span><b>计划开始时间</b>：{{surveyColumns.startDate}}</span>
            <span><b>计划结束时间</b>：{{surveyColumns.endDate}}</span></br>
            <span><b>是否自动催填</b>：{{surveyColumns.autoResend}}</span>
            <span><b>催填间隔</b>：{{surveyColumns.resendInterval}}天</span>
            <span><b>状态</b>：{{surveyColumns.status}}</span>
          </FormItem>
          <FormItem label="筛选参数">
            <Table border stripe :columns="columns" :data="rows"></Table>
            <Button type="primary" @click="next">下一步</Button>
          </FormItem>
        </Form>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

