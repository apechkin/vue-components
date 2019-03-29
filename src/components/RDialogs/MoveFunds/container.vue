<template>
  <div class="funds-container">
    <div class="funds-content">
      <div class="funds-element">
        <div class="element-title">POSM (сувениры + промоформа)</div>
        <div class="element-date">30.01.19</div>
        <div class="element-value">
          <r-input :value="from" :boxStyles="boxStyles" roundRate="2" @change="handleChange" />
        </div>
      </div>
      <div class="funds-move">
        >
      </div>
      <div class="funds-element">
        <div class="element-title">Веб-сайты и приложения: разработка…</div>
        <div class="element-date">02.02.19</div>
        <div class="element-value">
          <r-info :content="to"
                  :boxStyles="boxStyles"
                  :contentStyles="contentStyles" />
        </div>
      </div>
    </div>
    <div class="funds-actions">
      <button @click="handleCancel">cancel</button>
      <button @click="handleConfirm">confirm</button>
    </div>
  </div>
</template>

<script>
  import RInput from '@/RLightInput/index.vue'
  import RInfo from '@/RInfo/index.vue'
  import { mapState } from 'vuex'
  export default {
    props: {
      from: [String, Number],
      to: [String, Number],
      boxStyles: Object,
      contentStyles: Object
    },
    components: {
      RInput,
      RInfo
    },
    data () {
      return {
        inVal: 1200000
      }
    },
    methods: {
      handleChange (val) {
        this.inVal = val
      },
      handleCancel () {
        this.$store.dispatch('modal/closeModal')
      },
      handleConfirm () {

      }
    },
    computed: {
      computeContent () {
        return this.$helper.fixed({ value: 121212545.124, roundRate: 2 })
      },
      ...mapState({
        dragFrom: state => this.$helper.fixed({ value: state.cashFlow.dragFrom, roundRate: 2 }),
        dragTo: state => this.$helper.fixed({ value: state.cashFlow.dragTo, roundRate: 2 })
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style.scss";
  .funds-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .funds-content {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
  .funds-actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0px 16px;
    margin-bottom: 16px;
    button {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $blue_5;
      outline: none;
      min-width: 40px;
      height: 32px;
      border-radius: 4px;
      font-family: 'Roboto';
      background-color: #fff;
      border: none;
      padding: 0 12px;
      margin: 0 8px;
      text-transform: uppercase;
      &:hover {
        background-color: $gray_1;
      }
    }
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
    color: $gray_8;
    text-align: left;
    width: 100%;
  }
  .element-date {
    font-family: 'Roboto-Regular', 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: $gray_8;
    text-align: left;
    width: 100%;
  }
  .element-value {
    width: 100%;
  }
</style>
