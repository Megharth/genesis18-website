<template>
  <transition name="slide-in">
    <div>
      <navbarComponent></navbarComponent>
      <div class="container register">
        <div class="heading">Register</div>
        <b-input-group size="lg">
          <b-form-input v-model="name" placeholder="Name"></b-form-input>
        </b-input-group>
        <b-input-group size="lg">
          <b-form-input v-model="id" placeholder="Id Number"></b-form-input>
        </b-input-group>
        <b-input-group size="lg">
          <b-form-input v-model="mobile" placeholder="Mobile Number"></b-form-input>
        </b-input-group>
        <b-input-group size="lg">
          <b-form-select v-model="yearSelected" :options="yearOptions"></b-form-select>
        </b-input-group>
        <b-input-group size="lg">
          <b-form-select v-model="branchSelected" :options="branchOptions"> </b-form-select>
        </b-input-group>
        <button class="btn mx-auto" @click="react">Submit</button>
        <div class="error heading" v-if="error">Please fill all the fields.</div>
      </div>
    </div>
  </transition>

</template>

<script>

  import navbarComponent from '../components/navbarComponent'
  export default{
    name: 'Register',
    components: {
      navbarComponent
    },
    data() {
      return {
        name: null,
        mobile: null,
        id: '',
        yearSelected: null,
        branchSelected: null,
        error: false,
        yearOptions: [
          {
             value: null, text: 'Select year'
          },
          {
            value: "1", text: 'First year'
          },
          {
            value: "2", text: 'Second year'
          },
          {
            value: "3", text: 'Third year'
          },
          {
            value: "4", text: 'Fourth year'
          }
        ],
        branchOptions: [
          {
            value: null, text: 'Select Branch'
          },
          {
            value: 'Civil', text: 'Civil'
          },
          {
            value: 'Electronics', text: 'Electronics'
          },
          {
            value: 'Electrical', text: 'Electrical'
          },
          {
            value: 'IT', text: 'IT'
          },
          {
            value: 'Computer', text: 'Computer'
          },
          {
            value: 'EC', text: 'EC'
          },
          {
            value: 'Mechanical', text: 'Mechanical'
          },
          {
            value: 'Production', text: 'Production'
          }
        ]
      }
    },
    methods: {
      react() {
        if(this.name && this.mobile && this.id && this.yearSelected && this.branchSelected){
          let id = this.id.toLowerCase()
          this.$http.post('https://floating-mesa-45263.herokuapp.com/signup', {
            id: id,
            name: this.name,
            number: this.mobile,
            year: this.yearSelected,
            branch: this.branchSelected
          }).then(function(response) {
            console.log(response)
            this.$router.push('/login')
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

.error
  margin-top: 3%
  font-size: 30px
</style>