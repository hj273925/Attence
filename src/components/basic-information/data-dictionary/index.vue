<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>基础信息</BreadcrumbItem>
      <BreadcrumbItem>数据字典</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary" @click="showModal">新建</Button>
          <Button  type="primary" :disabled = !Boolean(selected.length) @click="deleteDict">删除</Button>
          <Button  type="primary" @click="loadDictList">刷新</Button>
          <i-input placeholder="分组名称" v-model="tSearchWord" @on-change="searchDict"  icon="ios-search" class="search_input pull-right" style="width: 200px">
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
    <Modal
      v-model="modal"
      :title="modal_title"
      :loading="loading"
      width="600">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="组名" prop="groupName">
          <Input type="text" v-model="formCustom.groupName"></Input>
        </FormItem>
        <FormItem label="组id" prop="groupId">
          <Input type="text" v-model="formCustom.groupId"></Input>
        </FormItem>
        <FormItem label="变量" prop="key">
          <Input type="text" v-model="formCustom.key"></Input>
        </FormItem>
        <FormItem label="变量描述" prop="label">
          <Input type="text" v-model="formCustom.label"></Input>
        </FormItem>
        <FormItem label="变量值" prop="value">
          <Input type="text" v-model="formCustom.value"></Input>
        </FormItem>
        <FormItem label="状态">
          <RadioGroup v-model="formCustom.enable">
              <Radio label="true">启用</Radio>
              <Radio label="false">禁用</Radio>
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

