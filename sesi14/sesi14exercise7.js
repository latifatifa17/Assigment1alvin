const isprime = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
    if(angka%i == 0){
        pembagi++
    }
    }
    if(pembagi == 2){





















        
    console.log("true")
    }else{
    console.log("faslse")
    }
}

isprime(3);
isprime(7);
isprime(6);
isprime(23);
isprime(33);

console.log(isprime)