<template>
  <div class="content-block">
    <div class="left-block">
      <div class="left-block-content">
        <span>Cost item groups</span>
        <span>Total</span>
      </div>
    </div>
    <div ref="header" class="right-block" :style="{width}">
      <table class="header-table">
        <tr>
          <td v-for="(vdata, index) in filteredDates" :key="`headLine_${index}`">
            <div class="header-sub"><strong>{{vdata.headLine}}</strong></div>
          </td>
        </tr>
        <tr>
          <td v-for="(vdata, index) in filteredDates" :key="`dateValue_${index}`">
            <div class="header-date">{{vdata.dateValue}}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      width: String,
      filteredDates: Array
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
  height: $blockHeight / 2;
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
</style>
