<template>
  <rdrag-block>
    <template v-slot="{ entered }">
      <r-input
        :type="type"
        :entered="entered"
        :value="value">
        <template v-slot:edit-icon>
          <i class="fas fa-pencil-alt"/>
        </template>
        <template v-slot:currency-icon>
          {{computeCurrency}}
        </template>
      </r-input>
    </template>
  </rdrag-block>
</template>

<script>
  import RdragBlock from '@/RDraggableArea/index.vue'
  import RInput from '@/RInput/index.vue'
  export default {
    components: {
      RdragBlock,
      RInput
    },
    props: {
      currency: [String],
      curnum: [Number, String],
      value: [Number, String],
      type: String
    },
    data () {
      return {
        currencies: {
          RUR: '₽',
          EURO: '€',
          USD: '$',
          GBP: '£'
        },
        curnums: {
          1: '$',
          2: '₽',
          3: '€',
          4: '£'
        }
      }
    },
    computed: {
      computeCurrency () {
        let label = ``
        const { curnum, currency } = this
        if (currency && curnum) {
          label = this.curnums[curnum]
        } else if (currency && !curnum) {
          label = this.currencies[currency]
        } else if (!currency && curnum) {
          label = this.curnums[curnum]
        } else label = ``
        return label
      }
    }
  }
</script>
