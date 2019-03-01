<template>
  <div class="text">
    {{value}}
  </div>
</template>

<script>
  export default {
    props: {
      value: [String, Number]
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
@import "../../assets/style.scss";
.text {
  @extend .df-center-jccenter;
  min-width: 100%;
  min-height: 100%;
}
</style>
