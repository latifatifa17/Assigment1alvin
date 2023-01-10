function loadDoc() {


fetch(
    'https://fakestoreapi.com/products'
)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    const payload = data;
    displayData(payload)
} 
);
}
const obj = {
    nama: 'alvin'
};


const str = '{"nama"; "alvin"}';

console.log(str);
console.log(JSON.parse(str, 'utf-8'));

function displayData(payload) {
    const tableBody = document.getElementById('table-body');

payload.forEach((product) =>{
    const tr = document.createElement('tr');
    const tdNama = document.createElement('td');
    const tdHarga = document.createElement('td');
    console.log(product.category)
    
    tdNama.innerText = product.description;
    tdHarga.innerText = product.price;

    tr.appendChild(tdNama);
    tr.appendChild(tdHarga);
    tableBody.appendChild(tr);
});
}
