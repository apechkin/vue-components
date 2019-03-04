<template>
  <div class="inline">
    <div v-if="isHeader" class="header">
      <strong>{{value}}</strong>
    </div>
    <div v-else class="value">
      {{value}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isHeader: {
        type: Boolean,
        default: false
      },
      value: String
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
@import "../../assets/style.scss";
.inline {
  display: inline-block;
  min-width: 128px;
  height: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.header {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-family: 'Roboto';
  width: 100%;
  height: 100%;
  padding-left: 5px;
}
.value {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: 'Roboto';
  width: 100%;
  height: 100%;
  background-color: $gray_4;
}
.inline:first-of-type {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>
