<template>
  <div class="box">
    <div v-if="title || $slots.icon" class="box-title">
      <div v-if="$slots.icon" class="box-icon"><slot name="icon"/></div>
      <h2>{{title}}</h2>
    </div>
    <div v-if="$slots.default" class="box-content">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  @import "../../assets/style.scss";
  .box {
    position: relative;
    z-index: 1;
    height: inherit;
    border-radius: inherit;
    &-title + &-content {
      height: calc(100% - 48px);
      overflow: auto;
    }
    &-title {
      display: flex;
      background: #FFF;
      height: 48px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      font-style: normal;
      white-space: nowrap;
      margin: 0px;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      border-bottom: 1px solid $gray_2;
      a {
        color: $blue_5
        }
      h1, h2, h3, h4, h5, h6 {
        white-space: inherit;
        font-weight: inherit;
        font-size: inherit;
        font-style: inherit;
        margin: inherit;
        margin-right: 8px;
      }
    }
    &-content {
      > * {border-bottom: 1px solid $gray_2}
      > :last-child {border-bottom: 0}
    }
  }
</style>
