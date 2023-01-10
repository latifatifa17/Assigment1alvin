function removeSpaces(text) {
    return text.split('').join('');
}




const vokal = () => {
    let hasil = {
        a: 4,
        i: 1,
        u: 2,
        e: 3,
        o: 0,
    };
const argumen = process.argv.slice(2);
for (let i = 0; i < argumen.length; i++)
//console.log(argumen[i]);
if (argumen[i] === "a") {
    hasil.a++;
  } else if (argumen[i] === "i") {
    hasil.i++;
  } else if (argumen[i] === "u") {
    hasil.u++;
  } else if (argumen[i] === "e") {
    hasil.e++;
  } else if (argumen[i] === "o") {
    hasil.o++;
}
return hasil;
};

console.log(vokal());
const password = 'aku anak indonesia';
const spaceRemoved = removeSpaces(password)


//console.log(spaceRemoved);