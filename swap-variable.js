var first = 5;
var second = 7;
console.log(first, second);
// first approach
var temp = first;
first = second;
second = temp;
console.log(first, second);

// destructuring 
[first, second] = [second, first]


let a = 46;
let b = 56;
console.log(a, b);

let c = a;
a = b;
b = c;
console.log(a, b);

var p = 14;
var j = 16;
console.log(p, j);
[p, j] = [j, p];
console.log(p, j);