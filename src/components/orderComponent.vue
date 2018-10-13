<template>
  <div>
    <div class="sub heading" v-if="!order.sum">You haven't added any event into the cart. Go to the
      departments
      page to add an event</div>
    <div class="order mx-auto" v-if="order.sum">
      <b-card title="Order">
        <div v-for="(event, index) in order.events" class="row mx-auto">
          <div class="event-name">
            {{index+1}}. {{event.name}}
          </div>
          <div class="ml-auto">{{event.price}}</div>
        </div>
        <div class="total">
          <div class="row">
            <div class="ml-auto">Total</div>
            <div class="mx-auto">{{order.sum}}</div>
          </div>
          <div class="row" v-if="order.signature">
            <div class="ml-auto">Signature</div>
            <div class="mx-auto">{{order.signature}}</div>
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

.card
  box-shadow: 5px 5px 5px #333333
</style>