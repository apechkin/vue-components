<template>
  <div id="scroll-mask" :style="styles" :data-style="dataDef">
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
      },
      dataDef: {
        type: String,
        default: 'estimate'
      },
      setScrollLeft: [Number, String],
      setScrollTop: [Number, String]
    },
    data () {
      return {
        el: null
      }
    },
    mounted () {
      const defaultOptions = {
        autoHide: false,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 800
      }
      this.el = new SimpleBar(document.getElementById('scroll-mask'), defaultOptions)
      this.el.getScrollElement().addEventListener('scroll', this.handleScroll)
      if (Number(this.setScrollLeft)) {
        this.el.getScrollElement().scrollTo(this.setScrollLeft || 0, this.setScrollTop || 0)
      }
    },
    beforeDestroy () {
      document.removeEventListener('scroll', this.handleScroll)
      this.el = null
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
[data-style=estimate] {
  .simplebar-track .simplebar-scrollbar.simplebar-visible:before {
    opacity: 1
  }
  .simplebar-scrollbar:before {
    background: $gray_6;
  }
  .simplebar-track.simplebar-horizontal {
    bottom: 5px;
    background-color: $gray_3;
    border-radius: 7px;
    margin: 0;
    padding: 0;
    height: 8px;
    .simplebar-scrollbar {
      height: 8px;
      margin: 0;
      padding: 0;
      top: 0;
    }
  }
  .simplebar-track.simplebar-vertical {
    right: 5px;
    border-radius: 7px;
    width: 8px;
  }
  .simplebar-scrollbar.simplebar-visible {
    width: 8px;
  }
}
</style>
