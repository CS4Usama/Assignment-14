let cardHide = () => {
    var str1 = document.getElementById("cc").value;
    if(str1 === '') {
        document.getElementById("ans1").innerHTML = '';
    } else if(str1.length > 4) {    // If length is greater than 4, then we have to hide numbers
        let newStr1 = '';
        // Reverse String... So that, we will show first 4 numbers as it
        let reversedStr1 = reverse(str1);
        for(let i = 0; i < reversedStr1.length; i++) {
            // if i < 4, we want to reveal these numbers in our output
            if(i < 4) {
                newStr1 += reversedStr1[i];
            } else {
                // otherwise hide it
                newStr1 += '*';
            }
        }
        // return the reversal of the string to revert it back to its original format
        return document.getElementById("ans1").innerHTML = `Dear Customer! Your Credit Card Number is: </br> ${reverse(newStr1)}`;
    } else {
        return document.getElementById("ans1").innerHTML = `Dear Customer! Your Credit Card Number is: </br> ${str1}`;
    }
}

// User-defined reverse() function
function reverse(str1) {
    return str1.split("").reverse().join("");
}