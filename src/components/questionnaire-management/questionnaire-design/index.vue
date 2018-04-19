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
                    :record="item"
                    :index="index"
                    :key="index"/>
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
            <tTable @handleConfirm="addItems"/>
          </div>
        </Col>
      </Row>
    </Content>
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
  .ivu-layout-content{
    border: 2px solid gainsboro;
    border-radius: 5px;
    box-sizing: border-box;
  }
</style>

