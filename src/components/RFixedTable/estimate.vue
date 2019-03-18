<template>
  <div class="content-block">
    <div class="left-block" ref="items">
      <table>
        <tbody>
          <tr v-for="estimate in estimates" :key="`${uuidv4()}-${estimate.id}`">
            <td>
              <div class="estimate-content">
                <div class="estimate-name" @click="handleClick(estimate.id)">
                  {{estimate.name}}
                </div>
                <div class="estimate-total">
                  <r-text value="1200000" separate sign="-" :styles="{'background-color': 'transparent'}" />
                </div>
                <div v-show="isUnAllocated" class="estimate-unallocated">
                  <r-text value="80000" separate :styles="{'background-color': '#f1f3f5'}" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="right-block" :style="{width}">
      <r-mask @userScroll="evt => $emit('userScroll', evt)" ref="mask" :setScrollLeft="setScrollLeft">
        <table>
          <tbody>
            <tr v-for="est in estTotalContent" :key="`${uuidv4()}/-${est.id}`">
              <td v-for="data in est.calendar" :key="`${uuidv4()}${est.id}-${data.fullDate}`">
                <edrag-input
                  :dataTransfer="{data, id: est.id, name: est.name}"
                  :value="data.total"
                  @accepted="data => $emit('accepted', {data, id:est.id})"
                  currency="RUR"
                  sign="-"
                  :key="`${uuidv4()}drag-${est.id}-${data.fullDate}`"/>
              </td>
            </tr>
            <!--
            <tr v-for="est in estTotalContent" :key="`${uuidv4()}/-${est.id}`">
              <td v-for="data in est.totals" :key="`${uuidv4()}${est.id}-${data.fullDate}`">
                <edrag-input
                  :dataTransfer="{data, id: est.id, name: est.name}"
                  :value="data.total"
                  @accepted="data => $emit('accepted', {data, id:est.id})"
                  currency="RUR"
                  sign="-"
                  :key="`${uuidv4()}drag-${est.id}-${data.fullDate}`"/>
              </td>
            </tr>
            -->
          </tbody>
        </table>
      </r-mask>
    </div>
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RText from '@/RText/index.vue'
  import RMask from '@/RScroll/index.vue'
  import uuid from 'uuid/v4'
  export default {
    props: {
      width: String,
      estimates: Array,
      estTotalContent: Object,
      isUnAllocated: {
        type: Boolean,
        default: false
      },
      setScrollLeft: [Number, String]
    },
    data () {
      const uuidv4 = uuid
      return {
        uuidv4
      }
    },
    components: {
      EdragInput,
      RText,
      RMask
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
    border-collapse: collapse;
  }
}
.right-block {
  height: $tbl_estimate_height;
  margin-bottom: 5px;
  padding-bottom: 5px;
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
.estimate-content {
  @extend .df-center-jccenter;
  height: 100%;
  width: inherit;
  position: relative;
  border-bottom: 1px solid $gray_4;
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
  min-height: $tbl_ce_height - 1px;
  height: $tbl_ce_height - 1px;
}
</style>
