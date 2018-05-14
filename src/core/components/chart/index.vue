<template>
  <div class="charts">
    <div :id="id" style="height: 300px;width: 1000px">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Schart',
  props: {
      id: {type: String, required: true},
      options: {type: Object, required: true}
//      title: {type: String, required: true}
  },
  mounted() {
    const myChart = echarts.init(document.getElementById(this.id));
    // 指定图表的配置项和数据
    const {options} = this
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(options);
  }
}
</script>

<style>

</style>
