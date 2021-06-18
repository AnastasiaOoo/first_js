var allProduct = [];

function newProduct(name, price, dollar, size, quantity, color){
    var newObject = {
        name: name,
        price: price,
        dollar: dollar,
        size: size,
        quantity: quantity,
        color: color
    };
    return newObject;
}
        
allProduct[0] = (newProduct('hat', 10, '$', 44, 0, 'red'));
allProduct[1] = (newProduct('sweater', 9, '$', 42, 0, 'red'));
allProduct[2] = (newProduct('shirt', 8, '$', 46, 0, 'red'));
allProduct[3] = (newProduct('tshirt', 7, '$', 48, 0, 'blue'));
allProduct[4] = (newProduct('jeans', 15, '$', 50, 0, 'blue'));
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
    
   
    var i = 0;
    for(i; i < allProduct.length; i++){
        myDivs.push(createDiv());
        var redColor = document.getElementById("Red");
        var blueColor = document.getElementById("Blue");
        
        catalog.appendChild(myDivs[i]);
        
        if(redColor.checked){
            var redArray = [];
            for(i; i< allProduct.length; i++){
                if(allProduct[i].color == 'red'){
                    redArray.push(allProduct[i]);
                }
            }
            myDivs[i].innerHTML = redArray[i].name + '<span> price: </span>' + redArray[i].price +'$' +' '+ redArray[i].color;
        }else if(blueColor.checked){
            var blueArray = [];
            for(i; i< allProduct.length; i++){
                if(allProduct[i].color == 'blue'){
                    blueArray.push(allProduct[i]);
                }
            }
            myDivs[i].innerHTML = blueArray[i].name + '<span> price: </span>' + blueArray[i].price +'$' +' '+ blueArray[i].color;
        }else{
            myDivs[i].innerHTML = allProduct[i].name + '<span> price: </span>' + allProduct[i].price + allProduct[i].dollar +' '+ allProduct[i].color;
        }
        
        var butt = document.createElement('button');
        
        butt.setAttribute('id','_' + i);
        butt.innerHTML = 'Buy';
        myDivs[i].appendChild(butt);
        var nDiv =  createDiv();
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
          
        for(var i = 0;i < arrayOfBasket.length;i++){
            total += arrayOfBasket[i].price;
            productInBasket.push(arrayOfBasket[i].name +' '+ arrayOfBasket[i].price + '$');
        }
            
            nDiv.innerHTML = "Total price is " + total + "$" + '<span> Products in basket: </span>' + productInBasket;

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