<template>
  <div>
    <drop-excel
      @vdropzone-removed-file="handleDeleteFile"
      @vdropzone-file-added-ref="handleFile"
      :dropOptions="dropOptions"
      :useComponentTemplate="true"
      :styles="contentStyles" />
    <r-area :componentStyle="areaStyle">
      <r-button
        :disabled="preparedData === null"
        @click.native="handleConfirm"
        :componentStyle="buttonStyle">Confirm</r-button>
    </r-area>
  </div>
</template>

<script>
  import XLSX from 'xlsx'
  export default {
    data () {
      return {
        areaStyle: {
          'justify-content': 'flex-end',
          'align-items': 'flex-end',
          'min-height': '118px'
        },
        buttonStyle: {
          'margin-bottom': '10px'
        },
        contentStyles: {
          'min-height': '300px'
        },
        dropOptions: {
          autoProcessQueue: false,
          forceChunking: true,
          url: '/',
          maxFiles: 1,
          acceptedFiles: '.xlsx',
          thumbnailWidth: 150,
          thumbnailHeight: 150,
          dictDefaultMessage: 'Drop file to parse'
        },
        excelHeader: {
          'ACCNT_CODE': 0,
          'PERIOD': 0,
          'TRANS_DATE': 0,
          'TREFERENCE': 0,
          'DESCRIPTN': 0,
          'AMOUNT': 0,
          'D_C': 0,
          'CONV_CODE': 0,
          'CONV_RATE': 0,
          'OTHER_AMT': 0,
          'ANAL_T0': 0,
          'ANAL_T1': 0,
          'ANAL_T2': 0,
          'ANAL_T3': 0,
          'ANAL_T4': 0,
          'ANAL_T5': 0,
          'ANAL_T6': 0,
          'ANAL_T7': 0,
          'ANAL_T8': 0,
          'ANAL_T9': 0,
          'ACCNT_NAME': 0,
          'JRNAL_NO': 0,
          'JRNAL_LINE': 0,
          'JRNAL_TYPE': 0,
          'JRNAL_SRCE': 0,
          'ALLOCATION': 0,
          'ENTRY_DATE': 0
        },
        preparedData: null
      }
    },
    methods: {
      handleConfirm () {
        // send to api
        // this.$api.sendData(url, this.preparedData)
      },
      prepareData (json) {
        let data = []
        for (let index = 1; index < json.length; index++) {
          const element = json[index]
          let head = {}
          for (const header in this.excelHeader) {
            if (this.excelHeader.hasOwnProperty(header)) {
              const headerVal = this.excelHeader[header]
              head[`${header}`] = element[`${headerVal}`]
            }
          }
          data.push(head)
        }
        this.preparedData = data
      },
      handleDeleteFile () {
        this.preparedData = null
      },
      handleFile (file) {
        try {
          const reader = new FileReader()
          const self = this
          reader.onload = function (e) {
            const data = new Uint8Array(e.target.result)
            const workbook = XLSX.read(data, { type: 'array' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const json = XLSX.utils.sheet_to_json(worksheet, { raw: true, header: 1 })
            for (let index = 0; index < json[0].length; index++) {
              const element = json[0][index]
              if (self.excelHeader[`${element}`] === 0) self.excelHeader[`${element}`] = index + 1
            }
            let isAllFields = 1
            /* check for excel headers */
            for (const key in self.excelHeader) {
              if (self.excelHeader.hasOwnProperty(key)) {
                const element = self.excelHeader[key]
                if (element === 0) isAllFields--
              }
            }
            if (isAllFields < 1) throw new Error('Can\'t find required field')
            else {
              // prepare data for send to api
              self.prepareData(json)
            }
          }
          reader.readAsArrayBuffer(file)
        } catch (error) {
          // catch error
          console.log(error)
        }
      }
    }
  }
</script>
