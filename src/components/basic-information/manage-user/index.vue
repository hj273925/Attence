<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>基础信息</BreadcrumbItem>
      <BreadcrumbItem>用户管理</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary" @click="showModal">新建</Button>
          <Button  type="primary" :disabled = !Boolean(selected.length) @click="deleteUsers">删除</Button>
          <Button  type="primary" @click="loadUserlist">刷新</Button>
          <i-input placeholder="搜索用户" v-model="tSearchWord" @on-change="search"  icon="ios-search" class="search_input pull-right" style="width: 200px">
          </i-input>
        </div>
        <div>
          <Table :loading="tableLoading" @on-selection-change="selectChange" border stripe ref="selection" :columns="columns" :data="tCurrentRows"></Table>
        </div>
        <div class="table-page">
          <Page v-show="rows.length" :total="rows.length" :current="current" :page-size="tLimit"  @on-change="changePage" show-elevator></Page>
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
        <FormItem label="密码" prop="password">
          <Input type="text" v-model="formCustom.password"></Input>
        </FormItem>
        <FormItem label="性别" prop="gender">
          <RadioGroup v-model="formCustom.gender">
              <Radio label="MALE"></Radio>
              <Radio label="FEMALE"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="单位" prop="orgId">
          <Input type="text" v-model="formCustom.orgId"></Input>
        </FormItem>
        <FormItem label="职务" prop="title">
          <Input type="text" v-model="formCustom.title"></Input>
        </FormItem>
        <FormItem label="手机" prop="mobile">
          <Input type="text" v-model="formCustom.mobile"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="email">
          <Input type="email" v-model="formCustom.email"></Input>
        </FormItem>
        <FormItem label="备注" prop="note">
          <Input type="email" v-model="formCustom.note"></Input>
        </FormItem>
        <FormItem label="状态" prop="status">
          <RadioGroup v-model="formCustom.status">
              <Radio label="ON"></Radio>
              <Radio label="OFF"></Radio>
          </RadioGroup>
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

