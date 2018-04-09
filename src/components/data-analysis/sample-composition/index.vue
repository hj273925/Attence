<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>数据分析</BreadcrumbItem>
      <BreadcrumbItem>样本成分分析</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Form ref="formInline" :model="formInline"  inline>
            <FormItem label="调研名">
              <Select v-model="formInline.name" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="组织名">
              <Select v-model="formInline.groupName" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary">添加</Button>
            </FormItem>
          </Form>
        </div>
        <div class="tag-list">
          <Tag type="border" closable color="blue">2016集团</Tag>
          <Tag type="border" closable color="blue">2017集团</Tag>
        </div>
        <div>
          <Table :loading="tableLoading" @on-row-click="clickRow" @on-selection-change="selectChange" border ref="selection" :columns="columns" :data="data"></Table>
        </div>
        <div class="table-page">
          <Page v-show="data.length" :total="data.length"  @on-change="changePage" show-elevator></Page>
        </div>
      </div>
    </Content>
    <Modal
      v-model="modal"
      :title="modal_title"
      :loading="loading"
      width="600">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="用户名" prop="name">
          <Input type="text" v-model="formCustom.name"></Input>
        </FormItem>
        <FormItem label="单位" prop="orgId">
          <Input type="text" v-model="formCustom.orgId"></Input>
        </FormItem>
        <FormItem label="职务" prop="title">
          <Input type="text" v-model="formCustom.title"></Input>
        </FormItem>
        <FormItem label="手机" prop="mobile">
          <Input type="text" v-model="formCustom.mobile" number></Input>
        </FormItem>
        <FormItem label="邮箱" prop="email">
          <Input type="email" v-model="formCustom.email"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel('formCustom')">取消</Button>
        <Button type="primary" :loading="modal_loading" @click="handleConfirm('formCustom')">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

