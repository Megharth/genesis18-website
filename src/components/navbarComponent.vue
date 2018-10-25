<template>
  <div>
    <b-navbar toggleable="md" type="dark">
      <b-navbar-brand href="#" to="/">
        <img src="../assets/logo.png" alt="genesis logo">
        <span class="brand-title">Genesis 18</span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item class="mx-auto" to="/">Home</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="!user.authToken">
            <b-nav-item href="#" class="mx-auto" to="/register">Register</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="!user.authToken">
            <b-nav-item href="#" class="mx-auto" to="/login">Login</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="user.authToken">
            <b-nav-item href="#" class="mx-auto" to="/orders">Orders</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="user.authToken">
            <b-nav-item href="#" class="mx-auto" to="/cart">Cart</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#" class="mx-auto" to="/team">Team</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="user.authToken">
            <b-nav-item href="#" class="mx-auto" @click="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default{
    name: 'navbarComponent',
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.push('/')
        localStorage.clear()
      }
    },
    computed: {
       ...mapState({
         user: state => state.user
       })
    },
    created() {
      if(localStorage.getItem('user')){
        this.$store.state.user = JSON.parse(localStorage.getItem('user'))
      }
    }
  }
</script>

<style scoped lang="sass">
@import '../sass/variables'
@import '../sass/navbar'
</style>