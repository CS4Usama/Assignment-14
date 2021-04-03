let Multiples = () => {
    var sum6 = 0;
    for(let i = 0; i < 1000; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum6 += i;
        }
    }
    return document.getElementById("ans6").innerHTML = `Sum of all the Multiples of 3 or 5 below 1000 is: &nbsp ${sum6}`;
}