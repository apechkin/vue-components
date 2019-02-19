<template>
  <div class="item" :style="styles" :draggable="draggable">
    <slot/>
  </div>
</template>
<script>
  export default {
    props: {
      draggable: {
        type: Boolean,
        default: false
      },
      styles: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .item {
    display: inline-block;
    border: 4px salmon solid;
    height: 160px;
    width: 160px;
    margin: 10px;
    background-color: transparent;
  }
</style>
