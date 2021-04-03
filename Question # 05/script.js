let elecBill = () => {
    var units = document.getElementById("unit").value;
    if(units === '') {
        document.getElementById("ans5").innerHTML = '';
    } else {
        units = Number(units);
        let amount2 = 0.0;

        if(units <= 50) {
            amount2 = units * 0.50;
        }
        else if(units > 50 && units <= 150) {
            amount2 = units * 0.75;
        }
        else if(units > 150 && units <= 250) {
            amount2 = units * 1.20;
        } else {
            amount2 = units * 1.50;
        }

        let surcharge = amount2 * (20/100);
        amount2 += surcharge;
        return document.getElementById("ans5").innerHTML = `Your Total Electricity Bill is: &nbsp ${amount2.toFixed(2)}`;
    }
}