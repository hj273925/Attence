<template>
  <div>
    <Table border stripe :columns="columns" :data="data"></Table>
    <div class="footer">
      <Button type="primary" @click="prev">上一步</Button>
      <Button type="primary">筛选</Button>
      <Button type="primary" @click="next">下一步</Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

