function test(num1,num2){
    return num1+num2;
}
var test = test(true);
console.log(test);
console.log(typeof(test));
if(1){
    var color = "red"
    if(1){
        var color2 = "blue"
    }
    console.log(color2);
}
console.log(color)

function range(){
    var name = "tom"
    function range2(){
        var name2 = "ann"
        console.log(name2);
    }
    range2();
    console.log(name2)
}
range();