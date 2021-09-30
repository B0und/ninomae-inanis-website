var heroTimeline = anime.timeline({
  autoplay: true,
  loop: false,
  complete: () => {
    imageShake.play()
  },
})

heroTimeline
  .add({
    targets: '.hero__name-bg',
    scaleX: [0.1, 1],
    opacity: [0.1, 1],
    easing: 'easeOutSine',
    duration: 800,
  })
  .add(
    {
      targets: '.hero__bg',
      scaleX: [0.1, 1],
      opacity: [0.1, 1],
      easing: 'easeOutSine',
      duration: 800,
    },
    '-=800'
  )
  .add(
    {
      targets: 'h1, .hero-container p, .hero-container h2, .hero-btn',
      opacity: [0, 1],
      easing: 'easeOutSine',
      duration: 800,
    },
    '-=400'
  )
  .add(
    {
      targets: '.hero-img',
      opacity: [0, 1],
      easing: 'easeOutSine',
      duration: 800,
      direction: 'normal',
    },
    '-=400'
  )

const imageShake = anime({
  autoplay: false,
  targets: '.hero-img',
  translateY: [10, -10],
  easing: 'easeInOutSine',
  duration: 2000,
  loop: true,
  direction: 'alternate',
})
