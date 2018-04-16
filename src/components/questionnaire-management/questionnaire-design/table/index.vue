<template>
  <div>
    <div class="tool-list">
      <ul>
        <li><span>单选</span> <Button type="primary" @click="addTitle('formRadio')">添加</Button></li>
        <li><span>多选</span> <Button type="primary" @click="addTitle('formCheckBox')">添加</Button></li>
        <li><span>排序</span> <Button type="primary" @click="addTitle('formSort')">添加</Button></li>
        <li><span>矩阵</span> <Button type="primary" @click="addTitle('formMatrix')">添加</Button></li>
        <li><span>开放</span> <Button type="primary" @click="addTitle('formOpen')">添加</Button></li>
        <li><span>开放</span> <Button type="primary" @click="addTitle('formNote')">备注</Button></li>
      </ul>
    </div>
    <!--单选-->
    <Modal
      v-model="model.formRadio"
      :title="modal_title.formRadio"
      width="600">
      <Form ref="formRadio" :model="formRadio" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="formRadio.topic"></Input>
        </FormItem>
        <FormItem label="选项" prop="content">
          <Table  border stripe :columns="columns" :data="formRadio.items"></Table>
          <div style="padding-top: 20px">
            <Button  type="primary" @click="add">增加</Button>
          </div>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </Modal>
    <!--多选-->
    <Modal
      v-model="model.formCheckBox"
      :title="modal_title.formCheckBox"
      width="600">
      <Form ref="formCheckBox" :model="formCheckBox" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="formCheckBox.topic"></Input>
        </FormItem>
        <FormItem label="选项" prop="content">
          <Table  border stripe :columns="columns" :data="formCheckBox.items"></Table>
          <div style="padding-top: 20px">
            <Button  type="primary" @click="add">增加</Button>
          </div>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </Modal>
    <!--矩阵-->
    <!--排序-->
    <!--开放-->
    <Modal
      v-model="model.formOpen"
      :title="modal_title.formOpen"
      width="600">
      <Form ref="formOpen" :model="formOpen" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="formOpen.topic"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </Modal>
    <!--备注-->
    <Modal
      v-model="model.formNote"
      :title="modal_title.formNote"
      width="600">
      <Form ref="formNote" :model="formNote" :rules="contentRule" :label-width="80">
        <FormItem label="备注" prop="topic">
          <Input type="textarea" style="width: 400px" :autosize="{minRows: 3,maxRows: 5}" v-model="formNote.content"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script src="./index.js"></script>

<style>
  .tool-list{
    padding-top: 20px;
    text-align: center;
  }
  .tool-list li{
    margin-bottom: 10px;
  }
  .tool-list li button{
    margin-left: 20px;
  }
</style>

