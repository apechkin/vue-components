<template>
  <div class="content-block">
    <div class="left-block">
      <table>
        <tr v-for="estimate in estimates" :key="estimate.id">
          <td>
            <div class="estimate-content">
              <div class="estimate-name">
                {{estimate.name}}
              </div>
              <div class="estimate-total">
                {{'-1200000'}}
              </div>
              <div class="estimate-unallocated">
                {{'80000'}}
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="right-block" :style="{width}">
    <!-- <table>
        <tr>
          <td v-for="(vdata, index) in filteredDates" :key="`headLine_${index}`">
            <edrag-input :value="vdata.value" currency="RUR" />
          </td>
        </tr>
      </table>
      -->
    </div>
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  export default {
    props: {
      width: String,
      filteredDates: Array,
      estimates: Array
    },
    components: {
      EdragInput
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
@import "../../assets/mixins.scss";
.left-block {
  width: 100%;
  height: $tbl_estimate_height;
  overflow: hidden;
  table {
    width: 100%;
  }
}
   table tr td {
        word-break: break-word;
    }
.estimate-content {
  display: flex;
  height: 100%;
  width: inherit;
}
.estimate-name {
  background-color: khaki;
  flex-grow: 1;
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis; /* Добавляем многоточие */
}
.estimate-total, .estimate-unallocated {
  background-color: darkkhaki;
  flex-grow: 0;
  width: 127px;
  height: $tbl_header_height;
}
</style>
