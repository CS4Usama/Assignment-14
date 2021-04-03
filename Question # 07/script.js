let countRepetitions = () => {
    var inp7 = document.getElementById("q7").value;
    if(inp7 === '') {
        document.getElementById("ans7").innerHTML = '';
    } else {
        let arr7 = inp7.split(", ");
        let obj = {};

        //make every element of array's count 0 in object
        arr7.filter(function(val) {
            obj[val] = 0;
        });

        //count how many times each element of object is repeated
        arr7.map((val) => {
            obj[val] += 1;
        });

        /*
            Inside Object.fromEntries(), first we will convert Object into Array by using Object.entries() which will
            convert every property of the object into a separate array, then we will apply sort() function of the array.
            Inside sort() function, [,a] [,b] will take the second value of array 'means the occurrence of element'
            because of comma, it will ignore the first value of every array. Then b-a sorts it into Descending Order
            (a-b will sort into Ascending Order)   'b-a).reverse()' can also sorts into Ascending Order.
            and in the last Object.fromEntries() converts all the arrays into a single object.
        */

        // in ES10, "Object.fromEntries()" convert Array into Object and "Object.entries()" convert Object into Array.

        let sortedObj = Object.fromEntries(
            Object.entries(obj).sort(([,a],[,b]) => b-a)
        );

        sortedObj = JSON.stringify(sortedObj).replace(/,/g, " , &nbsp ");
        sortedObj = sortedObj.replace(/:/g, ": ");

        return document.getElementById("ans7").innerHTML = sortedObj;
    }
}