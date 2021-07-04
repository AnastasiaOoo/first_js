
var table = document.createElement("table");
for (var i = 1; i < 10; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 10; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

var abc = ['A','B','C','D','E','F','G','H'];
var figuresBig =['Л','К','C','Ф','К','С','К','Л'];
var figuresBigBottom =['Л','К','C','К','Ф','С','К','Л'];
var figuresLittle = ['п','п','п','п','п','п','п','п'];
for(i = 1; i < 9; i++){
    for(j = 1, n = 0; j < 9, n < abc.length; j++, n++){
        
        table.rows[0].cells[j].innerText = abc[n];
        table.rows[0].cells[j].className = "gray";
        table.rows[i].cells[0].innerText = i;
        table.rows[i].cells[0].className = "gray";
        table.rows[1].cells[j].innerText = figuresBig[n];
        table.rows[2].cells[j].innerText = figuresLittle[n];
        table.rows[7].cells[j].innerText = figuresLittle[n];
        table.rows[8].cells[j].innerText = figuresBigBottom[n];
    }
}


//для фигур можно заменить массивы на figuresBig =['♜','♞','♝','♛','♚','♝','♞','♜']; figuresLittle = ['♟','♟','♟','♟','♟','♟','♟','♟'];
