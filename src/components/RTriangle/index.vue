<template>
  <div
    class="triangle"
    :style="styles"
    :class="{'left': left, 'top': top, 'bottom': bottom, 'right': right}" />
</template>

<script>
  export default {
    props: {
      styles: Object,
      left: {
        type: Boolean,
        default: false
      },
      top: {
        type: Boolean,
        default: false
      },
      bottom: {
        type: Boolean,
        default: false
      },
      right: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
@import "../../assets/mixins.scss";

.right {
  @include triangle(20px, 'right', $gray_3);
}
.left {
  @include triangle(20px, 'left', $gray_3);
}
.top {
  @include triangle(20px, 'top', $gray_3);
}
.bottom {
  @include triangle(20px, 'bottom', $gray_3);
}
</style>
