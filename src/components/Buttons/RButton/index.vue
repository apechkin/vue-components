<template>
  <button :disabled="disabled" class="button" :style="componentStyle">
    <slot/>
  </button>
</template>

<script>
  export default {
    props: {
      disabled: Boolean,
      componentStyle: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/mixins.scss";
  @import "../../../assets/style.scss";
  .button {
    background-color: $blue_5;
    min-height: 32px;
    min-width: 72px;
    padding: 5px 10px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif, serif;
    color: white;
    margin: 0 10px;
    border: none;
    &[disabled] {
      background-color: $gray_3;
      color: white;
      &:after, &:before {
        background: #e9ecef;
      }
    }
  }
</style>
