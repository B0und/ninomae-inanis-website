// DEBUG
var gui = new dat.GUI()
var wahFolder = gui.addFolder('Wah section')
wahFolder.open()

var targetElm = document.querySelector('.wah-button img')
var audio = new Audio('assets/ina-wah-echo.mp3')

var props = {
  staggerDelay: 500,
}

const waveOutAnimation = (props) =>
  anime({
    targets: '.wah-wave',
    r: 200,
    opacity: [
      { value: 0.8, duration: 250 },
      { value: 0.0, duration: 1250 },
    ],
    'stroke-width': [5, 26, 0],
    duration: 2000,
    delay: anime.stagger(props.staggerDelay),
    easing: 'easeInOutSine',
    loop: true,
  })

waveOutAnimation(props).play()

wahFolder.add(props, 'staggerDelay', 0, 2000).onChange((newVal) => {
  props.staggerDelay = newVal
  waveOutAnimation().restart()
  waveOutAnimation(props).play()
})

var brightnessTimeline = anime.timeline({
  autoplay: false,
  duration: 2000,
  complete: function () {
    targetElm.style.filter = 'brightness(0.05)'
  },
})

brightnessTimeline.add({
  duration: 2000,
  easing: 'easeInOutExpo',
  update: function (anim) {
    targetElm.style.filter = 'brightness(' + anim.progress / 100 + ')'
  },
})

const wahClick = () => {
  brightnessTimeline.play()
  setTimeout(() => {
    audio.play()
  }, 1000)
}

document.querySelector('.wah-button img').onclick = wahClick
