var targetElm = document.querySelector('.wah-button img')
var audio = new Audio('assets/ina-wah-echo.mp3')

let props = {
  staggerDelay: 500,
  radius: 200,
}

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

var wahTimeline = anime.timeline({
  autoplay: false,
  complete: function () {
    targetElm.style.filter =
      'brightness(0.05) drop-shadow(0px 0px 20px rgba(177, 91, 226, 0.733)'
    waveOutAnimation.play()
  },
})

wahTimeline
  .add({
    duration: 4000,
    easing: 'easeInOutExpo',
    update: function (anim) {
      targetElm.style.filter = 'brightness(' + anim.progress / 100 + ')'
    },
  }, "+=1000")
  .add({
    begin: () => {
      audio.play()
    },
  })

const wahClick = () => {
  waveOutAnimation.restart()
  waveOutAnimation.pause()
  waveInAnimation.play()
  wahTimeline.play()
}

document.querySelector('.wah-button img').onclick = wahClick
