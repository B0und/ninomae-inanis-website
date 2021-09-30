let artImg1 = require('../assets/art-img1.jpg')
let artImg2 = require('../assets/art-img2.jpg')
let artImg3 = require('../assets/art-img3.jpg')
let memeImg1 = require('../assets/meme-img1.jpg')
let memeImg2 = require('../assets/meme-img2.jpg')
let memeImg3 = require('../assets/meme-img3.jpg')

let artBtn = document.getElementById('art-switch-btn')
const img1 = document.getElementById('img-1')
const img2 = document.getElementById('img-2')
const img3 = document.getElementById('img-3')

const artSection = document.getElementsByClassName('art-section')

let isPressed = false

const waveAnimation = anime({
  targets: '.art-wave',
  r: 200,
  opacity: [
    { value: 0.8, duration: 250 },
    { value: 0.0, duration: 1250 },
  ],
  'stroke-width': [5, 18, 0],
  duration: 2000,
  delay: anime.stagger(500),
  easing: 'easeInOutSine',
  loop: true,
})

waveAnimation.play()

artBtn.addEventListener('click', () => {
  isPressed = !isPressed
  artBtn.classList.toggle('thumbnail-text-style')

  if (isPressed) {
    artBtn.textContent = 'thumbnails'
    img1.src = memeImg1
    img2.src = memeImg2
    img3.src = memeImg3
    waveAnimation.restart()
    waveAnimation.pause()
  } else {
    artBtn.textContent = 'art'
    img1.src = artImg1
    img2.src = artImg2
    img3.src = artImg3
    waveAnimation.play()
  }
  document
    .getElementById('art-section')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
