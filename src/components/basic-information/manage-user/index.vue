<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>基础信息</BreadcrumbItem>
      <BreadcrumbItem>用户管理</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary" @click="modal = true">新建</Button>
          <Button  type="primary" :disabled = !Boolean(selected.length) @click="deleteUsers">删除</Button>
          <Button  type="primary" @click="loadUserlist">刷新</Button>
          <i-input placeholder="搜索用户"  icon="ios-search" class="search_input pull-right" style="width: 200px">
          </i-input>
        </div>
        <div>
          <Table @on-selection-change="selectChange" border ref="selection" :columns="columns" :data="data"></Table>
        </div>
        <div class="table-page">
          <Page v-show="data.length" :total="data.length"  @on-change="changePage" show-elevator></Page>
        </div>
      </div>
    </Content>
    <Modal
      v-model="modal"
      title="编辑用户"
      :loading="loading"
      width="600"
      @on-ok="handleConfirm('formCustom')"
      @on-cancel="handleCancel('formCustom')">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="用户名" prop="name">
          <Input type="text" v-model="formCustom.name"></Input>
        </FormItem>
        <FormItem label="单位" prop="orgId">
          <Input type="text" v-model="formCustom.employer"></Input>
        </FormItem>
        <FormItem label="职务" prop="title">
          <Input type="text" v-model="formCustom.post"></Input>
        </FormItem>
        <FormItem label="手机" prop="mobile">
          <Input type="text" v-model="formCustom.telephone" number></Input>
        </FormItem>
        <FormItem label="邮箱" prop="email">
          <Input type="email" v-model="formCustom.email"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

