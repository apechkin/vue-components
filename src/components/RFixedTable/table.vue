<template>
  <div>
    <hr>
    <div class="header-block">
      <div class="left-block">
        <div class="left-block-total">
          <span>Cost item groups</span>
          <span>Total</span>
        </div>
      </div>
      <div class="right-block">
        <table class="header-table">
          <tr>
            <td v-for="(key, index) in dates" :key="index">
              <div class="header-sub"><strong>week 5, 29 January</strong></div>
            </td>
          </tr>
          <tr>
            <td v-for="(key, index) in dates" :key="index">
              <div class="header-date">{{key}}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rows: [1, 2],
        dates: [29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
$blockHeight: 68px;
.header-block {
  display: block;
  position: relative;
  width: 100%;
  font-family:'Roboto', 'Roboto-Bold', 'Roboto Bold';
}
.left-block {
  display: inline-block;
  vertical-align: top;
  width: 460px;
  height: $blockHeight;
  padding: 2px;
  border-bottom: 2px solid $gray_4;
}
.right-block {
  display: inline-block;
  vertical-align: top;
  height: $blockHeight;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
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
.left-block-total {
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
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
