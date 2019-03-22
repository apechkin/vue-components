<template>
  <div v-if="$modal" class="pjm-dialog">
    <i class="pjm-dialog-plate"/>
    <div class="pjm-dialog-window">
      <component
        :is="$modal.component"
        v-bind="$modal.props"
        @resolve="resolve"
        @reject="reject"
      />
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      resolve () {
        this.$modalResolve(...arguments)
        this.$modal = null
      },
      reject () {
        this.$modalReject(...arguments)
        this.$modal = null
      }
    }
  }
</script>
<style lang="scss">
  .pjm-dialog {
    .kit-card-new {
      min-width: 500px;
    }
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-window {
      position: relative;
      display: inline-block;
    }
    &-plate {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      background: var(--gray_8);
      opacity: 0.3;
    }
  }
</style>
