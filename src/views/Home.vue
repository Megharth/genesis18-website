<template>
  <div class="home">
    <navbarComponent></navbarComponent>
    <landingComponent class="logo"></landingComponent>
    <div class="about" id="about">
      <div class="heading">About Genesis</div>
      <div class="discription">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iusto perferendis quam unde vitae. Ab
          aperiam consectetur dignissimos id, odio repudiandae similique sint ut vel. Ab atque inventore quae voluptas.
        </div>
        <div>Aliquid blanditiis cupiditate dolor dolores facere facilis quidem reiciendis, rem? Ab autem consequatur
          corporis doloremque facilis fugiat harum molestias nulla provident quas quibusdam quisquam quod similique sit,
          unde velit voluptatibus?
        </div>
        <div>A aut eaque enim error esse et fugiat iste itaque maiores modi molestiae molestias necessitatibus officiis
          quae quaerat quam quas quasi, quos repudiandae sed tempore unde veritatis voluptate voluptates voluptatibus?
        </div>
        <div>Accusamus aut deleniti eius esse explicabo facere facilis fuga illum inventore ipsum iste laudantium,
          neque, numquam perspiciatis porro praesentium quae quas quisquam repellat rerum similique sint tempora tempore
          voluptate voluptatibus.
        </div>
        <div>A blanditiis dolor, dolorum expedita illo in modi mollitia nihil obcaecati perferendis similique suscipit
          vitae. Consequatur corporis cupiditate dignissimos laboriosam, laborum libero molestias, numquam perferendis
          provident, ratione similique voluptas voluptatum.
        </div>
      </div>
    </div>
    <div class="departments">
      <div class="container">
        <div class="row">
          <div class="heading col-sm-12">
            Departments
          </div>
        </div>
        <div class="row">
          <div v-for="department in departments" class="col-sm-3">
            <div class="department-card mx-auto" @click="moveRoute(department.id)">
              <div class="row">
                <div class="col-sm-12">
                  <img :src="department.imgUrl" :alt="department.name">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 dept-name">{{department.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import landingComponent from '../components/landingComponent.vue'
import navbarComponent from '../components/navbarComponent'
export default {
  name: 'home',
  components: {
    landingComponent,
    navbarComponent
  },
  methods: {
    moveRoute(id) {
      this.$router.push({path: 'department/' + id})
    }
  },
  computed: {
     ...mapState({
       departments: state => state.departments
     })
  },
  mounted() {
    document.querySelector('.navbar-dark').style.opacity = 0
    let flag
    window.onscroll = function() {
      if(window.scrollY > 500){
        document.querySelector('.navbar-dark').classList.add('drop')
        document.querySelector('.navbar-dark').classList.remove('pull')
        flag = 1
      }

      if(window.scrollY < 500 && window.scrollY > 250){
        if(flag === 1){
          document.querySelector('.navbar-dark').classList.add('pull')
          document.querySelector('.navbar-dark').classList.remove('drop')
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import '../sass/variables'

.logo, .about, .departments
  min-height: 100vh
  padding: 5%
  z-index: 0

.about
  background: $secondaryColor
  width: 100%

.departments
  background: $primaryColor
  margin-top: 30px
  text-align: center
  .container
    padding-top: 20px

  .department-card
    background: #FFFFFF
    color: #EF8354
    cursor: pointer
    font-size: 24px
    text-transform: uppercase
    font-weight: bold
    max-width: 300px
    margin-bottom: 20px
    .dept-name
      padding: 10px
    img
      width: inherit


</style>
