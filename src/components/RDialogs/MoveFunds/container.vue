<template>
  <div class="funds-container">
    <div class="funds-element">
      <div class="element-title">POSM (сувениры + промоформа)</div>
      <div class="element-date">30.01.19</div>
      <div class="element-value">
        <r-input value="5000000"/>
      </div>
    </div>
    <div class="funds-move">
      >
    </div>
    <div class="funds-element">
      <div class="element-title">Веб-сайты и приложения: разработка…</div>
      <div class="element-date">02.02.19</div>
      <div class="element-value">
        <r-input value="1200000"/>
      </div>
    </div>
  </div>
</template>

<script>
  import RInput from '@/RInput/index.vue'
  export default {
    components: {
      RInput
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
    justify-content: space-between;
    align-items: flex-start;
  }
  .funds-move, .funds-element {
    margin: 50px 20px;
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
  }
</style>
