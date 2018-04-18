<template>
  <div>
    <Form :model="formCustom" label-position="left" :label-width="100">
      <FormItem label="问卷">
        <Select v-model="formCustom.name" style="width:200px">
          <Option v-for="item in nameList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="其它参数">
        <Select v-model="formCustom.parameter" style="width:300px">
          <Option v-for="item in nameList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="筛选参数">
        <Table border stripe :columns="columns" :data="data"></Table>
      </FormItem>
    </Form>
    <div class="footer">
      <Button type="primary">创建</Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

