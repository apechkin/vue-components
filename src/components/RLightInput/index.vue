<template>
  <div class="box" :style="boxStyles">
    <input
      v-show="focused"
      ref="input"
      class="box-input"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      v-model="proxy"
      :step="steps"
      :style="contentStyles"
      @blur="focused=false"
    >
    <span v-show="!focused"
          @click="handleClick"
          class="box-fake"
          :style="contentStyles">
      {{fakeValue}}
    </span>
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
      boxStyles: {
        type: Object,
        default: () => ({})
      },
      contentStyles: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        focused: false,
        proxy: this.value,
        steps: this.step || '0.01'
      }
    },
    updated () {
      if (this.focused) {
        this.$nextTick(() => {
          this.$refs['input'].focus()
        })
      } else {
        this.proxy = this.value
      }
    },
    methods: {
      handleClick () {
        this.focused = true
        this.$nextTick(() => {
          this.$refs['input'].focus()
        })
      }
    },
    computed: {
      valueFixed () {
        if (this.roundRate) return parseFloat(this.value).toFixed(this.roundRate)
        return parseFloat(this.value).toFixed(2)
      },
      fakeValue () {
        const { proxy, type } = this
        if (proxy && type === 'number') return `${this.sign ? this.sign : ''}` + String(proxy).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        else return proxy
      }
    },
    watch: {
      proxy: function (val) {
        if (this.roundRate) this.$emit('change', parseFloat(val).toFixed(this.roundRate))
        else this.$emit('change', val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    position: relative;
    display: flex;
    align-items: center;
    background-color: rgb(107, 110, 110);
  }
  input, .box-fake {
    border: none;
    background: none;
    font-family: 'Roboto-Regular', 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-size: 28px;
    color: #495057;
    text-align: right;
    width: inherit;
    outline: none;
    margin-right: 15px;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>
