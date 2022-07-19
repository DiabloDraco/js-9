var arr = [1,3,5,9];
    function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
    document.querySelector("#result").innerHTML = sum;
    console.log(sum);
}
arraySum(arr);