<template>
  <transition name="slide-rotate">
    <div>
      <navbarComponent></navbarComponent>
      <div class="container">
        <div class="heading">Cart</div>
        <orderComponent :order="user.pendingOrder"></orderComponent>
        <div class="row action-btns" v-if="user.pendingOrder.sum">
          <div class="btn cancel-btn mx-auto" @click="cancelOrder">Cancel Order</div>
          <div class="btn mx-auto" @click="generateOrder">Submit Order</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import navbarComponent from '../components/navbarComponent'
import orderComponent from '../components/orderComponent'

import {mapState} from 'vuex'
export default {
  name: 'cart',
  components: {
    navbarComponent,
    orderComponent
  },
  methods: {
    generateOrder() {
      let idArray = this.user.pendingOrder.events.map((event)=> {
        return event.id
      })
      this.$store.commit('confirmOrder')
      this.$store.commit('clearCart')
      this.$http.post('https://floating-mesa-45263.herokuapp.com/participant', {
        id: this.user.id,
        sum: this.user.pendingOrder.sum,
        events: idArray
      }, {
        headers: {
          Authorization: this.user.authToken
        }
      }).then(function(response){
        console.log(response)
      })
      //PUT THE FOLLOWING INTO PROMISE
      this.$router.push('/orders')
    },
    cancelOrder() {
      this.$store.commit('clearCart')
    }
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
  }
}
</script>

<style scoped lang="sass">
@import '../sass/variables'

.container
  position: absolute
  margin-top: 100px
  margin-left: 50%
  transform: translate(-50%, 0)

.btn
  background: #EF8354
  color: white
  max-width: 150px
  margin-top: 2%
  box-shadow: 2px 2px 2px #333333
  &:active
    box-shadow: none

.cancel-btn
  background: rgba(243, 72, 89, 0.87)
.order
  font-size: 20px
  max-width: 800px
  @media screen and (min-width: 320px) and (max-width: 520px)
    .event-name
      max-width: 250px
.sub
  font-size: 30px
.total
  padding-right: 13px
.col-sm-1, .col-sm-8, .col-sm-3
  width: inherit

.action-btns
  margin-top: 20px
</style>