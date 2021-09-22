// anime({
//   targets: '.wah-button',
//   filter: "brightness(1)",
//   duration: 250,
// })

var targetElm = document.querySelector('.wah-button img')
var audio = new Audio('assets/ina-wah-echo.mp3')

var tl = anime.timeline({
  autoplay: false,
  duration: 2000,
  complete: function () {
    targetElm.style.filter = 'brightness(0.05)'
  },
})

tl.add({
  duration: 2000,
  easing: 'easeInOutExpo',
  update: function (anim) {
    targetElm.style.filter = 'brightness(' + anim.progress / 100 + ')'
  },
})

const wahClick = () => {
  tl.play()
  setTimeout(() => {
    audio.play()
  }, 1000)
}

document.querySelector('.wah-button img').onclick = wahClick
