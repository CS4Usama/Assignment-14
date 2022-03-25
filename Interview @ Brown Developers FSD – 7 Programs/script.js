    /* Program # 01 */
// Given a string, reverse each word in the sentence. For example,
// Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

const ReverseBySeparator = (string, separator) => {
    return string.split(separator).reverse().join(separator);
}
const sentence = "Welcome to this Javascript Guide!";
console.log(ReverseBySeparator(ReverseBySeparator(sentence, ''), ' '));



    /* Program # 02 */
// How to check if an object is an array or not? Provide some code.

const arrayList = [1, 2, 3];
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
    console.log('Array!');
} else {
    console.log('Not Array!');
}



    /* Program # 03 */
// How would you check if a number is an integer?

const isInteger = (num) => {
    if(num % 1 === 0) {
        console.log('Integer');
    } else {
        console.log('Not Integer');
    }
}
isInteger(10);



    /* Program # 04 */
// Implement enqueue and dequeue using only two stacks.

const inputStack = [1,2,3];
const outputStack = [];

const enqueue = (inputStack, item) => {
    return inputStack.push(item);
}

const dequeue = (inputStack, outputStack) => {
    if(outputStack.length <= 0) {
        while(inputStack.length > 0) {
            const elementToPush = inputStack.pop();
            outputStack.push(elementToPush);
        }
    }
    return outputStack.pop();
}
// console.log(enqueue(inputStack, 99));
enqueue(inputStack, 99);
console.log(inputStack);
// console.log(dequeue(inputStack, outputStack));
dequeue(inputStack, outputStack);
console.log(outputStack);



    /* Program # 05 */
// Given two strings, return true if they are anagrams of one another.
// For example: Mary is an anagram of Army

const isAnagram = (str1, str2) => {
    const a = str1.toLowerCase().split('').sort().join('');
    const b = str2.toLowerCase().split('').sort().join('');
    if(a === b) {
        return console.log("Anagram");
    } else {
        return console.log("Not Anagram");
    }
}
isAnagram('the Morse Code', 'here come dots');



    /* Program # 06 */
// How would you use a closure to create a private counter?

function counter() {
    let count = 0;
    function increment() {
        count++;
    }
    function decrement() {
        count--;
    }
    function modify(val) {
        if(val === '1') {
            increment();
        } else if(val === '0') {
            decrement();
        }
        return count;
    }
    return modify;
}
const closure = counter();
function counterHandler(objButton) {
    // Storing the value return by modify
    const count = closure(objButton.value);
    document.getElementById('counter_id').innerHTML = count;
}



    /* Program # 07 */
// Make two arrays of objects with the following keys in each object,
// {
//   name,
//   age,
//   height
// }
// put some random data of at least 3 objects in each array.
// Perform the following operations:
// 1. Swap objects of array1 having character 'A' more than one time in name. Print the new arrays.
// 2. Swap the objects of array2 having age greater than 18 with array1 objects. Print the two arrays.
const arr1 = [
    {
        name: 'Usama',
        age: 15,
        height: 5.8
    },
    {
        name: 'abc',
        age: 21,
        height: 5.8
    },
    {
        name: 'xyz',
        age: 14,
        height: 5.8
    }
];
const arr2 = [
    {
        name: 'ALi',
        age: 12,
        height: 5.8
    },
    {
        name: 'Hamza',
        age: 23,
        height: 5.8
    },
    {
        name: 'Sarfraz',
        age: 29,
        height: 5.8
    }
];

// NAME (A+) LOGIC

for(let i=0; i < arr1.length; i++) {
    arr1[i].name.toLowerCase().split('');
    let count2 = 0;
    for(let j=0; j < arr1[i].name.length; j++) {
        if(arr1[i].name[j] === 'a') {
            count2++;
        }
    }
    if(count2 > 1) {
        const swap = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = swap;
    }
}
console.log(arr1);
console.log(arr2);


// AGE LOGIC

// for(let i=0; i <= 2; i++) {
//     if(arr2[i].age > 18) {
//         const swap = arr2[i];
//         arr2[i] = arr1[i];
//         arr1[i] = swap;
//         // console.log(swap);
//     }
// }
// console.log(arr1);
// console.log(arr2);
