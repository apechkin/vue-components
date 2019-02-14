<template>
  <div
    class="dropdown"
    :class="computedStyle"
    :style="styles"
    :draggable="draggable"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click="onClick"
  >
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    draggable: {
      type: Boolean,
      default: false
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
  .dropdown {
    display: inline-block;
    position: relative;
    width: 127px;
    height: 48px;
    background-color: white;
    padding-right: 16px;
    text-align: right;
  }
  .selected {
    border: 2px solid $mango;
  }
  .entered {
    border: 1px solid $dark-sky-blue;
  }
</style>
