let artImg1 = require('../assets/art-img1.jpg')
let artImg1avif = require('../assets/art-img1.avif')

let artImg2 = require('../assets/art-img2.jpg')
let artImg2avif = require('../assets/art-img2.avif')

let artImg3 = require('../assets/art-img3.jpg')
let artImg3avif = require('../assets/art-img3.avif')

let memeImg1 = require('../assets/meme-img1.jpg')
let memeImg1avif = require('../assets/meme-img1.avif')

let memeImg2 = require('../assets/meme-img2.jpg')
let memeImg2avif = require('../assets/meme-img2.avif')

let memeImg3 = require('../assets/meme-img3.jpg')
let memeImg3avif = require('../assets/meme-img3.avif')

let artBtn = document.getElementById('art-switch-btn')

let img1src1 = document.getElementById('img1src1')
let img1src2 = document.getElementById('img1src2')
let img1src3 = document.getElementById('img1src3')

let img2src1 = document.getElementById('img2src1')
let img2src2 = document.getElementById('img2src2')
let img2src3 = document.getElementById('img2src3')

let img3src1 = document.getElementById('img3src1')
let img3src2 = document.getElementById('img3src2')
let img3src3 = document.getElementById('img3src3')

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
    img1src1.srcset = memeImg1avif
    img1src2.srcset = memeImg1
    img1src3.src = memeImg1

    img2src1.srcset = memeImg2avif
    img2src2.srcset = memeImg2
    img2src3.src = memeImg2

    img3src1.srcset = memeImg3avif
    img3src2.srcset = memeImg3
    img3src3.src = memeImg3

    waveAnimation.restart()
    waveAnimation.pause()
  } else {
    artBtn.textContent = 'art'
    img1src1.srcset = artImg1avif
    img1src2.srcset = artImg1
    img1src3.src = artImg1

    img2src1.srcset = artImg2avif
    img2src2.srcset = artImg2
    img2src3.src = artImg2

    img3src1.srcset = artImg3avif
    img3src2.srcset = artImg3
    img3src3.src = artImg3
    waveAnimation.play()
  }
  document
    .getElementById('art-section')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
