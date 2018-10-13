<template>
  <div>
    <navbarComponent></navbarComponent>
    <div class="container">
      <div class="heading">{{department}}</div>
      <div v-for="(event, index) in events">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle="event.id">{{event.name}}</b-btn>
          </b-card-header>
          <b-collapse :id="event.id" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div v-for="(round, index) in event.rounds" class="card-text">
                <div class="sub-heading">Round {{index+1}}</div>
                <p class="">{{round}}</p>
              </div>
              <button class="cart-btn btn ml-auto" :disabled="events[index].checked"
                   @click="addToCart(event, index)">Add to
                cart</button>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <div class="checkout-btn btn ml-auto" v-if="user.pendingOrder.sum" @click="goToCart">Proceed to
        Checkout</div>
    </div>
  </div>
</template>

<script>
import navbarComponent from '../components/navbarComponent'
import {mapState} from 'vuex'
export default {
  name: 'department',
  components: {
    navbarComponent
  },
  data() {
    return {
      department: null,
      events: null,
    }
  },
  methods: {
    goToCart() {
      this.$router.push('/cart')
    },
    addToCart(event, index) {
      if(this.user.authToken){
        this.$store.commit('addToCart', event)
      }
      else
        this.$router.push('/login')

    }
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
  },
  created() {
    let id = this.$route.params.id
    this.$store.state.departments.forEach((department) => {
      if(department.id === id){
        this.department = department.name
        this.events = department.events
      }
    })
  }
}
</script>

<style scoped lang="sass">

.container
  position: absolute
  margin-top: 100px
  margin-left: 50%
  transform: translate(-50%, 0)
  padding-bottom: 20px

.card
  box-shadow: 5px 5px 5px #333333
  margin-top: 20px
  a.btn.btn-secondary.btn-block
    text-transform: uppercase
    font-weight: bolder

.cart-btn, .checkout-btn
  background: #EF8354
  color: white
  display: block
  max-width: 150px
  box-shadow: 2px 2px 2px #333333

.checkout-btn
  margin-top: 5%
  max-width: 200px

.sub-heading
  font-size: 20px
  color: #EF8354
  text-transform: uppercase
  font-weight: bold
</style>