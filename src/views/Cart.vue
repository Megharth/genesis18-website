<template>
  <transition name="slide-rotate">
    <div>
      <navbarComponent></navbarComponent>
      <div class="container" v-if="!captcha">
        <div class="heading">Cart</div>
        <orderComponent :order="user.pendingOrder"></orderComponent>
        <div class="row action-btns" v-if="user.pendingOrder.sum">
          <div class="btn cancel-btn mx-auto" @click="cancelOrder">Cancel Order</div>
          <div class="btn mx-auto" @click="captcha = true">Submit Order</div>
        </div>
      </div>
      <div class="captcha container" v-if="captcha">
        <div class="heading">confirm Order</div>
        <vue-recaptcha
            ref="recaptcha"
            @verify="onVerify"
            data-theme="dark"
            align="center"
            sitekey="6LfsoXUUAAAAACYOwRAYxsr0elOLW07pufJom1Ys">
        </vue-recaptcha>
      </div>
      <div class="error sub-heading" v-if="error">{{error}}</div>
    </div>
  </transition>
</template>

<script>
import navbarComponent from '../components/navbarComponent'
import orderComponent from '../components/orderComponent'
import VueRecaptcha from 'vue-recaptcha'

import {mapState} from 'vuex'
export default {
  name: 'cart',
  components: {
    navbarComponent,
    orderComponent,
    VueRecaptcha
  },
  data() {
    return {
      error: null,
      captcha: false
    }
  },
  methods: {
    generateOrder(recaptchaToken) {
      let idArray = this.user.pendingOrder.events.map((event)=> {
        return event._id
      })
      this.$http.post('https://floating-mesa-45263.herokuapp.com/participant', {
        id: this.user.id,
        sum: parseInt(this.user.pendingOrder.sum),
        events: idArray,
        recaptchaToken: recaptchaToken
      }, {
        headers: {
          Authorization: this.user.authToken
        }
      }).then(function(response){
        this.$store.commit('confirmOrder')
        this.$store.commit('clearCart')
        this.$router.push('/orders')
      }).catch(function(error) {
        this.error = error.body.message
      })
    },
    cancelOrder() {
      this.$store.commit('clearCart')
    },
    onVerify: function (response) {
      this.generateOrder(response)
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
.sub-heading
  text-align: center
.total
  padding-right: 13px
.col-sm-1, .col-sm-8, .col-sm-3
  width: inherit

.action-btns
  margin-top: 20px

.captcha
  text-align: center
</style>