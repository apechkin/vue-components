<template>
  <div class="content-block">
    <div class="left-block">
      <div class="left-block-content">
        payment from the client
      </div>
    </div>
    <div class="right-block" :style="{width}">
      <table>
        <tr>
          <td v-for="(vdata, index) in fundsAndDates" :key="`income_${index}`">
            <r-text :value="vdata.fromClient" separate >
              <template v-slot:currency-icon>
                {{'$'}}
              </template>
            </r-text>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import RText from '../RText/index.vue'
  export default {
    props: {
      width: String,
      fundsAndDates: Array
    },
    components: {
      RText
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
@import "../../assets/mixins.scss";
.left-block-content {
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration-style: solid;
  color: $gray_6;
}
.r-text {
  background-color: white;
}
table {
  border-collapse: collapse;
  border-spacing: 2px;
  td {
    height: 64px;
    width: 1px;
    min-width: 127px;
    vertical-align: text-bottom;
    font-size: 12px;
  }
}
</style>
