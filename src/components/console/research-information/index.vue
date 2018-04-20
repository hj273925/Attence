<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>调研管理</BreadcrumbItem>
      <BreadcrumbItem>调研信息</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <Form label-position="left" :label-width="100">
          <FormItem label="问卷">
            <Row>
              <Col span="2">
                <span>2017问卷</span>
              </Col>
              <Col offset="1">
                <Button  type="primary" >下载</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="其它参数">
            <span>计划开始时间</span>
            <span>计划结束时间</span>
            <span>是否自动催填</span>
            <span>催填间隔</span>
            <span>状态</span>
          </FormItem>
          <FormItem label="筛选参数">
            <Table :columns="columns" :data="rows"></Table>
          </FormItem>
        </Form>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

