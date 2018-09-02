<template>
  <div>
    <navbarComponent></navbarComponent>
    <div class="container login">
      <b-input-group size="lg">
        <b-form-input placeholder="username"></b-form-input>
      </b-input-group>
      <b-input-group size="lg">
        <b-form-input placeholder="password"></b-form-input>
      </b-input-group>
      <button class="btn mx-auto">Submit</button>
    </div>
  </div>
</template>

<script>
  import navbarComponent from '../components/navbarComponent'
  export default {
    name: 'Login',
    components: {
      navbarComponent
    }
  }
</script>

<style scoped lang="sass">
@import "../sass/input"
.login
  margin-top: 20%

</style>