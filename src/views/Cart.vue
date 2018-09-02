<template>
  <div>
    <navbarComponent></navbarComponent>
    <div class="container">
      <div class="heading">Cart</div>
      <div class="sub heading" v-if="!order.sum">You haven't added any event into the cart. Go to the departments
        page to add an event</div>
      <div class="order mx-auto" v-if="order.sum">
        <b-card title="Current Order">
          <div v-for="(event, index) in order.events" class="row mx-auto">
            <div class="event-name">
              {{index+1}}. {{event.name}}
            </div>
            <div class="ml-auto">{{event.price}}</div>
          </div>
          <div class="total">
            <div class="row">
              <div class="ml-auto">Total</div>
              <div class="ml-auto">{{order.sum}}</div>
            </div>
          </div>
        </b-card>
      </div>

    </div>
  </div>
</template>

<script>
import navbarComponent from '../components/navbarComponent'

export default {
  name: 'cart',
  components: {
    navbarComponent
  },
  data() {
    return {
      order: null
    }
  },
  created() {
    this.order = this.$store.state.order
    console.log(this.order)
  }
}
</script>

<style scoped lang="sass">
.container
  margin-top: 20px

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
</style>