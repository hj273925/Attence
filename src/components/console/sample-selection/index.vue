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
        </Card>
        <div class="table-toolbar">
          <ButtonGroup>
            <Button type="primary">筛选</Button>
            <Button>清除</Button>
          </ButtonGroup>
          <ButtonGroup style="margin-left: 20px">
            <Button type="primary">补充</Button>
            <Button>删除</Button>
          </ButtonGroup>
          <Button class="pull-right" type="primary" >确认筛选完毕</Button>
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

