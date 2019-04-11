<template>
  <div class="area" :style="componentStyle">
    <slot />
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
  .area {
    position: relative;
    display: flex;
    background-color: white;
    width: 100%;
    height: 100%;
  }
</style>
