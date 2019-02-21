<template>
  <div class="r-table">
    <div class="fixed-column">
      <div class="column-group">
        <div class="column-info">
          <span class="cost-element left">Cost item groups</span>
          <span class="cost-element right">Total</span>
        </div>
        <div class="column-info">
          <span class="ligth">PAYMENT FROM THE CLIENT</span>
        </div>
      </div>
      <div class="column-body"/>
    </div>
    <div class="rested-column">2</div>
    <div class="row">
      <div class="fix-column">
        <div class="thead">
          <div>Cost item groups</div>
          <div>Total</div>
        </div>
        <div class="tbody" ref="fcBody">
          <div class="trow">
            <span>Производство стендов, дополнительног…</span>
          </div>
          <div class="trow">
            <span>Веб-сайты и приложения: разработка, хостинг</span>
          </div>
          <div class="trow">
            <span>POSM (сувениры + промоформа)</span>
          </div>
          <div class="trow">
            <span>Персонал (хостес и т.д.)</span>
          </div>
        </div>
      </div>
      <div class="rest-columns">
        <div class="thead" ref="rcHead">
          <span>Int2</span><span>Int3</span><span>Int4</span><span>Int5</span>
        </div>
        <div class="tbody" ref="rcBody">
          <div class="trow">
            <span>ipsum</span><span>dolor</span><span>sit</span><span>amet</span>
          </div>
          <div class="trow">
            <span>ipsum</span><span>dolor</span><span>sit</span><span>amet</span>
          </div>
          <div class="trow">
            <span>ipsum</span><span>dolor</span><span>sit</span><span>amet</span>
          </div>
          <div class="trow">
            <span>ipsum</span><span>dolor</span><span>sit</span><span>amet</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    data () {
      return {}
    },
    mounted () {
      let fcBody = this.$refs.fcBody
      let rcBody = this.$refs.rcBody
      let rcHead = this.$refs.rcHead
      rcBody.addEventListener('scroll', function () {
        rcHead.scrollLeft = this.scrollLeft
        fcBody.scrollTop = this.scrollTop
      }, { passive: true })
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
$blockHeight: 62px;
.r-table {
  position: relative;
  width: 100%;
  font-family: 'Roboto'
}
.fixed-column {
  position: relative;
  min-width: 352px;
}
.column-group {
  position: relative;
  height: 136px;
}
.column-info {
  position: relative;
  height: $blockHeight;
  border-bottom: 2px solid $gray_5;
}
.column-body {
  position: relative;
}
.rested-column {
  width: 100%;
  border: 1px solid goldenrod;
}
.cost-element {
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  font-style:normal;
  font-weight:700;
  color: $gray_6;
  top: calc(#{$blockHeight} / 2 - 16px);
}
.left {
  position: absolute;
  left: 0;
}
.right {
  position: absolute;
  right: 0;
}
.ligth {
  position: absolute;
  left: 0;
  top: calc(#{$blockHeight} / 2 - 12px);
  font-size: 12px;
  color: $gray_6;
}
//==================
.fix-column {
  float: left;
}
.thead {
    width: 352px;
    white-space: nowrap;
    border: 1px solid black;
}
.thead > span {
    display: inline-block;
    width: 120px;
    line-height: 40px;
    box-shadow: inset 0 0 1px 0 rgba(0,0,0,.5);
    background-color: rgba(255,0,0,.3);
    text-align: center;
}
.trow {
    white-space: nowrap;
}
.trow > span {
    display: inline-block;
    width: 352px;
    height: 54px;
}
.tbody {
    border: 1px solid red;
    height: 364px;
    overflow: auto;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.fix-column > .tbody {
    overflow: hidden;
    //padding-bottom: 50px;
}
//.fix-column > .tbody > .trow:last-child {margin-bottom: 50px;}

.fix-column > .tbody > .trow {
    //margin-top: -50px;
    //margin-bottom: 50px;
}
.fix-column > .tbody > .trow:first-child {
    margin-top: 0px;
}

.rest-columns {
    width: 350px;
}
.rest-columns > .thead {
    //padding-right: 50px;
    overflow: hidden;
}
//.rest-columns > .thead > :last-child {margin-right: 50px;}
.rest-columns > .thead > span {
    margin-right: 50px;
    margin-left: -50px;
}
.rest-columns > .thead > :first-child {margin-left: 0px;}

</style>
