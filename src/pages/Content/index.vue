<template>
  <div class="container">
      <h3>Draggable elements with draggable block</h3>
      <table>
        <thead></thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
      <div class="d-flex flex-row">
        <dragBlock>
          <div class="drag-orange" />
        </dragBlock>
        <dragBlock>5000</dragBlock>
        <dragBlock></dragBlock>
        <dragBlock></dragBlock>
        <dragBlock></dragBlock>
      </div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
  </div>
</template>

<script>
import dragBlock from '@/DraggableArea/index.vue'
export default {
  props: {},
  components: {
    dragBlock
  },
  data () {
    return {
      dragBlockStyle: { border: `1px #ced4da solid` }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.drag-example {
  background-color: $gray_4;
}
 .drag-orange {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: $orange_3;
  }
</style>
