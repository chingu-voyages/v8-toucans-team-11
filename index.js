/*jshint esversion: 6 */
const button =  document.querySelector('#backToTop')
const scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    button.style.display = 'block'
  } else {
    button.style.display = 'none'
  }
}
window.addEventListener('scroll', scrollFunction)
button.addEventListener('click', (e) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  // document.querySelector('#headline').scrollIntoView({
  //   behavior: 'smooth'
  // })
})

// typing animation
var options = {
  strings: ["build the community your fans will love"],
  typeSpeed: 30
}

var typed = new Typed(".main-heading", options);
