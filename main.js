const navEmail = document.querySelector('.nab-email')
const menuDesktop = document.querySelector('.desktop-menu')
const menuHamMobile = document.querySelector('.menu-icon')
const menuMobile = document.querySelector('.mobile-menu')
const carIcon = document.querySelector('.car-container')
const myOrderContainer = document.querySelector('.my-order-container')
const cardContainers = document.querySelector('.card-container')

navEmail.addEventListener('click', toggleMenuDesktop)
menuHamMobile.addEventListener('click', toggleMenuMobile)
carIcon.addEventListener('click', toggleCarContainer)

function toggleMenuDesktop () {
    menuDesktop.classList.toggle('inactive')
    myOrderContainer.classList.add('inactive')

}

function toggleMenuMobile () {
    myOrderContainer.classList.add('inactive')
    menuMobile.classList.toggle('inactive')
}

function toggleCarContainer () {
    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
    myOrderContainer.classList.toggle('inactive') 

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
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        productCard.appendChild(productInfo)
        
        const productCardTitle = document.createElement('div')
        productCardTitle.classList.add('product-card-title')
        productInfo.appendChild(productCardTitle)
        
        const productCardTitlePrice = document.createElement('p')
        productCardTitlePrice.innerText = product.price
        productCardTitle.appendChild(productCardTitlePrice)
        
        const productCardTitleName = document.createElement('p')
        productCardTitleName.innerText = product.name
        productCardTitle.appendChild(productCardTitleName)
        
        const productFigure = document.createElement('figure')
        productInfo.appendChild(productFigure)
        
        const productFigureImg = document.createElement('img')
        productFigureImg.setAttribute('src', 'file:///Users/davidjurado/Documents/proyectos/yardsale/Icons/bt_add_to_cart.svg')
        productFigure.appendChild(productFigureImg)
        
    }
}
renderProducts(productList)