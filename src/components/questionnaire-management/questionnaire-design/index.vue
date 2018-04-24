<template>
  <div>
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>问卷管理</BreadcrumbItem>
      <BreadcrumbItem>问卷设计</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{background: '#fff'}">
      <Row>
        <Col span="18">
          <div class="menu-list">
             <tCard v-for="item,index in record.items"
                    @editTitle ='editItem'
                    @deleteTitle="deleteItem"
                    @switchingPosition="switchingPosition"
                    :length="record.items.length"
                    :record="item"
                    :index="index"
                    :key="index"/>
          </div>
        </Col>
        <Col span="6">
          <div class="tool">
            <div class="tool-menu">
              <div>
                <Form ref="formCustom" :model="record" rule='ruleCustom' :label-width="80">
                  <FormItem label="名字" prop="name">
                    <Input type="text" v-model="record.name"></Input>
                  </FormItem>
                  <FormItem label="标题" prop="name">
                    <Input type="text" v-model="record.title" ></Input>
                  </FormItem>
                  <FormItem label="副标题" prop="name">
                    <Input type="text" v-model="record.subTitle" ></Input>
                  </FormItem>
                  <FormItem label="状态" prop="status">
                    <Select v-model="record.status" placeholder="选择状态">
                      <Option v-for="item in statusList" :value="item.label" :key="item.label">{{ item.value }}</Option>
                    </Select>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" @click="operateQuestionnaire">保存</Button>
                    <Button type="ghost" @click="preview"  style="margin-left: 8px">预览</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
            <tTable @handleConfirm="addItems"/>
          </div>
        </Col>
      </Row>
    </Content>
    <!--单选-->
    <Modal
      v-model="model.formRadio"
      :title="modal_title.formRadio"
      width="600">
      <Form ref="formRadio" :model="data" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="data.topic"></Input>
        </FormItem>
        <FormItem label="选项">
          <Table  border stripe :columns="columns" :data="data.items"></Table>
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
      <Form ref="formCheckBox" :model="data" :rules="rule" :label-width="100">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="data.topic"></Input>
        </FormItem>
        <FormItem label="最少选择个数" prop="minChoice">
          <InputNumber v-model="data.minChoice" style="width: 200px"></InputNumber>
        </FormItem>
        <FormItem label="最多选择个数" prop="maxChoice">
          <InputNumber v-model="data.maxChoice" style="width: 200px"></InputNumber>
        </FormItem>
        <FormItem label="选项">
          <Table  border stripe :columns="columns" :data="data.items"></Table>
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
      <Form ref="formMatrix" :model="data" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="data.topic"></Input>
        </FormItem>
        <FormItem label="行">
          <Row v-for="item,index in data.rows" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <Input type="text" v-model="data.rows[index]"></Input>
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
          <Row v-for="item,index in data.cols" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <Input type="text" v-model="data.cols[index]"></Input>
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
          <Row v-for="item,index in data.scores" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <InputNumber v-model="data.scores[index]"></InputNumber>
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
      <Form ref="formSort" :model="data" :rules="rule" :label-width="100">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="data.topic"></Input>
        </FormItem>
        <FormItem label="最多选择个数" prop="maxChoice">
          <InputNumber v-model="data.maxChoice" style="width: 200px"></InputNumber>
        </FormItem>
        <FormItem label="选项">
          <Table  border stripe :columns="columns" :data="data.items"></Table>
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
      <Form ref="formOpen" :model="data" :rules="rule" :label-width="80">
        <FormItem label="题目" prop="topic">
          <Input type="text" v-model="data.topic"></Input>
        </FormItem>
        <FormItem label="选项">
          <Row v-for="item,index in data.labels" :key="index" style="margin-bottom: 10px">
            <Col span="16">
              <Input type="text" v-model="data.labels[index]"></Input>
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
          <InputNumber v-model="data.maxLength" style="width: 200px"></InputNumber>
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
      <Form ref="formNote" :model="data" :rules="rule" :label-width="80">
        <FormItem label="备注" prop="content">
          <Input type="textarea" style="width: 400px" :autosize="{minRows: 3,maxRows: 5}" v-model="data.content"></Input>
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

<style  scoped>
  .ivu-table-cell .ivu-input-number{
    width: 60px !important;
  }
  .menu-list{
    height: calc(100vh - 185px);
    min-height: 500px;
    overflow: auto;
    padding: 20px;
  }
  .menu-list::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .menu-list::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .menu-list::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .tool{
    border-left: 2px solid gainsboro;
    max-height:calc(100vh - 182px);
    min-height: 500px;
    overflow: auto;
  }
  .tool-menu{
    border-bottom: 2px solid gainsboro;
    padding-right: 20px;
    padding-top: 20px;
  }
  .ivu-layout-content{
    border: 2px solid gainsboro;
    border-radius: 5px;
    box-sizing: border-box;
  }
</style>

