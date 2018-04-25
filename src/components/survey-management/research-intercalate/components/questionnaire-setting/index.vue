<template>
  <div>
    <Form ref="formResearch" :model="record" :rules="rule" label-position="right" :label-width="100">
      <FormItem label="调研名" prop="name">
        <Input v-model="record.name" style="width: 300px"></Input>
      </FormItem>
      <FormItem label="问卷" prop="id">
        <Select v-model="record.id" style="width:200px">
          <Option v-for="item in QuestionNaireList" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </FormItem>
      <FormItem label="起止时间" prop="date">
        <DatePicker type="daterange" split-panels v-model="record.date" on-change="changeDate" style="width: 200px"></DatePicker>
      </FormItem>
      <FormItem label="是否自动催填" prop="autoResend">
        <i-switch v-model="record.autoResend">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>
      </FormItem>
      <FormItem label="催填间隔" prop="resendInterval" v-if="record.autoResend">
        <InputNumber :min="0" v-model="record.resendInterval"></InputNumber>
      </FormItem>
      <FormItem label="状态" prop="status">
        <i-switch v-model="record.status">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </FormItem>
      <FormItem label="筛选参数">
        <Table  border stripe @on-selection-change="selectChange" :loading="tableLoading" :columns="columns" :data="rows" ref="selection"></Table>
      </FormItem>
    </Form>
    <div class="footer">
      <Button type="primary" @click="createResearch">创建</Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

