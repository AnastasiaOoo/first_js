import GoodList from "./GoodList.js";

export default class Cart extends GoodList {
    constructor(goodsData) {
        super(goodsData);
    }

    getPrice() {
        return this.goods.reduce((acc, good) => acc + good.price, 0);
    }

    add(newGood) {
        const oldGood = this.goods.find(good => good.id === newGood.id )
        if(oldGood) {
            oldGood.add()
        } else {
            this.goods.push(newGood);
        }
        
    }

    removeGood(goodCart){
        const goodCart = this.goods.find(good => good.id === goodCart.id )
        if(this.quantity === 0){
            const index = this.goods.findIndex(good => good.id === id);
            this.goods.splice(index, 1);
        }else{
            goodCart.removeGood;
        }
    }
}