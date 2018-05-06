<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>数据分析</BreadcrumbItem>
      <BreadcrumbItem>问题选项分布</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Form ref="formInline" :model="formInline" :rules="formRule"  inline>
            <FormItem prop="researchName">
              <Select v-model="formInline.researchName" style="width:200px" placeholder="选择调研名" @on-change="onSurveyChange">
                <Option v-for="(item,idx) in researchNameList" :value="item.id" :key="item.name">{{ item.name }}</Option>
              </Select>
            </FormItem>
            <FormItem prop="groupName">
              <Select v-model="formInline.groupName" style="width:200px" placeholder="选择组织名">
                <Option v-for="item in groupNameList" :value="item.id" :key="item.shortName">{{ item.shortName }}</Option>
              </Select>
            </FormItem>
            <FormItem prop="title">
              <Select v-model="formInline.title" style="width:200px" placeholder="选择题目">
                <Option v-for="item in titleList" :value="item.idx" :key="item.idx">{{item.idx}}. {{ item.topic }}</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="addTag">添加</Button>
            </FormItem>
          </Form>
        </div>
        <div class="tag-list">
          <Tag v-for="item in tagList" :key="item" :name="item" closable color="blue" @on-close="deleteTag">{{ item }}</Tag>
        </div>
        <Stable :rows="rows" :cols="tagList"/>
        <div class="table-page">
          <Button type="primary">导出</Button>
        </div>
      </div>
    </Content>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

