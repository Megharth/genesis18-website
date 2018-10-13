<template>
  <div>
    <navbarComponent/>
    <div class="container">
      <div v-for="order in orders" class="orders">
        <orderComponent :order="order"/>
      </div>
    </div>
  </div>
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
       orders: state => state.order
     })
  },
  created() {
    if(localStorage.getItem('order'))
      this.$store.state.order = JSON.parse(localStorage.getItem('order'))

  }
}
</script>

<style scoped lang="sass">

.container
  margin-top: 5%

.orders
  margin-top: 20px
</style>