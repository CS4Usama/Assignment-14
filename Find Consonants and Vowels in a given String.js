var vowel = "aeiou";
var cons = "bcdfghjklmnpqrstvwxyz";

console.log("String is:  Well Dress baby and Ladies Botique");

var str = "Well Dress baby and Ladies Botique".toLocaleLowerCase();

// let vowelCount = 0;
// let consCount = 0;
vowelCount = 0;
consCount = 0;

for (let i = 0; i < str.length; i++) {
    if(vowel.includes(str[i])) {
        vowelCount++;
    } else if(cons.includes(str[i])) {
        consCount++;
    }
}

console.log("Vowels in the String are:  ", vowelCount);
console.log("Consonants in the String are:  ", consCount);



// To See Console Outputs in cmd:   node fileName.js