// let fruits = ['mangga','pisang','nanas','apel','anggur' ];

// // console.log(fruits);

// fruits.push('pepaya');

// // console.log(fruits);

// fruits[2] = 'jeruk';
// // console.log(fruits);

// fruits.pop();
// console.log(fruits);

let Alvin = {
    namadepan: 'Alvin',
    namabelakang: 'nnnnnnn',
    hobi: ['maingame','mainmain','mainan'],
    angkafavorit: '72',
    kacamata: true,
    status: 'jomblo',
};

let namalengkap = Alvin.namadepan+' '+ Alvin.namabelakang;
// console.log(namalengkap);

// Alvin.angkafavorit.slice(17);
// console.log();

angkafavorit=17;
// console.log(angkafavorit);

// Alvin.hobi.unshift('coding');
// console.log(Alvin.hobi);

Alvin['lulusan'] =  "hacktiv8";
// console.log(Alvin)


for(let i = 0; i < Alvin.hobi.length; i++) {
    console.log(Alvin.hobi[i]);
}

//cara loop object (for in)
for (let key in Alvin) {
    console.log(key, ';', Alvin[key]);
}