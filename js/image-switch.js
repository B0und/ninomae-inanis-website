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
    img1.src = 'assets/meme-img1.jpg'
    img2.src = 'assets/meme-img2.jpg'
    img3.src = 'assets/meme-img3.jpg'
    waveAnimation.restart()
    waveAnimation.pause()
  } else {
    artBtn.textContent = 'art'
    img1.src = 'assets/art-img3.jpg'
    img2.src = 'assets/art-img2.jpg'
    img3.src = 'assets/art-img1.jpg'
    waveAnimation.play()
  }
  document
    .getElementById('art-section')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
