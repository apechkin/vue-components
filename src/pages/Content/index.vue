<template>
  <div class="container">
    <h3>Draggable elements with draggable block</h3>
    <div class="d-flex flex-row flex-wrap">
      <edrag-input
        v-for="item in items" :key="item.id"
        :value="item.value"
        @accepted="data => {handleAccept(data, item.id)}"
        currency="RUR"/>
      <edrag-input
        v-for="item in items" :key="`ne_${item.id}`"
        :value="item.value"
        @accepted="data => {handleAccept(data, item.id)}"
        currency="RUR"/>
    </div>
    <div class="row">
      123
    </div>
    <!--
    <div class="total-wrapper">
      <div class="fix-column">
        <div class="thead">
          <span>Int1</span>
        </div>
        <div class="tbody">
          <div class="trow">
            <span>Lorem</span>
          </div>
          <div class="trow">
            <span>Lorem</span>
          </div>
          <div class="trow">
            <span>Lorem</span>
          </div>
          <div class="trow">
            <span>Lorem</span>
          </div>
        </div>
      </div>
      <div class="rest-columns">
        <div class="thead">
          <span>Int2</span><span>Int3</span><span>Int4</span><span>Int5</span>
        </div>
        <div class="tbody">
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
    -->
    <div class="row">
      <input type="button" value="checkState" @click="checkState">
    </div>
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  export default {
    props: {},
    components: {
      EdragInput
    },
    data () {
      return {
        items: [
          {
            id: 1,
            value: 15000
          },
          {
            id: 2,
            value: 25000
          },
          {
            id: 3,
            value: 35000
          },
          {
            id: 4,
            value: 45000
          },
          {
            id: 5,
            value: 55000
          },
          {
            id: 6,
            value: 65000
          }
        ]
      }
    },
    mounted () {
      /*
      let fcBody = document.querySelector('.fix-column > .tbody')
      let rcBody = document.querySelector('.rest-columns > .tbody')
      let rcHead = document.querySelector('.rest-columns > .thead')
      rcBody.addEventListener('scroll', function () {
        rcHead.scrollLeft = this.scrollLeft
        fcBody.scrollTop = this.scrollTop
      }, { passive: true })
      */
    },
    methods: {
      checkState (e) {
        e.preventDefault()
      },
      handleAccept (data, id) {
        const { status, value } = data
        if (status === 'changed') {
          this.initialState['items'] = this.initialState['items'].map(item => {
            return item.id === id ? { ...item, ...{ value: value } } : item
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.drag-example {
  background-color: $gray_4;
}
 .drag-orange {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: $orange_3;
  }
// for table
.fix-column {
    float: left;
}
.thead {
    height: 40px;
    white-space: nowrap;
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
    width: 120px;
    box-shadow: inset 0 0 1px 0 rgba(0,0,0,.5);
    line-height: 80px;
    height: 80px;
}
.tbody {
    height: 300px;
    overflow: auto;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.fix-column > .tbody {
    overflow: hidden;
    /*padding-bottom: 50px;*/
}
/*.fix-column > .tbody > .trow:last-child {margin-bottom: 50px;}*/

.fix-column > .tbody > .trow {
    margin-top: -50px;
    margin-bottom: 50px;
}
.fix-column > .tbody > .trow:first-child {
    margin-top: 0px;
}

.rest-columns {
    width: 350px;
}
.rest-columns > .thead {
    /*padding-right: 50px;*/
    overflow: hidden;
}
/*.rest-columns > .thead > :last-child {margin-right: 50px;}*/
.rest-columns > .thead > span {
    margin-right: 50px;
    margin-left: -50px;
}
.rest-columns > .thead > :first-child {margin-left: 0px;}
</style>
