let artBtn = document.getElementById('art-switch-btn')
const img1 = document.getElementById('img-1')
const img2 = document.getElementById('img-2')
const img3 = document.getElementById('img-3')

const artSection = document.getElementsByClassName('art-section')

let isPressed = false

artBtn.addEventListener('click', () => {
  isPressed = !isPressed
  artBtn.classList.toggle('thumbnail-text-style')

  if (isPressed) {
    artBtn.textContent = 'thumbnails'

    img1.src = 'assets/meme-img1.jpg'
    img2.src = 'assets/meme-img2.jpg'
    img3.src = 'assets/meme-img3.jpg'
  } else {
    artBtn.textContent = 'art'
    img1.src = 'assets/art-img3.jpg'
    img2.src = 'assets/art-img2.jpg'
    img3.src = 'assets/art-img1.jpg'
  }
  document
    .getElementById('art-section')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
