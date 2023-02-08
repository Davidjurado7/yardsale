const navEmail = document.querySelector('.nab-email')
const menuDesktop = document.querySelector('.desktop-menu')
const menuHamMobile = document.querySelector('.menu-icon')
const menuMobile = document.querySelector('.mobile-menu')
const carIcon = document.querySelector('.car-container')
const myOrderContainer = document.querySelector('.my-order-container')
const cardContainers = document.querySelector('.card-container')
const productDetails = document.querySelector('.product-detail')
const productClose = document.querySelector('.product-close')
const productPrice = document.querySelector('.product-price')
const productName = document.querySelector('.product-name')
const productImage = document.querySelector('.product-image')
const productDescription = document.querySelector('.product-description')
const orderAddContainer = document.querySelector('.order-add-container')
const totalPrice = document.querySelector('.total-price p')
const numberofproduct = document.querySelector('.number-of-product')
const addProductCar = document.querySelector('.add-product-car')



const productList = []

let totalOrderPrice = 0
let productListOrder = []

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'bicycle, also called bike, two-wheeled steerable machine that is pedaled by the riders feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork.',
})
productList.push({
    name: 'Ipad',
    price: 500,
    img: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'iPad mini is meticulously designed to be absolutely beautiful. An all-new enclosure features a new, larger edge-to-edge screen, along with narrow borders and elegant rounded corners.'
})
productList.push({
    name: 'Mouse',
    price: 50,
    img: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'The mouse is a small, movable device that lets you control a range of things on a computer. Most types of mouse have two buttons, and some will have a wheel in between the buttons.'
})
productList.push({
    name: 'Laptop',
    price: 700,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings.'
})

navEmail.addEventListener('click', toggleMenuDesktop)
menuHamMobile.addEventListener('click', toggleMenuMobile)
carIcon.addEventListener('click', toggleCarContainer)
productClose.addEventListener('click', productClosed)


renderProducts(productList)

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

function openProductDetails(imgSrc) {
    const indexProductSelect = productList.findIndex(product => product.img == imgSrc) 
    console.log(indexProductSelect)

    productPrice.innerText = (productList[indexProductSelect].price)
    productName.innerText = (productList[indexProductSelect].name)
    productDescription.innerText = (productList[indexProductSelect].description)
    productImage.setAttribute('src', productList[indexProductSelect].img)

    addProductCar.addEventListener('click', addCar => {
        productListOrder.push(productList[indexProductSelect])
        console.log(indexProductSelect)

        totalOrderPrice =  totalOrderPrice + productList[indexProductSelect].price
        renderProductsCar(productListOrder)
        numberofproduct.innerText = productListOrder.length
    })

    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
    myOrderContainer.classList.add('inactive')
    productDetails.classList.remove('inactive')
}

function productClosed() {
    productDetails.classList.add('inactive')
}

function searchAndAddProductCar(productSelect) {    
    const productAdd = productList.filter(product => product.name == productSelect.id)
    productListOrder.push(productAdd[0])
    
    totalOrderPrice =  totalOrderPrice + productAdd[0].price

    renderProductsCar(productListOrder)

    numberofproduct.innerText = productListOrder.length
}

function renderProductsCar(productListOrder) {    
    totalPrice.innerText = `${totalOrderPrice} €`
    
    while (orderAddContainer.firstChild) {
        orderAddContainer.removeChild(orderAddContainer.firstChild);
      }

    for (product of productListOrder) {
    
        const articlesContainer = document.createElement('div')
        articlesContainer.classList.add('articles-container')
        orderAddContainer.appendChild(articlesContainer)

        const article = document.createElement('div')
        article.classList.add('article')
        articlesContainer.appendChild(article)

        const articleDiv = document.createElement('div')
        article.appendChild(articleDiv)

        const articleImg = document.createElement('img')
        articleImg.setAttribute('src', product.img)
        articleImg.classList.add('article-img')
        articleDiv.appendChild(articleImg)

        const articleP = document.createElement('p')
        articleP.innerText = (product.name)
        articleDiv.appendChild(articleP)

        const section = document.createElement('section')
        article.appendChild(section)

        const sectionP = document.createElement('p')
        sectionP.innerText = `${(product.price)} €`
        totalPrice.innerText = `${totalOrderPrice} €`
        section.appendChild(sectionP)
        
        const sectionIcon = document.createElement('img')
        sectionIcon.setAttribute('src', './Icons/icon_close.png')
        sectionIcon.classList.add('close')
        sectionIcon.classList.add(product.name)
        
        section.appendChild(sectionIcon)         
        
        const iconRemoveProductCar = document.querySelector(`.${(product.name)}`)
        iconRemoveProductCar.addEventListener('click', funtion => {removeProductCar(iconRemoveProductCar)})
    }

}

function renderProducts(arr) {
    
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        cardContainers.appendChild(productCard)
        
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
        productCard.appendChild(productImg)
        productImg.addEventListener('click', nameImg => {
            openProductDetails(productImg.src)
        })
        
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
        productFigureImg.setAttribute('src', './Icons/bt_add_to_cart.svg')
        productFigure.setAttribute('id', product.name)
        productFigure.appendChild(productFigureImg)
        const productSelect = document.getElementById(product.name)
        productFigure.addEventListener('click', product => {
            searchAndAddProductCar(productSelect)
        })    
        
    }
}

function removeProductCar(productRemove) {
    const positionElementRemove = productListOrder.findIndex(product => product.name == productRemove.classList[1])
    console.log(positionElementRemove)
    
    if (positionElementRemove >= 0) {
        totalOrderPrice = totalOrderPrice - (productListOrder[positionElementRemove].price)
        productListOrder.splice(positionElementRemove, 1)
        numberofproduct.innerText = productListOrder.length
        renderProductsCar(productListOrder)     
    } else {
        return
    }
}

