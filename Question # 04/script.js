let grossSalary = () => {
    var sal = document.getElementById("sal").value;
    if(sal === '') {
        document.getElementById("ans4").innerHTML = '';
    } else {
        /* Form Input will be in the form of String. So, we will convert it into numbers using
        built-in function Number(). So that, we can perform different operations on it */
        sal = Number(sal);
        let grossSal = 0, hra, da;

        if(sal <= 10000) {
            hra = sal * (20/100);
            da = sal * (80/100);
            grossSal = sal + hra + da;
        }
        else if(sal <= 20000) {
            hra = sal * (25/100);
            da = sal * (90/100);
            grossSal = sal + hra + da;
        }
        else if(sal > 20000) {
            hra = sal * (30/100);
            da = sal * (95/100);
            grossSal = sal + hra + da;
        }
        return document.getElementById("ans4").innerHTML = `Your Gross Salary is: &nbsp ${grossSal}`;
    }
}