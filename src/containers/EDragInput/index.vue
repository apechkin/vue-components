<template>
  <rdrag-block
    :editMode="editMode"
    :draggable="draggable"
    @dragstart="dragStart"
    @drag="dragTarget"
    @dragend="dragEnd"
    @dragover="dragOver"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @drop="dropToTarget"
  >
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
      type: String,
      draggable: {
        type: Boolean,
        default: true
      }
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
        componentValue: this.value,
        dragTargetElement: {
          target: null,
          type: null
        }
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
      },
      dragStart (event) {
        console.log('drag start')
        if (event.fromElement === null || typeof event.fromElement === 'undefined') {
          this.dragTargetElement['target'] = JSON.stringify(event.target).replace(/ entered/, '')
          this.dragTargetElement['type'] = event.type
        }
        console.log(this.dragTargetElement)
      },
      dragTarget (event) {
        event.target.style.zIndex = 8
      },
      dragEnd (event) {
        event.target.style.zIndex = 10
        event.target.style.cursor = 'pointer'
      },
      dragEnter (event) {
        // event.preventDefault() // обязательно
        // console.log('dragEnter on:', id)
        console.log('dragEnter:', JSON.stringify(event.target))
        console.log('dragEnter type:', typeof JSON.stringify(event.target))
        event.stopPropagation()
        event.preventDefault()
        if (JSON.stringify(event.target).replace(/ entered/, '') == this.dragTargetElement['target']) {
          console.log('enter to another element')

          // event.target.style.border = '2px solid #339af0'
        } else {
          console.log(JSON.stringify(event.target).replace(/ entered/, ''), ' not equal: ', this.dragTargetElement['target'])
        }
      },
      dragOver (event) {
        // console.log('dragOver')
        // console.log(event)
        event.stopPropagation()
        event.preventDefault()
      },
      dragLeave (event) {
        // console.log('dragLeave id:', id)
        console.log('dragLeave:', event)
        if (event.target.className === 'drag-component') {
          event.target.style.border = ''
        }
      },
      dragExit (event) {
        console.log('dragExit')
      },
      dropToTarget (event) {
        console.log('drop r-fixed')
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
