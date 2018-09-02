<template>
  <div>
    <b-navbar toggleable="md" type="dark">
      <b-navbar-brand href="#" to="/">Genesis logo</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#" class="mx-auto" to="/register">Register</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#" class="mx-auto" to="/login">Login</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#" class="mx-auto" to="/cart">Cart</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#" class="mx-auto">Logout</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default{
    name: 'navbarComponent'
  }
</script>

<style scoped lang="sass">
.navbar-dark
  background: #2D3142
  color: #FFFFFB
  box-shadow: 0 5px 5px #333333
  a
    color: #FFFFFB
</style>