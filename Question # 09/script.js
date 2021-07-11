// let arr = [1, 19, 4, 45, 3, 5];
let arr = [1,3,4,2,7,5,9,44,343];
document.getElementById("arr").innerHTML = `Given Array: ${arr}`;

var sortedArr = arr.sort(function(a,b) {
    return a-b;
});
document.getElementById("sortedArr").innerHTML = `Sorted Array: ${sortedArr}`;

for (let i=0; i<sortedArr.length; i++) {
    // console.log(sortedArr[i]);
    if(sortedArr[i]+1 !== sortedArr[i+1]) {
        var num = sortedArr[i] + 1;
        break;
    }
}

document.getElementById("num").innerHTML = `Next Smallest Number is: ${num}`;