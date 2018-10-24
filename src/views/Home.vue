<template>
  <transition name="fade">
    <div class="home">
      <navbarComponent></navbarComponent>
      <landingComponent class="logo"></landingComponent>
      <div class="about" id="about">
        <div class="heading">About Genesis</div>
        <div class="description">
          <div class="content">
            As the legacy of innovation and discoveries continue to flow through each
            youngster’s blood, Genesis’18 comes as a perfect stage cum platform for students
            of BVM to learn, innovate and experience things like never before. This Technical
            Festival will provide the students with opportunities to explore and discuss issues
            of scientific and Technological interest and motivate them to administer their ideas
            in real life application.
          </div>
          <div class="content">
            Genesis’18 comes out with great expectations as its predecessor Genesis’17 was a
            great success with over 1300 entries in all events. The main purpose continues to
            remain encouragement of students to participate and to maintain the quality of
            events so as to let the students have a wonderful overall experience.
          </div>
          <div class="content">
            With 27 Technical events and 3 non-technical events, Genesis’18 strives to have a
            massive participation of over 3000 entries.
          </div>
        </div>
      </div>
      <div class="departments">
        <div class="heading">
          Departments
        </div>
        <div class="container">
          <div class="row">
            <div v-for="department in departments" class="col-sm-3">
              <div class="department-card mx-auto" @click="moveRoute(department.id)">
                <div class="dept-name"><span>{{department.name}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sponsors">
        <div class="heading">Sponsors</div>
        <div class="cards">
          <div class="sponsor-img card"><img src="../assets/ice_logo.png" alt=""></div>
          <div class="sponsor-img card"><img src="../assets/horizon_logo.png" alt=""></div>
          <div class="sponsor-img card"><img src="../assets/Kanan.png" alt=""></div>
        </div>
        <div class="cards">
          <div class="small-sponsor-img card"><img src="../assets/logos.png" alt=""></div>
          <div class="small-sponsor-img card"><img src="../assets/CSA.png" alt=""></div>
        </div>
      </div>
    </div>
  </transition>
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
@import '../sass/home'

</style>
