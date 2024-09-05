function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.mobile-nav-btn')
  const nav = document.querySelector('.mobile-nav')
  const menuIcon = document.querySelector('.nav-icon')
  const navLinks = document.querySelectorAll('.mobile-nav a')

  navBtn.onclick = function() {
    nav.classList.toggle('mobile-nav--open')
    menuIcon.classList.toggle('nav-icon--active')
    document.body.classList.toggle('no-scroll')
  }

  navLinks.forEach((el) => {
    el.addEventListener('click', () => {
      nav.classList.remove('mobile-nav--open')
      document.body.classList.remove('no-scroll')
      menuIcon?.classList.remove('nav-icon--active')
    })
  })
}

export default mobileNav
