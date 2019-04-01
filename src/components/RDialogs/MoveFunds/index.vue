<template>
  <base-box :title="title">
    <div class="sigma-icon" slot="icon" />
    <container :from="from" :to="to" :boxStyles="boxStyles" :contentStyles="contentStyles" />
  </base-box>
</template>

<script>
  import Container from './container.vue'
  export default {
    props: {
      title: String,
      from: Object,
      to: Object,
      boxStyles: Object,
      contentStyles: Object
    },
    components: {
      Container
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
