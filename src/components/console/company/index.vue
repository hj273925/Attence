<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>仪表盘</BreadcrumbItem>
      <BreadcrumbItem>公司</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', background: '#fff'}">
      <div class="table-container">
        <div class="table-container">
          <Row style="background:#eee;padding:20px">
            <Col span="6">
              <Card>
                <span>签到数:</span><span>1000</span>
              </Card>
            </Col>
            <Col span="6" offset="2">
              <Card>
                <span>员工数:</span><span>1000</span>
              </Card>
            </Col>
            <Col span="6" offset="2">
              <Card>
                <span>公司数:</span><span>1000</span>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div class="table-container">
        <Form ref="formInline" :model="formInline"  inline>
          <FormItem prop="surveyId">
            <Select v-model="formInline.surveyId" style="width:200px" placeholder="选择项目名称">
              <Option v-for="(item,idx) in researchNameList" :value="item.id" :key="item.name">{{ item.name }}</Option>
            </Select>
          </FormItem>
          <FormItem prop="orgId">
            <Select v-model="formInline.orgId" style="width:200px" placeholder="选择公司名">
              <Option v-for="item in groupNameList" :value="item.id" :key="item.shortName">{{ item.shortName }}</Option>
            </Select>
          </FormItem>
          <FormItem prop="idx">
            <Select v-model="formInline.idx" style="width:200px" placeholder="选择职位类别">
              <Option v-for="item in titleList" :value="item.idx" :key="item.idx">{{item.idx}}. {{ item.topic }}</Option>
            </Select>
          </FormItem>
          <FormItem prop="time">
            <DatePicker  type="daterange" split-panels v-model="formInline.time" placeholder="选择时间"></DatePicker>
          </FormItem>
        </Form>
      </div>
      <div class="table-toolbar">
        <span class="table-title">统计报表</span>
        <Button  type="primary" class="pull-right">导出数据</Button>
      </div>
      <Table stripe :columns="columns" :data="data"></Table>
      <div class="table-page">
        <Page :total="100" show-sizer></Page>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
  .ivu-card{
    text-align: center;
  }
  .ivu-card span+span{
    color: red;
    font-size: 24px;
    font-weight: bolder;
    margin-left: 5px;
  }
</style>

