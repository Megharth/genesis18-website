<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import navbarComponent from './components/navbarComponent'
export default {
  name: 'MainComponent',
  components: {
    navbarComponent
  }
}
</script>
<style lang="sass">
@font-face
  font-family: 'Neptune'
  src: url('./assets/Neptune_Trial.otf') format('opentype')
  src: url('./assets/NeptuneTrial-Bold.eot')
  src: url('./assets/NeptuneTrial-Bold.woff2') format('woff2')
  src: url('./assets/NeptuneTrial-Bold.woff') format('woff')
  src: url('./assets/NeptuneTrial-Bold.ttf') format('truetype')

@import url('https://fonts.googleapis.com/css?family=Titillium+Web|Play')

body
  background: #4F5D75
  font-family: 'Titillium Web', sans-serif

::-webkit-scrollbar
  display: none

.heading
  text-align: center
  font-size: 45px
  color: #FFFFFF
  font-weight: bold
  text-transform: uppercase
  font-family: 'Play', sans-serif

.discription
  text-align: justify
  font-size: 18px
  color: #BFC0C0
</style>
