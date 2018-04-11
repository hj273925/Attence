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
           <Card class="title-item" v-for="item in record.items">
             <ButtonGroup class="btn-group">
               <Button type="ghost">上移</Button>
               <Button type="ghost">下移</Button>
               <Button type="ghost">编辑</Button>
               <Button type="ghost">删除</Button>
             </ButtonGroup>
             <p>{{item.name}}</p>
           </Card>
          </div>
        </Col>
        <Col span="6">
          <div class="tool">
            <div class="tool-menu">
              <div>
                <Form ref="formCustom" :model="formCustom":label-width="80">
                  <FormItem label="名字" prop="name">
                    <Input type="text" v-model="formCustom.name" style="width: 200px"></Input>
                  </FormItem>
                  <FormItem label="状态" prop="status">
                    <Select v-model="formCustom.status" style="width:200px" placeholder="选择状态">
                      <Option v-for="item in statusList" :value="item" :key="item">{{ item }}</Option>
                    </Select>
                  </FormItem>
                  <FormItem>
                    <Button type="primary">保存</Button>
                    <Button type="ghost" style="margin-left: 8px">预览</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
            <div class="tool-list">
              <ul>
                <li><span>单选</span> <Button type="primary" @click="addTitle">添加</Button></li>
                <li><span>多选</span> <Button type="primary" @click="addTitle">添加</Button></li>
                <li><span>填空</span> <Button type="primary" @click="addTitle">添加</Button></li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Content>
    <Modal
      v-model="modal"
      :title="modal_title"
      width="600">
      <Form ref="formRadio" :model="formRadio" :rules="ruleRadio" :label-width="80">
        <FormItem label="题目" prop="name">
          <Input type="text" v-model="formRadio.topic"></Input>
        </FormItem>
        <FormItem label="选项" prop="content">
          <Input type="text" v-model="formRadio.content"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="ghost" @click="handleCancel('formRadio')">取消</Button>
        <Button type="primary" @click="handleConfirm('formRadio')">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
  .menu-list{
    height: calc(100vh - 182px);
    overflow: auto;
    padding: 20px;
  }
  .tool{
    border-left: 2px solid gainsboro;
    height:calc(100vh - 182px);
  }
  .tool-menu{
    border-bottom: 2px solid gainsboro;
    padding-top: 20px;
  }
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
  .title-item{
    border: 2px solid gainsboro;
    padding: 20px;
    border-radius: 5px;
    min-height: 100px;
    margin-bottom: 20px;
    position: relative;
  }
  .title-item p{
    font-weight: bolder;
  }
  .btn-group{
    position: absolute;
    top:0px;
    right: 0px;
  }
  .ivu-layout-content{
    border: 2px solid gainsboro;
    border-radius: 5px;
    box-sizing: border-box;
  }
</style>

