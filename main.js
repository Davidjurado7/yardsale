const navEmail = document.querySelector('.nab-email')
const menuDesktop = document.querySelector('.desktop-menu')
const menuHamMobile = document.querySelector('.menu-icon')
const menuMobile = document.querySelector('.mobile-menu')
const carIcon = document.querySelector('.car-container')
const myOrderContainer = document.querySelector('.my-order-container')
const cardContainers = document.querySelector('.card-container')
const productDetails = document.querySelector('.product-detail')
const productClose = document.querySelector('.product-close')

navEmail.addEventListener('click', toggleMenuDesktop)
menuHamMobile.addEventListener('click', toggleMenuMobile)
carIcon.addEventListener('click', toggleCarContainer)
productClose.addEventListener('click', productClosed)


function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')
    myOrderContainer.classList.add('inactive')
    
}

function toggleMenuMobile() {
    myOrderContainer.classList.add('inactive')
    productDetails.classList.add('inactive')
    menuMobile.classList.toggle('inactive')
}

function toggleCarContainer() {
    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
    productDetails.classList.add('inactive')
    myOrderContainer.classList.toggle('inactive') 
    
}

function toggleAsideProductDetails() {
    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
    myOrderContainer.classList.add('inactive')
    productDetails.classList.toggle('inactive')
}

function productClosed() {
    productDetails.classList.add('inactive')
}

const productList = []

productList.push({
    name: 'Bike',
    price: "120 €",
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Ipad',
    price: "500 €",
    img: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
    name: 'Mouse',
    price: "50 €",
    img: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
    name: 'Laptop',
    price: "120 €",
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
    name: 'Bike',
    price: "120 €",
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Ipad',
    price: "500 €",
    img: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
    name: 'Mouse',
    price: "50 €",
    img: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
    name: 'Laptop',
    price: "120 €",
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

function renderProducts(arr) {
    
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        cardContainers.appendChild(productCard)
        
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
        productCard.appendChild(productImg)
        
        const productInfoCard = document.createElement('div')
        productInfoCard.classList.add('product-info-card')
        productCard.appendChild(productInfoCard)
        
        const productCardTitle = document.createElement('div')
        productCardTitle.classList.add('product-card-title')
        productInfoCard.appendChild(productCardTitle)
        
        const productCardTitlePrice = document.createElement('p')
        productCardTitlePrice.innerText = product.price
        productCardTitle.appendChild(productCardTitlePrice)
        
        const productCardTitleName = document.createElement('p')
        productCardTitleName.innerText = product.name
        productCardTitle.appendChild(productCardTitleName)
        
        const productFigure = document.createElement('figure')
        productInfoCard.appendChild(productFigure)
        
        const productFigureImg = document.createElement('img')
        productFigureImg.setAttribute('src', 'file:///Users/davidjurado/Documents/proyectos/yardsale/Icons/bt_add_to_cart.svg')
        productFigure.appendChild(productFigureImg)
        
    }
}
renderProducts(productList)


const productCardImg = document.querySelector('.product-card img')
productCardImg.addEventListener('click', toggleAsideProductDetails)