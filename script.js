AOS.init({
    offset: 150,
    duration: 1000,
  });  

const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuLinks = document.querySelectorAll('.menu-links li a')

menu.addEventListener('click',()=>{
  mobileMenu.classList.toggle('active')
})

menuLinks.forEach(menuLink =>{
  menuLink.addEventListener('click',()=>{
    mobileMenu.classList.remove('active')
  })
})