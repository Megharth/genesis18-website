<template>
  <transition name="slide-in">
    <div>
      <navbarComponent></navbarComponent>
      <div class="container register">
        <div class="heading">Register</div>
        <div class="sub-heading">Name</div>
        <b-input-group size="lg">
          <b-form-input v-model="name" placeholder="Name"></b-form-input>
        </b-input-group>
        <div class="sub-heading">Id number</div>
        <b-input-group size="lg">
          <b-form-select v-model="yearSelected" :options="yearOptions"></b-form-select>
          <b-form-select v-model="branchSelected" :options="branchOptions"></b-form-select>
          <b-form-input v-model="id" placeholder="038"></b-form-input>
        </b-input-group>
        <div class="sub-heading">Mobile Number</div>
        <b-input-group size="lg">
          <b-form-input v-model="mobile" placeholder="Mobile Number"></b-form-input>
        </b-input-group>
        <div class="note">Note: Use the correct mobile as all the confirmations will be sent to it.</div>
        <button class="btn mx-auto" @click="react">Submit</button>
        <div class="error heading" v-if="error">Please fill all the fields correctly.</div>
        <div class="errorMsg">{{errorMsg}}</div>
      </div>
    </div>
  </transition>

</template>

<script>

  import navbarComponent from '../components/navbarComponent'
  import VueRecaptcha from 'vue-recaptcha'

  export default{
    name: 'Register',
    components: {
      navbarComponent,
      VueRecaptcha
    },
    data() {
      return {
        name: null,
        mobile: null,
        id: '',
        yearSelected: null,
        branchSelected: null,
        captcha: false,
        error: false,
        errorMsg: null,
        yearOptions: [
          {
             value: null, text: 'Year'
          },
          {
            value: "18", text: '18'
          },
          {
            value: "17", text: '17'
          },
          {
            value: "16", text: '16'
          },
          {
            value: "15", text: '15'
          }
        ],
        branchOptions: [
          {
            value: null, text: 'Branch'
          },
          {
            value: 'ce', text: 'CE'
          },
          {
            value: 'el', text: 'EL'
          },
          {
            value: 'ee', text: 'EE'
          },
          {
            value: 'it', text: 'IT'
          },
          {
            value: 'cp', text: 'CP'
          },
          {
            value: 'ec', text: 'EC'
          },
          {
            value: 'me', text: 'ME'
          },
          {
            value: 'pe', text: 'PE'
          }
        ]
      }
    },
    methods: {
      react() {
        if(this.name && this.mobile && this.id.length >= 2 && this.id.length <=3 && this.yearSelected && this.branchSelected){
          let id = this.yearSelected + this.branchSelected + this.id
          let year = 19 - parseInt(this.yearSelected)
          this.$http.post('https://floating-mesa-45263.herokuapp.com/signup', {
            id: id,
            name: this.name,
            number: this.mobile,
            year: year.toString(),
            branch: this.branchSelected
          }).then(function(response) {
            this.$router.push('/login')
          }).catch(function(error) {
            this.errorMsg = error.body.message
          })
        }
        else
          this.error = true
      }
    }
  }
</script>

<style scoped lang="sass">
@import '../sass/input'
@import '../sass/variables'

.register
  position: absolute
  margin-top: 100px
  margin-left: 50%
  transform: translate(-50%, 0)

.sub-heading
  margin-top: 10px

.note
  margin-top: 10px
  font-size: 20px
  color: white
  text-align: center
.error
  margin-top: 3%
  font-size: 30px

.input-group
  margin-top: 5px

.form-control
  margin-right: 10px

.errorMsg
  font-size: 22px
  color: white
  text-align: center
</style>