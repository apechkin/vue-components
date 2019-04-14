<template>
  <div class="svg-button" :style="componentStyle">
    {{buttonCap}}
    <svg width="100" height="45" viewBox="0 0 100 45"
         xmlns="http://www.w3.org/2000/svg" >
      <rect x="0" y="0" fill="none" width="100" height="45" rx="5" ry="5" :style="svgStyle"/>
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      caption: String,
      componentStyle: Object,
      svgStyle: Object
    },
    computed: {
      buttonCap () {
        return this.caption || 'Confirm'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style.scss";
  * {
    box-sizing: border-box
  }
  .svg-button {
    position: relative;
    text-transform: uppercase;
    width: 100px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background-color: white;
    color: $blue_5;
    font-family: 'Roboto', sans-serif, serif;
    font-size: 14px;
    border-radius: 5px;
    &:hover {
      svg rect {
        stroke-width: 5;
        stroke-dasharray: 30, 250;
        stroke-dashoffset: 110;
      }
    }
    svg {
      position: absolute;
      top: 0;
      left: 0;
      rect {
        stroke: $blue_5;
        stroke-width: 1.5;
        transition: 0.5s;
        stroke-dasharray: 120, 0;
      }
    }
  }
</style>
