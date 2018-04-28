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
            <FormItem prop="groupName">
              <Select v-model="formInline.groupName" style="width:200px" placeholder="选择组织名">
                <Option v-for="item in groupNameList" :value="item.value" :key="item.value">{{ item.value }}</Option>
              </Select>
            </FormItem>
            <FormItem prop="researchName">
              <Select v-model="formInline.researchName" style="width:200px" placeholder="选择调研名">
                <Option v-for="item in researchNameList" :value="item.value" :key="item.value">{{ item.value }}</Option>
              </Select>
            </FormItem>
            <FormItem prop="title">
              <Select v-model="formInline.title" style="width:200px" placeholder="选择题目">
                <Option v-for="item in titleList" :value="item.value" :key="item.value">{{ item.value }}</Option>
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
        <div class="ivu-table-wrapper">
          <div class="ivu-table ivu-table-border">
            <div class="ivu-table-body">
              <table  cellSpacing="0" style="width: 100%">
                <tr>
                  <th>
                    <div class="ivu-table-cell">
                  <span>
                    选项
                  </span>
                    </div>
                  </th>
                  <th v-for="item in tagList">
                    <div class="ivu-table-cell">
                  <span>
                    {{item}}
                  </span>
                    </div>
                  </th>
                </tr>
                <tbody class="ivu-table-tbody">
                  <tr v-for="item,index in rows" :key="item" class="ivu-table-row">
                    <td>
                      <div class="ivu-table-cell">
                    <span>
                      {{item}}
                    </span>
                      </div>
                    </td>
                    <td v-for="item in tagList">
                      <div class="ivu-table-cell">
                    <span>
                      {{item}}
                    </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

