<template>
  <div class="container" :style="componentStyle">
    <div class="card-deck mb-3 text-center">
      <slot/>
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

</style>
