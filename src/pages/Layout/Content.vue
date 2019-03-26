<template>
  <div class="content">
    <modal-window/>
    <slot/>
  </div>
</template>
<script>
  import modalWindow from '@/RModal'
  export default {
    components: {
      modalWindow
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    min-height: 90vh;
  }
</style>
