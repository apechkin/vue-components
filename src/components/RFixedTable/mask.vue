<template>
  <div class="content-mask">
    <div class="wrapper">
      <slot />
    </div>
    <div class="simplebar-track simplebar-horizontal">
      <div class="simplebar-scrollbar" style=""/>
    </div>
    <div class="simplebar-track simplebar-vertical"
         :class="{'simplebar-hover': hover}">
      <div class="simplebar-scrollbar"
           :class="{'simplebar-visible': visible, 'simplebar-hover': hover}"
           style="height: 70px; transform: translate3d(0px, 250px, 0px); visibility: visible;"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {},
    data () {
      return {
        hover: true,
        visible: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
@import "../../assets/style.scss";

.content-mask {
  height: $tbl_estimate_height;
  position: relative;
  // overflow-y: scroll;
  // overflow-x: scroll;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.simplebar-track.simplebar-vertical {
    top: 0;
    width: 11px;
}
.simplebar-track {
    z-index: 1;
    position: absolute;
    right: 5px;
    bottom: 0;
    pointer-events: none;
}
.simplebar-scrollbar {
    position: absolute;
    right: 2px;
    width: 7px;
    min-height: 10px;
}
.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    top: 2px;
    bottom: 2px;
}
.simplebar-scrollbar:before {
    position: absolute;
    content: "";
    background: #000;
    border-radius: 7px;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity .2s linear;
}
*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
