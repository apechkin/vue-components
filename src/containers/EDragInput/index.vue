<template>
  <rdrag-block :editMode="editMode">
    <template v-slot="{ entered }">
      <r-input
        :editMode="editMode"
        :type="type"
        :entered="entered"
        :value="componentValue"
        @change="handleChangeValue"
      >
        <template v-slot:edit-icon>
          <redit-icon
            :editMode="editMode"
            @accept="handleAccept"
            @edit="handleEdit"
          />
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
  import ReditIcon from '@/REditIcon/index.vue'
  export default {
    components: {
      RdragBlock,
      RInput,
      ReditIcon
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
        },
        editMode: false,
        componentValue: this.value
      }
    },
    methods: {
      handleEdit () {
        this.editMode = true
      },
      handleAccept (action) {
        this.editMode = false
        const { value } = this
        switch (action) {
          case 'confirm':
            this.$emit('accepted', { status: 'changed', value: this.componentValue })
            break
          case 'cancel':
            this.componentValue = value
            this.$emit('accepted', { status: 'nonChanged', value: this.componentValue })
            break
          default:
            break
        }
      },
      handleChangeValue (val) {
        this.componentValue = val
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
