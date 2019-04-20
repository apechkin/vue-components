<template>
  <div>
    <card-desk :componentStyle="cardDeskStyle" :isTarget="target">
      <card v-for="(card, index) in cards" :key="index">
        <template v-slot:header>
          <h4 class="my-0 font-weight-normal">{{card.header}}</h4>
        </template>
        <template v-slot:body>
          <h1 class="card-title pricing-card-title">${{card.tarif}} <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>{{10*(index+1)}} users included</li>
            <li>{{2*Math.pow(3, index)}} GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" @click="openSide(index)" class="btn btn-lg btn-block btn-primary">More info...</button>
        </template>
      </card>
    </card-desk>
    <tarif-side :isTarget="target" @click="closeSide" :componentStyle="sideStyle">
      <template v-slot:header>
        <h4>{{cards[`${curentCard}`].header}}</h4>
      </template>
      <template v-slot:body>
        <p>
          {{cards[`${curentCard}`].description}}
        </p>
      </template>
    </tarif-side>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sideStyle: {
          'text-align': 'left'
        },
        target: false,
        curentCard: 0,
        cards: [
          {
            header: 'Free',
            tarif: 0,
            description: `Lorem excepteur mollit officia fugiat et duis deserunt ea qui laboris adipisicing.
            Sint cillum est anim irure esse tempor cupidatat et excepteur consequat.`
          },
          {
            header: 'Pro',
            tarif: 10,
            description: `Labore qui qui magna ex incididunt non ut sint quis nisi. In consectetur quis do id eu mollit occaecat nostrud.`
          },
          {
            header: 'Enterprise',
            tarif: 25,
            description: `Veniam nisi do Lorem exercitation ullamco amet eiusmod eu sint est officia elit. Quis amet magna consectetur laboris.`
          }
        ]
      }
    },
    methods: {
      openSide (index) {
        this.curentCard = index
        this.target = true
      },
      closeSide () {
        this.target = false
      }
    },
    computed: {
      cardDeskStyle () {
        const opacity = this.target ? `0.4` : null
        return {
          width: '900px',
          opacity
        }
      }
    }
  }
</script>
