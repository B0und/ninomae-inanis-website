let audioUrl = require('../assets/ina-wah-better.mp3');
let audio = new Audio(audioUrl);

var targetElm = document.querySelector('.wah-button img')

let intViewportWidth = window.innerWidth

const waveOutAnimation = anime({
  targets: '.wah-wave-1',
  r: [20, 70],
  opacity: [
    { value: 0.5, duration: 800 },
    { value: 0.0, duration: 600 },
  ],
  'stroke-width': [10, 20, 0],
  duration: 3000,
  easing: 'easeInOutSine',
  loop: true,
})

const waveInAnimation = anime({
  autoplay: false,
  targets: '.wah-wave',
  r: [100, 5],
  opacity: [
    { value: 0.7, duration: 500 },
    { value: 0.1, duration: 1000 },
  ],
  'stroke-width': [18, 5],
  duration: 1800,
  easing: 'easeInOutSine',
  delay: anime.stagger(500),
  loop: false,
})

const wahTextAnimation = anime({
  autoplay: false,
  targets: '.wah-text',
  opacity: [
    { value: 1, duration: 500 },
    { value: 0, duration: 1000 },
  ],
  scale: intViewportWidth > 900 ? 3 : 2,
  duration: 3000,
  easing: 'easeInOutSine',
  loop: false,
})

var wahTimeline = anime.timeline({
  autoplay: false,
  complete: function () {
    document.querySelector('.wah-button img').onclick = wahClick
    targetElm.style.filter =
      'brightness(0.05) drop-shadow(0px 0px 20px rgba(177, 91, 226, 0.733)'

    waveOutAnimation.play()
  },
})

wahTimeline
  .add(
    {
      duration: 3000,
      easing: 'easeInOutExpo',
      update: function (anim) {
        targetElm.style.filter = 'brightness(' + anim.progress / 100 + ')'
      },
    },
    '+=1000'
  )
  .add({
    begin: () => {
      audio.play()
      wahTextAnimation.play()
    },
  })

const wahClick = () => {
  document.querySelector('.wah-button img').onclick = null
  waveOutAnimation.restart()
  waveOutAnimation.pause()
  waveInAnimation.play()
  wahTimeline.play()
}

document.querySelector('.wah-button img').onclick = wahClick
