<template>
  <div
    class="drag-component"
    :class="computedStyle"
    :style="styles"
    :draggable="draggable"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click="onClick"
  >
    <slot :entered="computeEntered"/>
  </div>
</template>

<script>
  export default {
    props: {
      draggable: {
        type: Boolean,
        default: true
      },
      styles: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        entered: false,
        selected: false
      }
    },
    methods: {
      onClick () {
        this.selected = !this.selected
      },
      onEnter () {
        this.entered = true
      },
      onLeave () {
        this.entered = false
      }
    },
    computed: {
      computeEntered () {
        return this.entered
      },
      computedStyle () {
        const { entered, selected } = this
        if (entered && selected) {
          return {
            'selected': selected
          }
        } else if (entered && !selected) {
          return { 'entered': entered }
        } else if (!entered && selected) {
          return { 'selected': selected }
        } else return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  .drag-component {
    display: inline-block;
    position: relative;
    width: 128px;
    height: 48px;
    background-color: white;
    text-align: right;
    margin: 1px .5px;
    cursor: pointer;
    border: 2px solid transparent;
  }
  .selected {
    border: 2px solid $orange_5;
  }
  .entered {
    border: 2px solid $blue_5;
  }
</style>
