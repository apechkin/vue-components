<template>
  <div class="container-sb" @ps-x-reach-end="scrollHandle" @scroll="scrollHandle">
    <div class="content-sb">
      <slot/>
    </div>
  </div>
</template>

<script>
  import PerfectScrollbar from 'perfect-scrollbar'
  export default {
    styles: {
      type: Object,
      default: () => ({})
    },
    dataDef: {
      type: String,
      default: 'estimate'
    },
    data () {
      const customEvents = [
        'ps-scroll-y',
        'ps-scroll-x',
        'ps-scroll-up',
        'ps-scroll-down',
        'ps-scroll-left',
        'ps-scroll-right',
        'ps-y-reach-start',
        'ps-y-reach-end',
        'ps-x-reach-start',
        'ps-x-reach-end'
      ]
      return {
        ps: null,
        container: null,
        customEvents
      }
    },
    beforeDestroy () {
      const { customEvents } = this
      customEvents.forEach(event => {
        this.container.removeEventListener(event, this.scrollHandle)
      })
      this.container.removeEventListener('scroll', this.scrollHandle)
      if (this.ps) {
        this.ps.destroy()
        this.ps = null
        this.container = null
      }
    },
    methods: {
      scrollHandle (evt) {
        this.$emit(evt.type, evt)
      }
    },
    mounted () {
      const $ = document.querySelector.bind(document)
      this.container = $('.container-sb')
      this.ps = new PerfectScrollbar(this.container, {
        minScrollbarLength: 150,
        wheelPropagation: false,
        wheelSpeed: 0.5
      })
      const { customEvents } = this
      customEvents.forEach(event => {
        this.container.addEventListener(event, this.scrollHandle)
      })
      this.container.addEventListener('scroll', this.scrollHandle)
    }
  }
</script>

<style lang="scss">
@import '~perfect-scrollbar/css/perfect-scrollbar.css';
@import "../../assets/style.scss";
  .container-sb {
    position: relative;
    margin: 0px auto;
    padding: 0px;
    width: 1200px;
    height: 358px;
    overflow: auto;
    z-index: 999;
  }
  .ps__rail-x,
  .ps__rail-y {
    z-index: 12;
  }
  .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x,
  .ps__rail-x.ps--clicking .ps__thumb-x {
    background-color: $gray_6;
    height: 10px;
    bottom: px;
  }

  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y,
  .ps__rail-y.ps--clicking .ps__thumb-y {
    background-color: $gray_6;
    width: 10px;
    right: 3px;
  }

  .ps__thumb-x,
  .ps__thumb-y {
    background-color: $gray_6;
  }

  .ps .ps__rail-x:hover,
  .ps .ps__rail-y:hover,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-y.ps--clicking {
    background-color: transparent;
    opacity: 1;
  }

</style>
