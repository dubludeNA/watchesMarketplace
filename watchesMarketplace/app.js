// Variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

let cart = [];
console.log("plm");
// Getting the products
class Products {
    async getProducts(){
        try{
            let result = await fetch("products.json");
            console.log("cv")
            return result;
        }
        catch (error){
            console.log(error);
            console.log("cv")

        }
    }
}
// Display products
class UI {

}

// Local storage
class Storage{

}

document.addEventListener("DOMcontentLoaded", () => {
    const ui = new UI()
    const products = new Products();

    // get all products
    products.getProducts().then(data => console.log(data));
})