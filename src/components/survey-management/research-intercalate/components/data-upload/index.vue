<template>
  <div>
    <Table border stripe :columns="columns" :data="rows"></Table>
    <div class="footer">
      <Button type="primary" @click="prev">上一步</Button>
      <Button type="primary">上传</Button>
      <Button type="primary" @click="next">下一步</Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style>

</style>

