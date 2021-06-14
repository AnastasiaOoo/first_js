var allProduct = [];

function newProduct(name, price, dollar, size, quantity){
    var newObject = {
        name: name,
        price: price,
        dollar: dollar,
        size: size,
        quantity: quantity
    };
    return newObject;
}
        
allProduct[0] = (newProduct('hat', 10, '$', 44, 0));
allProduct[1] = (newProduct('sweater', 9, '$', 42, 0));
allProduct[2] = (newProduct('shirt', 8, '$', 46, 0));
allProduct[3] = (newProduct('tshirt', 7, '$', 48, 0));
allProduct[4] = (newProduct('jeans', 15, '$', 50, 0));
var productDiv;


function createDiv(){
    productDiv = document.createElement("div");
    
    productDiv.className = "newDiv";
    
    productDiv.innerHTML = '<span></span>';
    return productDiv;
}
var onrrun = 0;
 var arrayOfBasket = [];
function createAndModifyDivs(){
    var catalog = document.getElementById("catalog");
    
    var myDivs = [];
    var myButtons = [];
   
    var i = 0;
    for(i; i < allProduct.length; i++){
        myDivs.push(createDiv());
        ;
        catalog.appendChild(myDivs[i]);
        
        myDivs[i].innerHTML = allProduct[i].name + '<span> price: </span>' + allProduct[i].price + allProduct[i].dollar;
        var butt = document.createElement('button');
        
        butt.setAttribute('id','_' + i);
        butt.innerHTML = butt.id;
        myDivs[i].appendChild(butt);
        
        butt.onclick = function(){
           
            onrrun = this.id;
            console.log(onrrun);
            switch(onrrun){
                case '_0':
                    arrayOfBasket.push(allProduct[0]);
                    break;
                case '_1':
                    arrayOfBasket.push(allProduct[1]);
                    break;
                case '_2':
                    arrayOfBasket.push(allProduct[2]);
                    break;
                case '_3':
                    arrayOfBasket.push(allProduct[3]);
                    break;
                case '_4':
                    arrayOfBasket.push(allProduct[4]);
                    break;
            }
            
          console.log(arrayOfBasket);
          var total = 0;
          var productInBasket = [];
          var nDiv =  createDiv();
        for(var i = 0;i < arrayOfBasket.length;i++){
            total += arrayOfBasket[i].price;
            productInBasket.push(arrayOfBasket[i].name +' '+ arrayOfBasket[i].price + '$');
        }
        if (total == 0){
            nDiv.innerHTML = "empty";
        }else{
            nDiv.innerHTML = '';
               
            nDiv.innerHTML = "Total price is " + total + "$" + '<span> Products in basket: </span>' + productInBasket;
            
        }
        document.body.appendChild(nDiv);
  
            
        }
        
    }
    
}

console.log(allProduct);



createAndModifyDivs();
/*function countBasket(){
    var total = 0;
    var nDiv = document.createElement('div');
    for(var i = 0;i < arrayOfBasket.length;i++){
        total += arrayOfBasket[i].price;
    }
    if (total == 0){
        nDiv.innerText = "empty";
    }else{
        nDiv.innerHTML = arrayOfBasket;
        nDiv.body.innerHTML = "Total price is " + total + "$";
    }
    document.body.appendChild(nDiv);
}
countBasket();*/