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
        :sign="sign"
        class="est-hovered"
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
  import { mapMutations, mapGetters } from 'vuex'
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
      },
      dataTransfer: Object,
      sign: String
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
        },
        i: 0
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
        this.$store.commit('setFromEst', this.dataTransfer)
        console.log('drag start with content:', this.dataTransfer)
      },
      dragTarget (event) {
        event.target.style.zIndex = 8
      },
      dragEnd (event) {
        event.target.style.zIndex = 10
      },
      dragEnter (event) {
        // event.preventDefault() // обязательно
        // console.log('dragEnter on:', event)
        // console.log('dragEnter:', JSON.stringify(event.target))
        // console.log('dragEnter type:', typeof JSON.stringify(event.target))
        // console.log(event)
        event.preventDefault()
        console.log('drag enter: ', this.dataTransfer)
        this.$store.commit('setToEst', this.dataTransfer)
        /*
        if (typeof event.target === 'object' && event.target.className === 'drag-component') {
          this.i++
          if (JSON.stringify(event.target) === this.getComponent['target']) event.target.style.border = '2px solid #339af0'
        }
        */
      },
      dragOver (event) {
        // console.log('dragOver')
        // console.log(event)
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
      },
      dragLeave (event) {
        // console.log('dragLeave id:', id)
        // console.log('dragLeave:', event)
        event.preventDefault()
        /*
        if (typeof event.fromElement === 'object' && event.fromElement.nodeName === 'TD') {
          console.log('leave component')
          // event.target.style.border = ''
        }
        */
      },
      dragExit (event) {
        // console.log('dragExit')
      },
      dropToTarget (event) {
        console.log('drop: ', this.$store.state.dragTable)
        // this.$store.commit('resetState')
      },
      ...mapMutations(['saveComponent', 'deleteComponent'])
    },
    computed: {
      ...mapGetters(['getComponent']),
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
