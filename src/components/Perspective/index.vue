<template>
  <div class="perspective" :style="componentStyle">
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
  .perspective {
    transform-style: preserve-3d;
    perspective: 1000px;
  }
</style>
