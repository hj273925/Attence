<template>
  <div>
    <div class="tool-list">
      <ul>
        <li><span>单选</span> <Button type="primary" @click="addTitle('formRadio')">添加</Button></li>
        <li><span>多选</span> <Button type="primary" @click="addTitle('formCheckBox')">添加</Button></li>
        <li><span>排序</span> <Button type="primary" @click="addTitle('formSort')">添加</Button></li>
        <li><span>矩阵</span> <Button type="primary" @click="addTitle('formMatrix')">添加</Button></li>
        <li><span>开放</span> <Button type="primary" @click="addTitle('formOpen')">添加</Button></li>
        <li><span>备注</span> <Button type="primary" @click="addTitle('formNote')">备注</Button></li>
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
        <FormItem label="选项">
          <Table  border stripe :columns="columns" :data="formRadio.items"></Table>
          <div style="padding-top: 20px">
            <Button  type="primary" @click="add('SIMPLE')">增加</Button>
            <Button  type="primary" @click="add('EXTRA')">增加其它</Button>
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
      <Form ref="formCheckBox" :model="formCheckBox" :rules="rule" :label-width="100">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="formCheckBox.topic"></Input>
        </FormItem>
        <FormItem label="最少选择个数" prop="minChoice">
          <Input type="text" v-model="formCheckBox.minChoice" style="width: 200px"></Input>
        </FormItem>
        <FormItem label="最多选择个数" prop="maxChoice">
          <Input type="text" v-model="formCheckBox.maxChoice" style="width: 200px"></Input>
        </FormItem>
        <FormItem label="选项">
          <Table  border stripe :columns="columns" :data="formCheckBox.items"></Table>
          <div style="padding-top: 20px">
            <Button  type="primary" @click="add('SIMPLE')">增加</Button>
            <Button  type="primary" @click="add('EXTRA')">增加其它</Button>
          </div>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </Modal>
    <!--矩阵-->
    <Modal
      v-model="model.formMatrix"
      :title="modal_title.formMatrix"
      width="600">
      <Form ref="formMatrix" :model="formMatrix" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="formMatrix.topic"></Input>
        </FormItem>
        <FormItem label="行">
          <Row v-for="item,index in formMatrix.rows" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <Input type="text" v-model="formMatrix.rows[index]"></Input>
            </Col>
            <Col span="4" offset="1">
              <Button type="ghost" @click="deleteMatrixItem(index,'rows')">删除</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="12">
              <Button type="dashed" long  icon="plus-round" @click="addMatrixItem('rows')">添加行</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="列">
          <Row v-for="item,index in formMatrix.cols" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <Input type="text" v-model="formMatrix.cols[index]"></Input>
            </Col>
            <Col span="4" offset="1">
              <Button type="ghost" @click="deleteMatrixItem(index,'cols')">删除</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="12">
              <Button type="dashed" long  icon="plus-round" @click="addMatrixItem('cols')">添加列</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="分值">
          <Row v-for="item,index in formMatrix.scores" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <Input type="text" v-model="formMatrix.scores[index]"></Input>
            </Col>
            <Col span="4" offset="1">
              <Button type="ghost" @click="deleteMatrixItem(index,'scores')">删除</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="12">
              <Button type="dashed" long  icon="plus-round" @click="addMatrixItem('scores')">添加分值</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </Modal>
    <!--排序-->
    <Modal
      v-model="model.formSort"
      :title="modal_title.formSort"
      width="600">
      <Form ref="formSort" :model="formSort" :rules="rule" :label-width="100">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="formSort.topic"></Input>
        </FormItem>
        <FormItem label="最多选择个数" prop="maxChoice">
          <Input type="text" v-model="formSort.maxChoice" style="width: 200px"></Input>
        </FormItem>
        <FormItem label="选项">
          <Table  border stripe :columns="columns" :data="formSort.items"></Table>
          <div style="padding-top: 20px">
            <Button  type="primary" @click="add('SIMPLE')">增加</Button>
            <Button  type="primary" @click="add('EXTRA')">增加其它</Button>
          </div>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </Modal>
    <!--开放-->
    <Modal
      v-model="model.formOpen"
      :title="modal_title.formOpen"
      width="600">
      <Form ref="formOpen" :model="formOpen" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="formOpen.topic"></Input>
        </FormItem>
        <FormItem label="选项">
          <Row v-for="item,index in formOpen.labels" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <Input type="text" v-model="formOpen.labels[index]"></Input>
            </Col>
            <Col span="4" offset="1">
              <Button type="ghost" @click="deleteMatrixItem(index,'labels')">删除</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="12">
              <Button type="dashed" long  icon="plus-round" @click="addMatrixItem('labels')">添加行</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="最大字数" prop="maxLength">
          <Input type="text" v-model="formOpen.maxLength" style="width: 200px"></Input>
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
      <Form ref="formNote" :model="formNote" :rules="rule" :label-width="80">
        <FormItem label="备注" prop="content">
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

