<template>
  <div class="funds-container">
    <div class="funds-content">
      <div class="funds-element">
        <div class="element-title"><span>{{from['costitem']}}</span></div>
        <div class="element-date">{{$helper.dateFormat({date:from['fullDate'], format: 'DD.MM.YY'})}}</div>
        <div class="element-value">
          <r-input :value="from['total']" :boxStyles="boxStyles" roundRate="2" @change="handleChange" />
        </div>
      </div>
      <div class="funds-move">
        <r-triangle />
      </div>
      <div class="funds-element">
        <div class="element-title"><span>{{to['costitem']}}</span></div>
        <div class="element-date">{{$helper.dateFormat({date: to['fullDate'], format: 'DD.MM.YY'})}}</div>
        <div class="element-value">
          <r-info :content="$helper.fixed({ value: to['total'] })"
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
  import RTriangle from '@/RTriangle/index.vue'
  export default {
    props: {
      from: Object,
      to: Object,
      boxStyles: Object,
      contentStyles: Object
    },
    components: {
      RInput,
      RInfo,
      RTriangle
    },
    data () {
      return {
        fromData: this.from['total']
      }
    },
    methods: {
      handleChange (val) {
        this.fromData = val
      },
      handleCancel () {
        this.$store.dispatch('modal/closeModal')
      },
      handleConfirm () {
        const { fromData } = this
        this.$store.dispatch('cashFlow/drop', { fromData })
      }
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
    width: 250px;
    height: 18px;
  }
  .element-title > * {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
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
