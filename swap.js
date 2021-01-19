var a = 5;
var b = 7;
console.log("Before swap: ", "a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap: ", "a =", a, "b =", b);

// without temp
var x = 3;
var y = 2;
x = x+y;
y = x-y;
x = x-y;
console.log("After swap: ", "x =", x, "y =", y);

var p = 5;
var q = 7;
[p,q] = [q,p];
console.log("After swap: ", "p =", p, "q =", q);