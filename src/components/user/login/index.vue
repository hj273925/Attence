<template>
  <div class="login">
    <Card :bordered="false" style="width: 500px">
      <p slot="title">Welcome to 区块链签到统计系统</p>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" >
        <FormItem label="用户名" prop="phone">
          <Input type="text" v-model="formCustom.phone"></Input>
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

