<template>
  <div class="drag-wrapperr" ref="dragWrap">
    <div class="drag-fakeelement" />
    <div
      ref="dragComponent"
      class="drag-component"
      :draggable="draggable"
      :class="computedStyle"
      :style="styles"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
      @click="onClick"
      @dragstart="event => $emit('dragstart', event)"
      @drag="event => $emit('drag', event)"
      @dragend="event => $emit('dragend', event)"
      @dragover="event => $emit('dragover', event)"
      @dragenter="event => $emit('dragenter', event)"
      @dragleave="event => $emit('dragleave', event)"
      @drop="event => $emit('drop', event)"
    >
      <slot :entered="computeEntered"/>
    </div>
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
      },
      editMode: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        entered: false,
        selected: false,
        enterTarget: null
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
        const { entered, selected, editMode } = this
        return {
          'entered': entered,
          'selected': selected,
          'edited': editMode
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  @import "../../assets/style.scss";
  .drag-wrapperr {
    display: inline-block;
    position: relative;
    min-width: $tbl_header_width;
    min-height: $tbl_ce_height;
  }
  .drag-component {
    display: inline-block;
    position: relative;
    width: $tbl_header_width;
    height: $tbl_ce_height;
    background-color: white;
    text-align: right;
    cursor: pointer;
    border: 2px solid white;
    z-index: 10;
  }
  .selected {
    border: 2px solid $orange_5!important;
  }
  .entered {
    border: 2px solid $blue_5;
  }
  .edited {
    border: 2px solid $orange_5;
  }
  .drag-fakeelement {
    position: absolute;
    width: $tbl_header_width;
    height: $tbl_ce_height;
    z-index: 9;
    background-color: $gray_3;
    pointer-events: none;
  }
</style>
