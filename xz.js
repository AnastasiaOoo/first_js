/*
В учебнике в главах, посвещенных замыканиям, приводятся два примера, которые могут пригодится в корзине и каталоге

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

Фильтр для каталога 

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => alert(user.name)); // Pete, Ann, John

а так же сортировка по полю, например по цене или популярности


if (!("a" in window)) { данная конструкция jghtltkztn события, которые могут происходить с window, поэтому не заходит в тело if
    var a = 1;
}
alert(a);

var b = function a(x) { Ничего не выведет, потому что нет return
    x && a(--x);
};
alert(a); 

function a(x) {  а присвоили функцию, var создает переменную, если такая переменная уже не существует
    return x * 2;
}
var a;
alert(a);

function b(x, y, a) { мы меняем значение 3 элемента, переданного в функцию на 10, а потом выводим его. Соответсвенно, при вызове функции 3 меняется на 10
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

function a() { this может не быть реальным значением, видимым этим методом: если метод является функцией в нестрогом режиме (en-US), значения null и undefined будут заменены глобальным объектом
    alert(this);
}
a.call(null);*/