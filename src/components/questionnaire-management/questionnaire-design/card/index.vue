<template>
  <div>
    <p class="title">{{record.topic}}</p>
    <RadioGroup v-if="record.nodeType === 'Q_SINGLE_CHOICE'">
      <Radio :label="item.label" v-for="item in record.items"></Radio>
    </RadioGroup>
    <CheckboxGroup v-if="record.nodeType === 'Q_MULTIPLE_CHOICE'">
      <Checkbox :label="item.label" v-for="item in record.items"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script src="./index.js"></script>

<style scoped="">
  .title{
    font-weight: bolder;
    margin-bottom: 20px;
  }
</style>

