let repeatChar = () => {
    var str3 = document.getElementById("inp3").value;
    if(str3 === '') {
        document.getElementById("ans3").innerHTML = '';
    } else {
        // splits whole string into characters using split() function
        let splitStr3 = str3.split("");
        let newStr3 = '';
        /* duplicate every character of string using loop and concatination.
        Then join all the characters into a single string variable */
        for(let i = 0; i < str3.length; i++) {
            let repChar3 = splitStr3[i] + splitStr3[i];
            newStr3 += repChar3;
        }
        return document.getElementById("ans3").innerHTML = `Your Repeated Character String is: &nbsp "${newStr3}"`;
    }
}