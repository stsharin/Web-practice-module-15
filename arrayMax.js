var marks = [45, 31, 30, 82, 15, 60, 70];
var max = marks[0];

for(var i=0; i<marks.length; i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("Highest value is: ", max);