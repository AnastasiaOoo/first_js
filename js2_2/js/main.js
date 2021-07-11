import API from "./API.js";
import GoodList from "./model/GoodList.js";
import Cart from "./model/Cart.js";
import Card from "./view/Card.js";
import GoodInCart from "./model/GoodInCart.js";

function addToCart(id) {
    const good = goodList.getById(id);
    cart.add(new GoodInCart(good));

    console.log(cart)
}

function removeFromCart(id){
    const good = goodList.getById(id);
    cart.removeGood(new GoodInCart(good));

    console.log(cart)
}

const goodList = new GoodList(API.fetch());
const cart = new Cart([]);

const $product = document.querySelector('.product');

const cards = goodList.get().map(good => new Card(good));

cards.forEach(card => {
    card.setAddHandler(addToCart);
    card.setAddHandler(removeFromCart);
    card.render($product);
});


