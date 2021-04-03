let countString = () => {
    var str8_1 = document.getElementById("str8-1").value;
    var str8_2 = document.getElementById("str8-2").value;
    if(str8_1 === '' || str8_2 === '') {
        document.getElementById("ans8").innerHTML = '';
    } else {
        // Here we split the string to match the characters by using conditional statments and loop
        str8_2.split("");
        let count = 0;
        for(let i = 0; i < str8_2.length; i++) {
            if(str8_1 === str8_2[i]) {
                count++;
            }
        }
        return document.getElementById("ans8").innerHTML = `Following number of times 1st String found in the 2nd String: &nbsp "${count} times"`;
    }
}