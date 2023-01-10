//tipe data object
//array
var Alvin = {
    kelas: 'manajamen',
    age: '18',
    status: 'belum nikah',
};
console.log(Alvin)


//function
function sedang (bahan1,bahan2) {
return bahan1 + ' lagi ' + bahan2;
}


var minum = sedang('alvin', 'minum air');
var makan = sedang('alvin', 'satean')

console.log(minum);
console.log(makan);

var name = 'alvin';
var name = 'ujang'; //redeclare bisa
name = 'robert'; // resassign bisa
// console.log(name);

//let
let age = 13;
//let age = 28; // tidak bisa di redeclare
age = 28; // bisa di reassign
console.log(age, 'age di scope global');

//const
const pi = 3.15;
// const pi = 23 // tidak bisa di redeclare
// pi = 90; // tidak bisa di reassign
// console.log(pi)

let result = 150;

console.log(result);

if (true) {
    let result = 32;
    console.log(result);
}

function onchange(event) {
    console.log(event,target,value, 'ini event change')
}

//selector
const button1 = document.getElementById('button1');
const input = document.getElementById('input')

//action
function onClick() {
    console.log("pencet gw")
}

//event listener
button1.addEventListener("click", onClick);
input.addEventListener("input", (event) => onchange)
loginInputText.addEventListener("input",(e) =>
onloginChange(e)
);
loginButton.addEventListener("click", onloginSubmit);