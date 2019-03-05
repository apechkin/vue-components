<template>
  <div class="content-block">
    <div class="left-block">
      <table>
        <tr v-for="estimate in estimates" :key="estimate.id">
          <td>
            <div class="estimate-content">
              <div class="estimate-name" @click="handleClick(estimate.id)">
                {{estimate.name}}
              </div>
              <div class="estimate-total">
                <r-text value="-1200000" separate :styles="{'background-color': 'transparent'}" />
              </div>
              <div class="estimate-unallocated">
                <r-text value="80000" separate :styles="{'background-color': 'transparent'}" />
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="right-block" :style="{width}">
      <table>
        <tr v-for="est in estTotalContent" :key="`${est.id}`">
          <td v-for="data in est.totals" :key="`${est.id}-${data.fullDate}`">
            <edrag-input
              :value="data.total"
              @accepted="data => $emit('accepted', {data, id:est.id})"
              currency="RUR"/>
              <!--
            <r-text :value="data.total" separate :styles="{'top': '1px', 'bottom': '0'}" >
              <template v-slot:currency-icon>
                {{'$'}}
              </template>
            </r-text>
            -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RText from '@/RText/index.vue'
  export default {
    props: {
      width: String,
      estimates: Array,
      estTotalContent: Array
    },
    components: {
      EdragInput,
      RText
    },
    methods: {
      handleClick (id) {
        console.log('click on', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
@import "../../assets/mixins.scss";
.left-block {
  height: $tbl_estimate_height;
  overflow: hidden;
  table {
    width: 100%;
    table-layout: fixed;
  }
}
.right-block {
  height: $tbl_estimate_height;
}
.estimate-content {
  @extend .df-center-jccenter;
  height: 100%;
  width: inherit;
  position: relative;
}
.estimate-name {
  font-size: 14px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $blue_5;
  padding-right: 5px;
  &:hover {
    color: $orange_5;
  }
}
.estimate-total, .estimate-unallocated {
  @extend .df-center-jcend;
  font-size: 12px;
  flex-grow: 0;
  width: 127px;
  min-height: $tbl_ce_height;
  height: $tbl_ce_height;
}
.right-block {
  table {
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 2px;
    td {
      min-height: $tbl_ce_height + 2px;
      height: $tbl_ce_height + 2px;
      width: 1px;
      min-width: 127px;
      vertical-align: text-bottom;
      font-size: 12px;
    }
  }
}

</style>
