let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: "Orange",
        image: 'product-1.png',
        price: 12.99
    },

    {
        id: 2,
        name: "Onions",
        image: 'product-2.png',
        price: 12.93
    },

    {
        id: 3,
        name: "Meat",
        image: 'product-3.png',
        price: 20.89
    },

    {
        id: 4,
        name: "Cabbage",
        image: 'product-4.png',
        price: 10.15
    },

    {
        id: 5,
        name: "Potatoes",
        image: 'product-5.png',
        price: 8.52
    },

    {
        id: 6,
        name: "Avacado",
        image: 'product-6.png',
        price: 14.26
    },

    {
        id: 7,
        name: "Carrot",
        image: 'product-7.png',
        price: 11.01
    },

    {
        id: 8,
        name: "Fresh Lemon",
        image: 'product-8.png',
        price: 8.22
    },

    {
        id: 9,
        name: "Chicken",
        image: 'cart-img-3.png',
        price: 24.10
    },

    {
        id: 10,
        name: "Bread",
        image: 'buy-1.png',
        price: 150.10
    },

    {
        id: 11,
        name: "Milk",
        image: 'buy-2.png',
        price: 250.10
    },

    {
        id: 12,
        name: "Eggs",
        image: 'buy-3.png',
        price: 180.10
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}