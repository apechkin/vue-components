<template>
  <div class="info" :style="boxStyles">
    <div class="info-content" :style="contentStyles">{{content}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      boxStyles: {
        type: Object,
        default: () => ({})
      },
      contentStyles: {
        type: Object,
        default: () => ({})
      },
      content: [String, Number]
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    position: relative;
    display: flex;
    align-items: center;
    background-color: rgb(107, 110, 110);
  }
  .info-content {
    background: none;
    width: inherit;
  }

</style>
