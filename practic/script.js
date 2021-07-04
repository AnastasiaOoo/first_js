const goods = [
    { title: 'SWEATSHIRT', price: 150, img: 'man5.jpg' },
    { title: 'CAP', price: 50, img: 'man6.jpg' },
    { title: 'SHIRT', price: 350, img: 'man7.jpg' },
    { title: 'JACKET', price: 250, img: 'man8.jpg' },
];


const $goodsList = document.querySelector('.goods-list');
  
const renderGoodsItem = ({ title, price, img }) => {
    return `<div class="goods-item"><img src="${img}"><h3 class="item_name">${title}</h3><p class="item_price">${price}.00$</p></div>`;
};
  
const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
            item => renderGoodsItem(item)
        ).join('\n');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}
  
renderGoodsList();