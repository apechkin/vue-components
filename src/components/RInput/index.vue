<template>
  <div class="box">
    <div class="box-edit-icon" :class="{'entered': entered}">
      <slot name="edit-icon" />
    </div>
    <input
      class="box-input"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      v-model="proxy"
      @change="update"
      :step="steps"
    >
    <div class="box-currency">
      <slot name="currency-icon" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      name: String,
      value: [String, Number],
      entered: Boolean,
      roundRate: [Number, String],
      step: String
    },
    data () {
      return {
        proxy: this.value,
        steps: this.step || '0.01'
      }
    },
    created () {
      this.localValue = this.value
    },
    methods: {
      update () {
        this.$emit('change', this.proxy)
      },
      changeHandler (e) {
        if (this.roundRate) {
          this.$emit('input', parseFloat(e.target.value).toFixed(this.roundRate))
          this.localValue = e.target.value
        } else {
          this.$emit('input', parseFloat(e.target.value).toFixed(2))
          this.localValue = e.target.value
        }
      }
    },
    computed: {
      valueFixed () {
        if (this.roundRate) return parseFloat(this.value).toFixed(this.roundRate)
        return parseFloat(this.value).toFixed(2)
      },
      val () {
        if (this.value === '-') return this.value
        return this.value
          ? this.roundRate ? Number(this.value).toFixed(this.int ? 0 : this.roundRate).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            : Number(this.value).toFixed(this.int ? 0 : 2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
          : null
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  $parentWidth: 128px;
  $parentHeight: 46px;
  $editIconWidth: 20px;
  $currencyIcon: 16px;
  .box {
    position: relative;
    width: $parentWidth;
    height: 100%;
    display: flex;
  }
  .box-edit-icon {
    float: left;
    width: $editIconWidth;
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: $gray_5;
    opacity: 0;
  }
  .entered {
    opacity: 1;
  }
  .box-input {
    border: none;
    background: none;
    outline: none;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: $charcoal-grey;
    width: calcSize($parentWidth, ($editIconWidth + $currencyIcon));
    height: calcSize($parentHeight, 0px);
    transition: 0.4s;
    line-height: 25px;
    padding-left: 7px;
  }
  .box-currency {
    width: $currencyIcon;
    height: 100%;
    font-size: 12px;
    display: flex;
    padding-left: 3px;
    justify-content: flex-start;
    align-items: center;
    color: $gray_5;
  }
</style>
