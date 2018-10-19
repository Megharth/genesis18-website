<template>
  <transition name="slide">
    <div>
      <navbarComponent/>
      <div class="container">
        <div class="heading">Orders</div>
        <div class="note">
          Note: Token will be resolved on the basis of first come first serve basis. Management has rights to cancel your token if the entries of the event gets filled up.
        </div>
        <div class="sub-heading" v-if="orders.length < 1">You have not placed any orders yet</div>
        <div v-for="order in orders" class="orders">
          <orderComponent :order="order"/>
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
  name: 'orders',
  components: {
    navbarComponent,
    orderComponent
  },
  computed: {
     ...mapState({
       user: state => state.user,
       orders: state => state.order,
       events: state => state.events
     })
  },
  mounted() {
    window.onscroll = () => {
      document.querySelector('.navbar-dark').classList.remove('pull')
    }
    this.$http.post('https://floating-mesa-45263.herokuapp.com/participant/events', {
      username: this.user.id
    }, {
      headers: {
        Authorization: this.user.authToken
      }
    }).then(function(response){
      let orders = response.body
      let eventsList = orders.map(order => order.events)
      let sums = orders.map(order => order.sum)
      let paidStatus = orders.map(order => order.paid)
      let paidTo = orders.map(order => order.paidTo)
      let tokens = orders.map(order => order.token)

      let finalEventList = eventsList.map(list => {
        let temp = []
        list.map(id => {
          this.events.forEach(event => {
            if(event._id === id)
              temp.push(event)
          })
        })
        return temp
      })
      let finalOrder = []
      for(let i=0; i<orders.length; i++){
        finalOrder.push({
          events: finalEventList[i],
          sum: sums[i],
          paid: paidStatus[i],
          paidTo: paidTo[i],
          token: tokens[i]
        })
      }

      this.$store.commit('setOrder', finalOrder)
    }).catch(function(error) {
      console.log(error)
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
  padding-bottom: 20px

.orders
  margin-top: 20px

.sub-heading, .note
  text-align: center
  color: white



</style>