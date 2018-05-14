<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>仪表盘</BreadcrumbItem>
      <BreadcrumbItem>总览</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <Row style="background:#eee;padding:20px">
          <Col span="6">
            <Card>
              <p>签到次数/员工数</p>
              <p>999次/99人</p>
            </Card>
          </Col>
          <Col span="6" offset="2">
            <Card>
              <span>项目数:</span><span>33个</span>
            </Card>
          </Col>
          <Col span="6" offset="2">
            <Card>
              <span>公司数:</span><span>13家</span>
            </Card>
          </Col>
        </Row>
        <Schart id="project" :options="projectOption"/>
        <Schart id="company" :options="companyOption"/>
        <Schart id="staff" :options="staffOption"/>
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
  .ivu-card p+p{
    color: red;
    font-weight: bolder;
  }
  .charts{
    padding-top: 30px;
    display: flex;
    justify-content: center;
  }
</style>

