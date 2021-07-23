let str = prompt("Your string");

const leftQuotation = /\s'/gm;
const rightQuitation = /'\s/gm;

let newString = str.replace(leftQuotation, ' "');
alert(newString.replace(rightQuitation, '" '));

let form = document.getElementById("formRegistration");
let styleU = 'border-color: black';
let styleError = 'border-color: red';

form.innerHTML = ''