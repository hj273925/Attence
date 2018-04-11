<template>
  <div>
    <Table  border stripe :columns="columns" :data="rows"></Table>
    <div style="padding-top: 20px">
      <Button  type="primary" @click="add">增加</Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

