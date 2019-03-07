<template>
  <div class="mask">
    <div class="text" :style="styles">
      {{textValue}}
      <div class="box-currency">
        <slot name="currency-icon" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: [String, Number],
      separate: {
        type: Boolean,
        default: false
      },
      styles: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      textValue () {
        const { separate, value } = this
        if (separate) {
          return parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
        } else {
          return value
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
@import "../../assets/style.scss";
.mask {
  position: relative;
  width: 127px;
  min-width: 100%;
  min-height: 100%;
}
.text {
  position: absolute;
  top: 5px;
  left: 1px;
  bottom: 5px;
  right: 0;
  background-color: white;
  @extend .df-center-jcend;
}
.box-currency {
  position: relative;
  right: 2px;
  @extend .df-center-jcend;
  width: $currencyIcon;
  height: 100%;
  font-size: 12px;
  padding-left: 3px;
  justify-content: flex-start;
  color: $gray_5;
}
</style>
