<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MainComponent'
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
  scroll-behavior: smooth
::-webkit-scrollbar
  display: none

.heading
  text-align: center
  font-size: 45px
  color: #FFFFFF
  font-weight: bold
  text-transform: uppercase
  font-family: 'Play', sans-serif

.sub-heading
  font-size: 28px
  color: white
  text-transform: uppercase
</style>
