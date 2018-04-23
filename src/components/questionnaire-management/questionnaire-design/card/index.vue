<template>
  <div>
    <Card style="margin-bottom: 20px">
      <ButtonGroup class="btn-group">
        <Button type="ghost" @click="switchingPosition('up')" :disabled="index === 0">上移</Button>
        <Button type="ghost" @click="switchingPosition('down')" :disabled="index === length - 1">下移</Button>
        <Button type="ghost" @click="editTitle">编辑</Button>
        <Button type="ghost" @click="deleteTitle">删除</Button>
      </ButtonGroup>
      <p slot="title">
        {{record.nodeType | titleTypeFilter}}
      </p>
      <p class="title">{{record.topic}}</p>
      <RadioGroup v-if="record.nodeType === 'Q_SINGLE_CHOICE' || 'Q_RANKING'" v-model="type">
        <Radio :label="item.label" v-for="item in record.items" :key="item.label"></Radio>
      </RadioGroup>
      <RadioGroup v-if="record.nodeType === 'Q_OPEN_ENDED'">
        <Radio :label="item" v-for="item in record.labels" :key="item"></Radio>
      </RadioGroup>
      <CheckboxGroup v-if="record.nodeType === 'Q_MULTIPLE_CHOICE'">
        <Checkbox :label="item.label" v-for="item in record.items" :key="item.label"></Checkbox>
      </CheckboxGroup>
      <div v-if="record.nodeType === 'Q_MATRIX'">

      </div>
      <p v-if="record.nodeType === 'NOTE'">{{record.content}}</p>
    </Card>
  </div>
</template>

<script src="./index.js"></script>

<style scoped="">
  .title{
    font-weight: bolder;
    margin-bottom: 20px;
  }
  .btn-group{
    position: absolute;
    top:0px;
    right: 0px;
  }
</style>

