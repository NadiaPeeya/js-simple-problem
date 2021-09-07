const numbers = [44, 23, 34, 32, 54, 5, 78];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     var element = numbers[i];
//     console.log(element);
//     sum = sum + element;
//     console.log(sum);
// }
function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        console.log(element);
        sum = sum + element;

    }
    return sum;
}
var result = arrayTotal(144, 54, 75);
console.log(result);