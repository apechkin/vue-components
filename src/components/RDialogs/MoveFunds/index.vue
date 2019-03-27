<template>
  <base-box :title="title">
    <div class="sigma-icon" slot="icon" />
    <c-container/>
  </base-box>
</template>

<script>
  import CContainer from './container.vue'
  export default {
    props: {
      title: String
    },
    components: {
      CContainer
    }
  }
</script>

<style lang="scss" scoped>
  .sigma-icon {
    position: relative;
    min-width: 25px;
    min-height: 100%;
    font-family: 'Roboto-Bold', 'Roboto Bold', 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    color: #FF922B;
    text-align: left;
    &:before {
      position: absolute;
      top: -16px;
      left: 0;
      content: '∑';
    }
  }
</style>
