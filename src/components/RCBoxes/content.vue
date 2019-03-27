<template>
  <div :columm="columm" class="content" :style="{height}">
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      columm: Boolean,
      height: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  @import "../../assets/style.scss";
  .content {
    display: flex;
    width: 100%;
    flex-grow: 1;
    border-style: solid;
    border-color: $gray_2;
    border-width: 0px;
    border-right-width: 1px;
    &:last-child {
      border-right-width: 0px;
    }
    &[columm] {
      flex-direction: column;
      > * {
        border-right-width: 0px;
        border-bottom-width: 1px;
        &:last-child {
          border-bottom-width: 0px;
        }
      }
    }
  }
</style>
