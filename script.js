document.addEventListener('DOMContentLoaded', function () {
  // Navigation functionality
  const hamburger = document.querySelector('.hamburger')
  const nav = document.querySelector('nav')
  const navLinks = document.querySelectorAll('nav ul li a')

  function closeNav() {
    nav.classList.remove('active')
  }

  // Toggle navigation menu when hamburger button is clicked
  hamburger.addEventListener('click', function (event) {
    event.stopPropagation()
    nav.classList.toggle('active')
  })

  // Close the menu if clicked anywhere on the document
  document.addEventListener('click', closeNav)

  // Prevent menu from closing if clicked inside the menu
  nav.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  // Close the menu when a navigation link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav)
  })

  // Close the menu when window is resized beyond a certain width
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeNav()
    }
  })

  // Close the menu when the page is minimized
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      closeNav()
    }
  })
})

// Scroll to registration form when "Join Now" button is clicked
document
  .getElementById('join-now-button')
  .addEventListener('click', function () {
    scrollToSection('registration-form')
  })

// Scroll to registration form when "Explore More" button is clicked
document
  .getElementById('explore-more-button')
  .addEventListener('click', function () {
    scrollToSection('registration-form')
  })

// Function to scroll to a specific section of the page
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId)
  if (section) {
    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  const scrollLinks = document.querySelectorAll('a[href^="#"]')

  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', smoothScroll)
  }

  function smoothScroll(event) {
    event.preventDefault()
    const targetId = this.getAttribute('href')
    const targetPosition = document.querySelector(targetId).offsetTop
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000
    let start = null

    window.requestAnimationFrame(step)

    function step(timestamp) {
      if (!start) start = timestamp
      const progress = timestamp - start
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      )
      if (progress < duration) window.requestAnimationFrame(step)
    }

    function easeInOutCubic(t, b, c, d) {
      // cubic easing in/out - acceleration until halfway, then deceleration
      t /= d / 2
      if (t < 1) return (c / 2) * t * t * t + b
      t -= 2
      return (c / 2) * (t * t * t + 2) + b
    }
  }
})
