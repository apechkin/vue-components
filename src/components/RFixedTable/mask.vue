<template>
  <div id="scroll-mask" :style="styles">
    <slot/>
  </div>
</template>

<script>
  import SimpleBar from 'simplebar'
  import 'simplebar/dist/simplebar.min.css'
  export default {
    props: {
      styles: {
        type: Object,
        default: () => ({})
      }
    },
    mounted () {
      const defaultOptions = {
        autoHide: false,
        forceVisible: true,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 800
      }
      const el = new SimpleBar(document.getElementById('scroll-mask'), defaultOptions)
      el.getScrollElement().addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll (evt) {
        this.$emit('userScroll', evt)
      }
    }
  }
</script>

<style lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/style.scss";
.simplebar-track .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1
}
.simplebar-scrollbar:before {
  background: $gray_6;
}
</style>
