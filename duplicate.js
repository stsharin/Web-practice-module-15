var allName = [3, 6, 7, 3, 4, 9, 10, 4, 9];
var uniqueName = [];

for (var i=0; i<allName.length; i++){
    var element = allName[i];
    var index = uniqueName.indexOf(element);

    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);