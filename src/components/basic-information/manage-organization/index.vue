<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>基础信息</BreadcrumbItem>
      <BreadcrumbItem>组织管理</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary" @click="modal = true">新建</Button>
          <Button  type="primary" :disabled = !Boolean(selected.length) @click="deleteOrgs">删除</Button>
          <Button  type="primary" @click="loadOrglist">刷新</Button>
          <i-input placeholder="搜索组织"  icon="ios-search" class="search_input pull-right" style="width: 200px">
          </i-input>
        </div>
        <div>
          <Table
          @on-selection-change="selectChange"
          border ref="selection"
          :columns="columns"
          :data="data"
          @on-row-click="currentLine"
          ></Table>
        </div>
        <div class="table-page">

        </div>
      </div>
    </Content>
    <Modal
      v-model="currentLineInfo"
      title="新建组织"
      :loading="loading"
      width="600"
      @on-ok="handleConfirmLine('formOrganizeLine')"
      @on-cancel="handleCancelLine('formOrganizeLine')">
      <Form ref="formOrganize" :model="formOrganizeLine" :rules="ruleOrg" :label-width="80">
        <FormItem label="代码" prop="code">
          <Input type="text" v-model="formOrganizeLine.code"></Input>
        </FormItem>
        <FormItem label="全称" prop="fullName">
          <Input type="text" v-model="formOrganizeLine.fullName"></Input>
        </FormItem>
        <FormItem label="简称" prop="abbreviation">
          <Input type="text" v-model="formOrganizeLine.abbreviation"></Input>
        </FormItem>
        <FormItem label="规模" prop="scale">
          <Input type="text" v-model="formOrganizeLine.scale" number></Input>
        </FormItem>
        <FormItem label="抽样率" prop="sample">
          <Input type="text" v-model="formOrganizeLine.sample"></Input>
        </FormItem>
        <FormItem label="冗余率" prop="redundancy">
          <Input type="text" v-model="formOrganizeLine.redundancy"></Input>
        </FormItem>
        <FormItem label="状态" prop="state">
          <Input type="text" v-model="formOrganizeLine.state"></Input>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      v-model="modal"
      title="新建组织"
      :loading="loading"
      width="600"
      @on-ok="handleConfirm('formOrganize')"
      @on-cancel="handleCancel('formOrganize')">
      <Form ref="formOrganize" :model="formOrganize" :rules="ruleOrg" :label-width="80">
        <FormItem label="代码" prop="code">
          <Input type="text" v-model="formOrganize.code"></Input>
        </FormItem>
        <FormItem label="全称" prop="fullName">
          <Input type="text" v-model="formOrganize.fullName"></Input>
        </FormItem>
        <FormItem label="简称" prop="abbreviation">
          <Input type="text" v-model="formOrganize.abbreviation"></Input>
        </FormItem>
        <FormItem label="规模" prop="scale">
          <Input type="text" v-model="formOrganize.scale" number></Input>
        </FormItem>
        <FormItem label="抽样率" prop="sample">
          <Input type="text" v-model="formOrganize.sample"></Input>
        </FormItem>
        <FormItem label="冗余率" prop="redundancy">
          <Input type="text" v-model="formOrganize.redundancy"></Input>
        </FormItem>
        <FormItem label="状态" prop="state">
          <Input type="text" v-model="formOrganize.state"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>