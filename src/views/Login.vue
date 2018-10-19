<template>
  <transition name="flip-in">
    <div>
      <navbarComponent></navbarComponent>
      <div class="container login-container">
        <div class="heading">Login</div>
        <div class="login mx-auto" v-if="!forgotPassword">
          <b-input-group size="lg">
            <b-form-input placeholder="Id" v-model="id"></b-form-input>
          </b-input-group>
          <b-input-group size="lg">
            <b-form-input placeholder="password" v-model="password" type="password"></b-form-input>
          </b-input-group>
        </div>
        <div class="forgot" v-if="forgotPassword">
          <b-input-group size="lg">
            <b-form-input placeholder="Id" v-model="id"></b-form-input>
          </b-input-group>
        </div>
        <button class="btn mx-auto" @click="login" v-if="!forgotPassword">Login</button>
        <button class="btn mx-auto" @click="forgot" v-if="forgotPassword">Submit</button>
        <!--<button class="btn mx-auto" @click="goToForget" v-if="!forgotPassword">Forgot Password</button>-->
        <!--<button class="btn mx-auto" @click="forgotPassword = false" v-if="forgotPassword">Go back to login</button>-->
        <div class="error heading" v-if="error">{{error}}</div>
      </div>
    </div>
  </transition>
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
        password: null,
        forgotPassword: false,
        error: null
      }
    },
    methods: {
      goToForget() {
        this.forgotPassword = true
        this.error = null
      },
      login() {
        if(this.id && this.password){
          this.$http.post('https://floating-mesa-45263.herokuapp.com/user/login', {
            username: this.id.toLowerCase(),
            password: this.password
          }).then(function(response) {
            let resp = JSON.parse(response.bodyText)
            let user = resp.participant
            user.authToken = resp.token
            this.$store.commit('login', user)
            this.$router.push('/')
          }).catch(function(error){
            console.log(error)
            this.error = error.body.message
          })
        }
        else
          this.error = "Please Enter Username and Password"
      },
      forgot() {
        this.forgotPassword = false
        console.log(this.id)
      }
    }
  }
</script>

<style scoped lang="sass">
@import "../sass/input"
@import '../sass/variables'
.login-container
  position: absolute
  margin-top: 100px
  margin-left: 50%
  height: 80vh
  transform: translate(-50%, 0)
  background: url("../assets/logo.png") no-repeat center center
  background-size: contain
  .login
    margin-top: 15%
    width: 60%

</style>