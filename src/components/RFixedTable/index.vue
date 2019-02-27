<template>
  <div class="test">
    <div class="r-table">
      <div class="fixed-column">
        <div class="column-group">
          <div class="fixed-column-info">
            <span class="cost-element left">Cost item groups</span>
            <span class="cost-element right">Total</span>
          </div>
          <div class="fixed-column-info">
            <span class="ligth">PAYMENT FROM THE CLIENT</span>
          </div>
        </div>
        <div class="column-body"/>
      </div>
      <div class="rested-column">
        <div class="column-group">
          <div class="rested-column-filter">
            <div class="rested-column-filter-header">
              <LabelComponent value="week 5, 29 January" isHeader/>
              <LabelComponent isHeader />
              <LabelComponent isHeader />
              <LabelComponent isHeader />
              <LabelComponent isHeader />
              <LabelComponent isHeader value="week 6, 5 February"/>
            <!-- <slot name="header" /> -->
            </div>
            <div class="rested-column-filter-values">
              <!-- <slot name="values" /> -->
              <div class="wrapper-box">
                <LabelComponent value="29"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="30"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="31"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="1"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="2"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="3"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="4"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="5"/>
              </div>
              <div class="wrapper-box">
                <LabelComponent value="6"/>
              </div>
            </div>
          </div>
          <div class="rested-column-totals">
            <!-- <slot name="totals" /> -->
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
            <div class="wrapper-box">
              <r-input :editMode="false" value="1245125" white bbox />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->
      <!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->
      <div ref="mainTable" class="table-fixed">
        <table>
          <tr>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </table>
      </div>
      <div ref="secondTable" class="table-fixed">
        <table>
          <tr>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
            <th>Table Header</th>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </table>
      </div>
      <!--
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
    -->
    </div>
  </div>
</template>

<script>
  import LabelComponent from './label.vue'
  import RInput from '../RInput/index.vue'
  export default {
    props: {},
    components: {
      LabelComponent,
      RInput
    },
    data () {
      return {}
    },
    mounted () {
      /*
      let fcBody = this.$refs.fcBody
      let rcBody = this.$refs.rcBody
      let rcHead = this.$refs.rcHead
      rcBody.addEventListener('scroll', function () {
        rcHead.scrollLeft = this.scrollLeft
        fcBody.scrollTop = this.scrollTop
      }, { passive: true })
      */

      let mainTable = this.$refs.mainTable
      console.log(mainTable)
      console.log(this.$refs)

      let secondTable = this.$refs.secondTable
      mainTable.addEventListener('scroll', function () {
        secondTable.scrollLeft = this.scrollLeft
        secondTable.scrollTop = this.scrollTop
      }, { passive: true })
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
$blockHeight: 62px;
$headerBlock: 122px;
table, tr, td {
  border: 1px solid orange;
}

.table-fixed {
  width: 200px;
  height: 150px;
  overflow: auto;
}

.inline {
  display: inline-block;
  min-width: 128px;
  height: 100%;
}
.r-table {
  display: flex;
  position: relative;
  width: 100%;
  font-family: 'Roboto';
  border-top: 1px solid $gray_4;
}
.fixed-column {
  position: relative;
  min-width: 352px;
}
.column-group {
  position: relative;
  height: $headerBlock;
}
.fixed-column-info {
  position: relative;
  height: calcBlockHeight($headerBlock, 2);
  border-bottom: 2px solid $gray_5;
}
.column-body {
  position: relative;
}
.rested-column {
  position: relative;
  width: 100%;
}
.rested-column-info {
  position: relative;
  width: 100%;
  height: calcBlockHeight($headerBlock, 2);
}
.rested-column-filter, .rested-column-totals {
  position: relative;
  width: 100%;
  height: calcBlockHeight($headerBlock, 2);
  margin-left: 5px;
}
.rested-column-filter-header, .rested-column-filter-values {
  width: 100%;
  height: calcBlockHeight($headerBlock, 4);
}
.cost-element {
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  font-style:normal;
  font-weight:700;
  color: $gray_6;
  top: calc(#{calcBlockHeight($headerBlock, 2)} / 2 - 16px);
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
  top: calc(#{calcBlockHeight($headerBlock, 2)} / 2 - 12px);
  font-size: 12px;
  color: $gray_6;
}
.wrapper-box {
  display: inline-block;
  height: 100%;
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

.rested-column {
  width: 500px;
}

.rested-column > .column-group {
    //padding-right: 50px;
    overflow: hidden;
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

        table.GeneratedTable {
        width: 100%;
        background-color: #ffffff;
        border-collapse: collapse;
        border-width: 2px;
        border-color: #ffcc00;
        border-style: solid;
        color: #000000;
        }

        table.GeneratedTable td, table.GeneratedTable th {
        border-width: 2px;
        border-color: #ffcc00;
        border-style: solid;
        padding: 3px;
        width: 100px;
        }

        table.GeneratedTable thead {
        background-color: #ffcc00;
        }

</style>
