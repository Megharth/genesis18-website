<template>
  <div>
    <navbarComponent></navbarComponent>
    <div class="container register">
      <b-input-group size="lg">
        <b-form-input placeholder="Name"></b-form-input>
      </b-input-group>
      <b-input-group size="lg">
        <b-form-input placeholder="Id Number"></b-form-input>
      </b-input-group>
      <b-input-group size="lg">
        <b-form-input placeholder="Mobile Number"></b-form-input>
      </b-input-group>
      <b-input-group size="lg">
        <b-form-select v-model="yearSelected" :options="yearOptions" placeholder="year"/>
      </b-input-group>
      <b-input-group size="lg">
        <b-form-select v-model="branchSelected" :options="branchOptions" placeholder="year" />
      </b-input-group>
      <button class="btn mx-auto" @click="react">Submit</button>
    </div>
  </div>
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
        yearSelected: null,
        branchSelected: null,
        yearOptions: [
          {
             value: null, text: 'Select year'
          },
          {
            value: 1, text: 'First year'
          },
          {
            value: 2, text: 'Second year'
          },
          {
            value: 3, text: 'Third year'
          },
          {
            value: 4, text: 'Fourth year'
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
        console.log(this.yearSelected)
      }
    }
  }
</script>

<style scoped lang="sass">

@import '../sass/input'
.register
  margin-top: 10%

</style>