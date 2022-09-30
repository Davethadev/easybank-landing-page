const hamburgerIcon = document.getElementById("icon-hamburger")
const navLinksMobile = document.querySelector('.nav-links-mobile')
const header = document.querySelector('.header')

hamburgerIcon.addEventListener('click', function() {
    navLinksMobile.classList.toggle('active')
    header.classList.toggle('active')

    if (this.classList.contains('active')) {
      this.innerHTML = `
      <img src="./images/icon-hamburger.svg" alt="">
      `
  } else {
      this.innerHTML = `
      <img src="./images/icon-close.svg" alt="">
      `
  }
    this.classList.toggle('active')
})