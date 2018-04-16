<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>问卷管理</BreadcrumbItem>
      <BreadcrumbItem>问卷信息</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary" @click="addQuestionnaire">新建</Button>
          <Button  type="primary" :disabled = !Boolean(selected.length) @click="deleteQuestionnaire">删除</Button>
          <Button  type="primary" @click="loadQuestionnaireList">刷新</Button>
          <i-input placeholder="名称/标题/副标题" v-model="tSearchWord" @on-change="searchQuestionnaire"  icon="ios-search" class="search_input pull-right" style="width: 200px">
          </i-input>
        </div>
        <div>
          <Table :loading="tableLoading" @on-selection-change="selectChange" border stripe ref="selection" :columns="columns" :data="rows"></Table>
        </div>
        <div class="table-page">
          <Page v-show="rows.length" :total="total" :current="current" :page-size="tLimit"  @on-change="changePage" show-elevator></Page>
        </div>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>
