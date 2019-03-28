<template>
  <div class="funds-container">
    <div class="funds-element">
      <div class="element-title">POSM (сувениры + промоформа)</div>
      <div class="element-date">30.01.19</div>
      <div class="element-value">
        <r-input :value="inVal" :boxStyles="styleObject" roundRate="2" @change="handleChange" />
      </div>
    </div>
    <div class="funds-move">
      >
    </div>
    <div class="funds-element">
      <div class="element-title">Веб-сайты и приложения: разработка…</div>
      <div class="element-date">02.02.19</div>
      <div class="element-value">
        <r-info :content="computeContent"
                :boxStyles="styleObject"
                :contentStyles="contentStyles" />
      </div>
    </div>
  </div>
</template>

<script>
  import RInput from '@/RLightInput/index.vue'
  import RInfo from '@/RInfo/index.vue'
  export default {
    components: {
      RInput,
      RInfo
    },
    data () {
      return {
        inVal: 1200000,
        styleObject: {
          'background-color': 'rgba(248, 249, 250, 1)',
          minWidth: '256px',
          width: '100%',
          minHeight: '80px',
          'justify-content': 'flex-end'
        },
        contentStyles: {
          'border': 'none',
          'font-family': 'Roboto-Regular, Roboto',
          'font-weight': '400',
          'font-style': 'normal',
          'font-size': '28px',
          'color': '#495057',
          'text-align': 'right',
          'margin-right': '15px'
        }
      }
    },
    methods: {
      handleChange (val) {
        this.inVal = val
      }
    },
    computed: {
      computeContent () {
        return this.$helper.fixed({ value: 121212545.124, roundRate: 2 })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .funds-container {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .funds-move {
    height: 50px;
    align-self: flex-end;
  }
  .funds-element > .element-date {
    margin: 10px 0;
  }
  .funds-element {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
  .funds-move {
    padding: 0 5px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .funds-element {
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 15px;
  }
  .element-title {
    font-family: 'Roboto-Bold', 'Roboto Bold', 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    color: #343A40;
    text-align: left;
    width: 100%;
  }
  .element-date {
    font-family: 'Roboto-Regular', 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #343A40;
    text-align: left;
    width: 100%;
  }
  .element-value {
    width: 100%;
  }
</style>
