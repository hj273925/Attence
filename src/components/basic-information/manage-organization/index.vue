<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>基础信息</BreadcrumbItem>
      <BreadcrumbItem>组织管理</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <div class="table-container">
        <div class="table-toolbar">
          <Button  type="primary" @click="showModal">新建</Button>
          <Button  type="primary" :disabled = !Boolean(selected.length) @click="deleteOrgs">删除</Button>
          <Button  type="primary" @click="loadOrglist">刷新</Button>
          <i-input placeholder="全称/简称" v-model="tSearchWord" @on-change="searchOrg" icon="ios-search" class="search_input pull-right" style="width: 200px">
          </i-input>
        </div>
        <div>
          <Table :loading="tableLoading" @on-selection-change="selectChange" border ref="selection" :columns="columns" :data="rows"></Table>
        </div>
        <div class="table-page">
          <Page v-show="rows.length" :total="total"  @on-change="changePage" show-elevator></Page>
        </div>
      </div>
    </Content>
    <Modal
      v-model="modal"
      :title="modal_title"
      :loading="loading"
      width="600">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="代码" prop="code">
          <Input type="text" v-model="formCustom.code"></Input>
          </FormItem>
          <FormItem label="全称" prop="fullName">
            <Input type="text" v-model="formCustom.fullName"></Input>
          </FormItem>
          <FormItem label="简称" prop="shortName">
            <Input type="text" v-model="formCustom.shortName"></Input>
          </FormItem>
          <FormItem label="规模" prop="scale">
            <Input type="number" v-model="formCustom.scale"></Input>
          </FormItem>
          <FormItem label="抽样率" prop="sampleRate">
            <Input type="number" v-model="formCustom.sampleRate"></Input>
          </FormItem>
          <FormItem label="冗余率" prop="extraRate">
            <Input type="number" v-model="formCustom.extraRate"></Input>
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

