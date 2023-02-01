const nabEmail = document.querySelector('.nab-email')
const menuDesktop = document.querySelector('.desktop-menu')

nabEmail.addEventListener('click', toggleMenuDesktop)

function toggleMenuDesktop () {
    menuDesktop.classList.toggle('inactive')
}