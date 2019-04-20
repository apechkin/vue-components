<template>
  <div class="blink-container">
    <div class="blink-button" :style="componentStyle">
      <slot v-if="$slots.default"/>
      <span v-else>Confirm</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      componentStyle: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style.scss";
  * {
    box-sizing: border-box
  }
  .blink-container {
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
    text-decoration: none;
    .blink-button {
      position: relative;
      text-decoration: none;
      overflow: hidden;
      &:before  {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1.5em;
        height: 100%;
        background-color: rgba($blue_4, 0.6);
        transform: translateX(-4em) skewX(-45deg);
      }
      &:hover {
        &:before {
          animation: move-blink 0.6s;
        }
      }
    }
  }
  @keyframes move-blink {
    from {
      transform: translateX(-4em) skewX(-45deg);
    }
    to {
      transform: translateX(10em) skewX(-45deg);
    }
  }
</style>
