<template>
  <div class="content-block cashflow-total">
    <div class="left-block">
      <div class="left-block-content">
        cash flow by day
      </div>
    </div>
    <div ref="flow" class="right-block" :style="{width}">
      <table>
        <tbody>
          <tr>
            <td v-for="(vdata, index) in fundsAndDates" :key="`${uuidv4()}-${index}`">
              <r-text :value="vdata.fromClient" separate :styles="{'background-color': '#f1f3f5'}">
                <template v-slot:currency-icon>
                  {{'$'}}
                </template>
              </r-text>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import uuid from 'uuid/v4'
  import RText from '@/RText/index.vue'
  export default {
    props: {
      width: String,
      fundsAndDates: Array
    },
    data () {
      const uuidv4 = uuid
      return {
        uuidv4
      }
    },
    components: {
      RText
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
@import "../../assets/mixins.scss";
.left-block-content {
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration-style: solid;
  color: $gray_6;
}
.right-block {
  table {
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 2px;
    td {
      height: 64px;
      width: 1px;
      min-width: 127px;
      vertical-align: text-bottom;
      font-size: 12px;
    }
  }
}
</style>
