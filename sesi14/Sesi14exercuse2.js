function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string1 = "Hello Worlds and Coder";
const string2 = "John Doe";
const string3 = "I am Handsome";
const string4 = "Coding is my Hobby";
const string5 = "Amanzing";

const result1 = reverseString(string1);
const result2 = reverseString(string2);
const result3 = reverseString(string3);
const result4 = reverseString(string4);
const result5 = reverseString(string5);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);