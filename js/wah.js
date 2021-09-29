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

// const waveInAnimation = anime({
//   targets: '.wah-wave',
//   r: [100, 10],
//   opacity: [
//     { value: 0.5, duration: 250 },
//     { value: 0.0, duration: 1000 },
//   ],
//   'stroke-width': [10, 20, 0],
//   duration: 2500,
//   easing: 'easeInOutSine',
//   loop: true,
// })

var wahTimeline = anime.timeline({
  autoplay: false,
  duration: 3000,
  complete: function () {
    targetElm.style.filter =
      'brightness(0.05) drop-shadow(0px 0px 20px rgba(177, 91, 226, 0.733)'
    waveOutAnimation.play()
  },
})

wahTimeline
  .add({
    duration: 2000,
    easing: 'easeInOutExpo',
    update: function (anim) {
      targetElm.style.filter = 'brightness(' + anim.progress / 100 + ')'
    },
  })
  .add({
    begin: () => {
      audio.play()
    },
  })

const wahClick = () => {
  waveOutAnimation.restart()
  waveOutAnimation.pause()
  wahTimeline.play()
}

document.querySelector('.wah-button img').onclick = wahClick
