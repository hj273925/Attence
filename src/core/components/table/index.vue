<template>
  <div class="ivu-table-wrapper">
    <div class="ivu-table ivu-table-border">
      <div class="ivu-table-body">
        <table  cellSpacing="0" style="width: 100%">
          <tr>
            <th>
              <div class="ivu-table-cell">
                  <span>
                    {{rows[0].title}}
                  </span>
              </div>
            </th>
            <th v-for="item in cols">
              <div class="ivu-table-cell">
                  <span>
                    {{item[rows[0].key]}}
                  </span>
              </div>
            </th>
          </tr>
          <tbody class="ivu-table-tbody">
          <tr v-for="row,index in rows.slice(1)" :key="index" class="ivu-table-row">
            <td>
              <div class="ivu-table-cell">
                    <span>
                      {{row.title}}
                    </span>
              </div>
            </td>
            <td v-for="col in cols">
              <div class="ivu-table-cell">
                    <span>
                      {{col[row.key]}}
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
    rows: { type: Array, default: () => [] },
    cols: { type: Array, default: () => [] }
  }
}
</script>

<style>

</style>
