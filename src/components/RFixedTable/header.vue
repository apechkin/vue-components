<template>
  <div class="content-block">
    <div class="left-block" :class="{ 'scrolled': isScrollTop }">
      <table>
        <tbody>
          <tr>
            <td>
              <div class="left-block-content">
                <div class="block-content-name">
                  Cost item groups
                </div>
                <div class="block-content-total">
                  <r-text value="Total" :styles="{'background-color': 'transparent'}" />
                </div>
                <div v-show="isUnAllocated" class="block-content-unallocated">
                  <r-text value="Unallocated" :styles="{'background-color': '#f1f3f5'}" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div ref="header" class="right-block" :class="{ 'scrolled': isScrollTop }" :style="{width}">
      <table class="header-table">
        <tbody>
          <tr>
            <td v-for="(vdata, index) in fundsAndDates" :key="`headLine_${index}`">
              <div class="header-sub"><strong>{{vdata.headLine}}</strong></div>
            </td>
          </tr>
          <tr>
            <td v-for="(vdata, index) in fundsAndDates" :key="`dateValue_${index}`">
              <div class="header-date">{{vdata.dateValue}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import RText from '@/RText/index.vue'
  export default {
    props: {
      width: String,
      fundsAndDates: Array,
      isScrollTop: Boolean,
      isUnAllocated: {
        type: Boolean,
        default: false
      }
    },
    components: {
      RText
    },
    data () {
      return {
        rows: [1, 2]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
@import "../../assets/style.scss";
$blockHeight: 68px;
.header-sub {
  display: flex;
  align-items: center;
  font-style:normal;
  font-size:11px;
  color:#343A40;
  text-align:left;
  white-space:nowrap;
  text-transform:none;
  height: $blockHeight / 2;
}
.header-date {
  display: flex;
  width:127px;
  font-size: 13px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  height: ($blockHeight / 2) - 4px;
  color: $gray_6;
}
.header-table {
  tr:last-of-type {
    background-color: $gray_4;
  }
}
.header-total {
  position: relative;
}
.right-block {
  table {
    table-layout: fixed;
  }
}
.left-block {
  overflow: hidden;
  table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
}
.left-block-content {
  @extend .df-center-jccenter;
  min-height: 1px;
  height: 100%;
  width: inherit;
  position: relative;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  font-style:normal;
  font-weight:700;
  color: $gray_6;
}
.block-content-name {
  flex-grow: 1;
  overflow: hidden;
  padding-right: 5px;
}
.block-content-total, .block-content-unallocated {
  @extend .df-center-jcend;
  flex-grow: 0;
  width: 127px;
}

/*
.left-block-content {
  span {
    margin: 0 15px 0 0;
    font-weight: 700;
    text-decoration: none;
    font-size: 16px;
    font-style:normal;
    font-weight:700;
    color: $gray_6;
  }
  span:first-of-type {
    position: absolute;
    left: 0;
  }
  span:last-of-type {
    position: absolute;
    right: 0;
  }
}
*/
</style>
