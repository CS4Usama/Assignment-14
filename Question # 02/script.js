let amountOfPotato = () => {
    var str2 = document.getElementById("inp2").value;
    if(str2 === '') {
        document.getElementById("ans2").innerHTML = '';
    } else {
        /* Here split() function splits the whole string where word 'potato' will come and count its length.
        As you know split() returns the splitted values. So, we will substract 1 from its return value to balance it... */
        let amount1 = str2.toLowerCase().split('potato').length - 1;
        return document.getElementById("ans2").innerHTML = `Number of potatoes in the String is: &nbsp ${amount1}`;
    }
}