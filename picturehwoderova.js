pictureArray = [
    '"img/11.jpg"',
    '"img/22.jpg"',
    '"img/33.jpg"'
];

var i = 0;
var left = document.getElementById("q1");
var div = document.getElementById("asd");
var right = document.getElementById("q2");

left.innerHTML = '<button id = "w1">Left</button>';
right.innerHTML = '<button id = "w2">Right</button>';
div.innerHTML = '<img src=' + pictureArray[i]+'>';

left.onclick = function(){
    if(i == 0){
        div.innerHTML = '<img src=' + pictureArray[2]+'>';
    }else{
        div.innerHTML = '<img src=' + pictureArray[i--]+'>';
    }
};
right.onclick = function(){
    if(i == 2){
        div.innerHTML = '<img src=' + pictureArray[0]+'>';
    }else{
        div.innerHTML = '<img src=' + pictureArray[i++]+'>';
    }
};



document.body.appendChild(div);
document.body.appendChild(left);
document.body.appendChild(right);
