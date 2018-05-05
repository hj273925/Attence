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
      <p class="title">{{record.idx}}.  {{record.topic}}</p>
      <RadioGroup v-if="record.nodeType === 'Q_SINGLE_CHOICE'" v-model="type">
        <Radio :label="item.label" v-for="item in record.items" :key="item.label"></Radio>
      </RadioGroup>
      <RadioGroup v-if="record.nodeType === 'Q_RANKING'" v-model="type">
        <Radio :label="item.label" v-for="item in record.items" :key="item.label"></Radio>
      </RadioGroup>
      <Form v-if="record.nodeType === 'Q_OPEN_ENDED'" inline>
        <FormItem :label="item" v-for="item in record.labels" :key="item">
          <Input type="text" ></Input>
        </FormItem>
      </Form>
      <CheckboxGroup v-if="record.nodeType === 'Q_MULTIPLE_CHOICE'">
        <Checkbox :label="item.label" v-for="item in record.items" :key="item.label"></Checkbox>
      </CheckboxGroup>
      <div v-if="record.nodeType === 'Q_MATRIX'">
        <table border="1" cellSpacing="0" class="ivu-table">
          <tr>
            <th>选项</th>
            <th v-for="item in record.rows">{{item}}</th>
          </tr>
          <tr v-for="item in record.cols">
            <th>{{item}}</th>
            <th v-for="item in record.scores">{{item}}分</th>
          </tr>
        </table>
      </div>
      <p v-if="record.nodeType === 'NOTE'">{{record.content}}</p>
    </Card>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
  .title{
    font-weight: bolder;
    margin-bottom: 20px;
  }
  .btn-group {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  table th {
    padding: 0px 18px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>

