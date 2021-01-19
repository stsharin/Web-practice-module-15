function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [45, 60, 3, 12, 40, 54];
var result = getArraySum(numbers);
console.log("Totatl of the numbers: ", result);