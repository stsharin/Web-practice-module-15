var speech = "I am a good girl. I don't snore at night";
// console.log(speech.length);
var count = 0;
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);