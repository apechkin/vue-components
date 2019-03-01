<template>
  <div class="content-block">
    <div class="left-block">
      <div class="left-block-content">
        payment from the client
      </div>
    </div>
    <div class="right-block" :style="{width}">
      <table class="header-table">
        <tr>
          <td v-for="(vdata, index) in filteredDates" :key="`headLine_${index}`">
            <r-text :value="vdata.fromClient" />
            <!--            <edrag-input
              :value="vdata.fromClient"
              currency="RUR"/>
              -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RText from '../RText/index.vue'
  export default {
    props: {
      width: String,
      filteredDates: Array
    },
    components: {
      EdragInput,
      RText
    },
    data () {
      return {}
    },
    updated () {
      console.log(this.com)
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
table {
  td {
    height: 68px;
    background-color: white;
  }
}
</style>
