<template>
  <div class="glitch">
    <div class="glitch-img"></div>
    <div class="glitch-img"></div>
    <div class="glitch-img"></div>
    <div class="glitch-img"></div>
    <div class="text"></div>
    <section>
      <a href="#about" class="scroll-down" address="true"></a>
    </section>
  </div>
</template>

<script>

export default {
  name: 'landingComponent',
  mounted() {

    //Smooth scrolling

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })


    // ——————————————————————————————————————————————————
    // TextScramble
    // ——————————————————————————————————————————————————

    class TextScramble {
      constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
      }
      setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ''
          const to = newText[i] || ''
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
      }
      update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i]
          if (this.frame >= end) {
            complete++
            output += to
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar()
              this.queue[i].char = char
            }
            output += `<span class="dud">${char}</span>`
          } else {
            output += from
          }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
          this.resolve()
        } else {
          this.frameRequest = requestAnimationFrame(this.update)
          this.frame++
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
      }
    }

    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————

    const phrases = [
      'genesis 18'
    ]

    const el = document.querySelector('.text')
    const fx = new TextScramble(el)

    let counter = 0
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000)
      })
      counter = (counter + 1) % phrases.length
    }

    next()
  }
}

</script>

<style scoped lang="sass">
@import '../sass/variables'
@import '../sass/glitch'

.text
  font-size: 45px
  color: $secondaryColor
  height: 100vh
  position: absolute
  font-weight: bolder
  text-shadow: 2px 2px 2px #222
  top: 50%
  left: 50%
  transform: translate(-50%, 0%)

.glitch
  font-family: $neptuneFont
  animation: color 3s ease-in-out
  text-align: center

@keyframes color
  0%
    background: #000

  100%
    background: $primaryColor


.scroll-down
  opacity: 1
  -webkit-transition: all .5s ease-in 3s
  transition: all .5s ease-in 3s
  position: absolute
  bottom: 30px
  left: 50%
  margin-left: -16px
  display: block
  width: 32px
  height: 32px
  border: 2px solid #FFF
  background-size: 14px auto
  border-radius: 50%
  z-index: 0
  -webkit-animation: bounce 2s infinite 2s
  animation: bounce 2s infinite 2s
  -webkit-transition: all .2s ease-in
  transition: all .2s ease-in
  transform: scale(1)
  &:before
    position: absolute
    top: calc(50% - 8px)
    left: calc(50% - 6px)
    transform: rotate(-45deg)
    display: block
    width: 12px
    height: 12px
    content: ""
    border: 2px solid white
    border-width: 0px 0 2px 2px

@keyframes bounce
  0%,
  100%,
  20%,
  50%,
  80%
    -webkit-transform: translateY(0)
    -ms-transform: translateY(0)
    transform: translateY(0)

  40%
    -webkit-transform: translateY(-10px)
    -ms-transform: translateY(-10px)
    transform: translateY(-10px)

  60%
    -webkit-transform: translateY(-5px)
    -ms-transform: translateY(-5px)
    transform: translateY(-5px)
</style>
