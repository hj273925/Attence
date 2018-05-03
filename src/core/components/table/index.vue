<template>
  <div class="ivu-table-wrapper">
    <div class="ivu-table ivu-table-border">
      <div class="ivu-table-body">
        <table  cellSpacing="0" style="width: 100%">
          <tr>
            <th>
              <div class="ivu-table-cell">
                  <span>
                    {{rowTitle}}
                  </span>
              </div>
            </th>
            <th v-for="item in cols">
              <div class="ivu-table-cell">
                  <span>
                    {{item}}
                  </span>
              </div>
            </th>
          </tr>
          <tbody class="ivu-table-tbody">
          <tr v-for="item,index in rows" :key="item" class="ivu-table-row">
            <td>
              <div class="ivu-table-cell">
                    <span>
                      {{item}}
                    </span>
              </div>
            </td>
            <td v-for="item in cols">
              <div class="ivu-table-cell">
                    <span>
                      {{item}}
                    </span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stable',
  props: {
    rowTitle: { type: String, default: '选项' },
    rows: { type: Array, default: () => [] },
    cols: { type: Array, default: () => [] }
  }
}
</script>

<style>

</style>
