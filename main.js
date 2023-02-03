const navEmail = document.querySelector('.nab-email')
const menuDesktop = document.querySelector('.desktop-menu')
const menuHamMobile = document.querySelector('.menu-icon')
const menuMobile = document.querySelector('.mobile-menu')
const carIcon = document.querySelector('.car-container')
const myOrder = document.querySelector('.my-order-container')

navEmail.addEventListener('click', toggleMenuDesktop)
menuHamMobile.addEventListener('click', toggleMenuMobile)
carIcon.addEventListener('click', toggleCarContainer)

function toggleMenuDesktop () {
    menuDesktop.classList.toggle('inactive')
    myOrder.classList.add('inactive')

}

function toggleMenuMobile () {
    myOrder.classList.add('inactive')
    menuMobile.classList.toggle('inactive')
}

function toggleCarContainer () {
    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
    myOrder.classList.toggle('inactive') 

}