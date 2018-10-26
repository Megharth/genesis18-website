<template>
  <transition name="swirl-in">
    <div>
      <navbarComponent></navbarComponent>
      <div class="container-fluid team-page">
        <div class="heading">Team</div>
        <div class="team">
          <div class="heads">
            <div class="card" v-for="person in team.leaders">
              <div class="card-header">{{person.name}}</div>
              <div class="card-body">
                <div>{{person.position}}</div>
                <div>{{person.number}}</div>
              </div>
            </div>
          </div>
          <div class="tech-heads">
            <div class="card" v-for="person in team.techHeads">
              <div class="card-header">{{person.name}}</div>
              <div class="card-body">
                <div>{{person.position}}</div>
                <div>{{person.number}}</div>
              </div>
            </div>
          </div>
          <div class="team">
            <div class="card" v-for="person in team.team">
              <div class="card-header">{{person.name}}</div>
              <div class="card-body">
                <div>{{person.position}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import navbarComponent from '../components/navbarComponent'
export default {
  name: 'Team',
  components: {
    navbarComponent
  },
  data() {
    return {
      team: {
        leaders: [
          {
            name: "Raj Ambani",
            position: "General Secretary",
            number: 9106039994
          },
          {
            name: "Harshang Patel",
            position: "Joint General Secretary",
            number: 9429958709
          },
          {
            name: "Kalyani Bhatt",
            position: "Ladies Representative",
            number: 8141764147
          }
        ],
        techHeads: [
          {
            name: "Zaran Patel",
            position: "Tech Head",
            number: 7201997252
          },
          {
            name: "Darshil Gondaliya",
            position: "Tech Head",
            number: 9913235338
          }
        ],
        team: [
          {
            name: "Ashesh Sheth",
            position: "Publicity Head"
          },
          {
            name: "Nijanshi Thakkar",
            position: "Publicity Head"
          },
          {
            name: "Ravi Patel",
            position: "Logistic Head"
          },
          {
            name: "Love Sharma",
            position: "Logistic Head"
          },
          {
            name: "Dhvanit Trivedi",
            position: "Graphics Head"
          },
          {
            name: "Harsh Patel",
            position: "Graphics Head"
          },
          {
            name: "Abhishek Pankhaniya",
            position: "Decoration Head"
          },
          {
            name: "Jenish Vaghasiya",
            position: "Decoration Head"
          },
          {
            name: "Megharth Lakhataria",
            position: "Developers Head"
          },
          {
            name: "Rushi Rami",
            position: "Developers Head"
          },
          {
            name: "Raj Kadhi",
            position: "Documentation Head"
          }
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>

@import '../sass/variables'
.team-page
  position: absolute
  margin-top: 100px
  padding-bottom: 50px
.heads, .tech-heads, .team
  .card
    display: inline-block
.team
  text-align: center
  .card
    min-width: 250px
    max-width: 300px
    margin-top: 20px
    margin-left: 15px
    box-shadow: -2px 2px 2px 2px #455455
    text-transform: uppercase
    font-weight: bolder
    .card-header
      background: #5a6268
      color: white
      border: 2px solid White
      border-bottom-left-radius: 10px
      border-bottom-right-radius: 10px
    .card-body
      color: $secondaryColor

</style>