<template>
  <div>
    <div class="sub-heading" v-if="!order.sum">You haven't added any event into the cart. Go to the
      departments page to add an event</div>
    <div class="order mx-auto" v-if="order.sum">
      <b-card>
        <div class="card-title">Order {{order.token}}</div>
        <div v-for="(event, index) in order.events" class="row mx-auto">
          <div class="event-name">
            {{index+1}}. {{event.eventName}}
          </div>
          <div class="ml-auto">{{event.entryFee}}</div>
        </div>
        <div class="total">
          <div class="row">
            <div class="ml-auto">Total</div>
            <div class="mx-auto">{{order.sum}}</div>
          </div>
        </div>
        <div class="payment">
          <div class="row">
            <div class="ml-auto">Payment Status: <span v-if="order.paid" class="paid">Paid</span> <span v-if="!order.paid" class="pending">Pending</span></div>
          </div>
          <div class="row" v-if="order.paidTo">
            <div class="ml-auto paid">Paid To: {{order.paidTo}}</div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'orderComponent',
  props: ['order'],
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
@import '../sass/variables'
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
  font-weight: bolder
.col-sm-1, .col-sm-8, .col-sm-3
  width: inherit

.payment
  padding: 10px
  font-weight: bold
  .pending
    color: red
  .paid
    color: green
.card
  box-shadow: 5px 5px 5px #333333
  .card-title
    color: $secondaryColor
    text-transform: uppercase
    font-weight: bolder
</style>