<template>
  <div class="content-block cashflow-total">
    <div class="left-block">
      <div class="left-block-content">
        cumulative cash flow
      </div>
    </div>
    <div ref="flow" class="right-block" :style="{width}">
      <r-mask>
        <table>
          <tbody>
            <tr>
              <td v-for="(vdata, index) in flowData" :key="`${uuidv4()}-${index}`"
                  :class="{
                    'green': Number(vdata.cumulative) >= 0,
                    'red': Number(vdata.cumulative) < 0
                  }"
              >
                <r-text :value="vdata.cumulative" separate :styles="{'background-color': '#f1f3f5'}">
                  <template v-slot:currency-icon>
                    <!-- {{'$'}} -->
                  </template>
                </r-text>
              </td>
            </tr>
          </tbody>
        </table>
      </r-mask>
    </div>
  </div>
</template>

<script>
  import uuid from 'uuid/v4'
  import RText from '@/RText/index.vue'
  import RMask from '@/RScroll/index.vue'
  export default {
    props: {
      width: String,
      flowData: Array
    },
    data () {
      const uuidv4 = uuid
      return {
        uuidv4
      }
    },
    components: {
      RText,
      RMask
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
.green {
  color: $green_6;
}
.red {
  color: $red_6;
}
</style>
