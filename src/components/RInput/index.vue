<template>
  <div class="box" :class="computedStyle">
    <div class="box-action-icon" :class="{'entered': entered, 'edit': editMode}">
      <slot name="edit-icon" />
    </div>
    <input
      ref="input"
      v-show="editMode"
      class="box-input"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      v-model="proxy"
      :step="steps"
    >
    <div class="box-fake" v-show="!editMode">{{fakeValue}}</div>
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
        default: 'number'
      },
      placeholder: {
        type: String,
        default: ''
      },
      name: String,
      value: [String, Number],
      entered: Boolean,
      roundRate: [Number, String],
      step: String,
      focused: {
        type: Boolean,
        default: false
      },
      editMode: {
        type: Boolean,
        default: false
      },
      white: {
        type: Boolean,
        default: false
      },
      bbox: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        proxy: this.value,
        steps: this.step || '0.01'
      }
    },
    updated () {
      if (this.editMode) {
        this.$nextTick(() => {
          this.$refs['input'].focus()
        })
      } else {
        this.proxy = this.value
      }
    },
    computed: {
      valueFixed () {
        if (this.roundRate) return parseFloat(this.value).toFixed(this.roundRate)
        return parseFloat(this.value).toFixed(2)
      },
      fakeValue () {
        const { proxy, type } = this
        if (proxy && type === 'number') return String(proxy).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        else return proxy
      },
      computedStyle () {
        const { white, bbox } = this
        return {
          'bg-white': white,
          'b-box': bbox
        }
      }
    },
    watch: {
      proxy: function (val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  @import "../../assets/style.scss";
  $parentWidth: 128px;
  $parentHeight: 46px;
  $editIconWidth: 30px;
  $currencyIcon: 20px;
  $actionIncons: 40px;
  .box {
    position: relative;
    width: $parentWidth;
    height: 100%;
    display: flex;
  }
  .box-action-icon {
    position: absolute;
    top: 0;
    left: 2px;
    width: $editIconWidth;
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $gray_5;
    opacity: 0;
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
    width: 100%;
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
  .box-fake {
    @extend .df-center-jcend ;
    font-size: 12px;
    width: calcSize($parentWidth, $currencyIcon);
  }
  .entered {
    opacity: 1;
  }
  .edit {
    opacity: 1;
    width: $actionIncons;
  }
  .bg-white {
    background-color: white;
    border-radius: 5px;
  }
  .b-box {
    box-sizing: border-box;
    border-right: 1px solid $gray_3;
    border-top: 5px solid $gray_3;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type=number]{
  -moz-appearance:textfield;
}
</style>
