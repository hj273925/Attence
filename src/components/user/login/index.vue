<template>
  <div class="login">
    <Card :bordered="false" style="width: 500px">
      <p slot="title">用户登录</p>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" >
        <FormItem label="手机号" prop="phone">
          <Input type="text" v-model="formCustom.phone"></Input>
        </FormItem>
        <FormItem label="验证码" prop="code">
          <Row>
            <Col span="12">
             <Input type="text" v-model="formCustom.code"></Input>
            </Col>
            <Col span="8" offset="1">
             <img :src="identifyImage" alt="" style="height: 30px;cursor: pointer" @click="changeIdentify">
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button type="primary" :disabled="formCustom.code.length !== 5" @click="sendSmsPwd">发送密码</Button>
        </FormItem>
        <FormItem label="密码" prop="pwd">
          <Input type="text" v-model="formCustom.pwd"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
          <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">清空</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script src="./index.js"></script>

<style>
  .login{
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
</style>

