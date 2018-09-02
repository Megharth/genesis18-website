<template>
  <div>
    <navbarComponent></navbarComponent>
    <div class="container login">
      <b-input-group size="lg">
        <b-form-input placeholder="Id" v-model="id"></b-form-input>
      </b-input-group>
      <b-input-group size="lg">
        <b-form-input placeholder="password" v-model="password"></b-form-input>
      </b-input-group>
      <button class="btn mx-auto" @click="login">Submit</button>
    </div>
  </div>
</template>

<script>
  import navbarComponent from '../components/navbarComponent'
  export default {
    name: 'Login',
    components: {
      navbarComponent
    },
    data() {
      return {
        id: null,
        password: null
      }
    },
    methods: {
      login() {
        this.$http.post('https://blooming-crag-77659.herokuapp.com/user/login', {
          id: this.id,
          password: this.password
        }).then(function(response) {
          console.log(response)
        })
      }
    }
  }
</script>

<style scoped lang="sass">
@import "../sass/input"
.login
  margin-top: 20%

</style>