function pushFront(array, x) {
    for (var i = array.length - 1; i >= 0; i--) {
        array[i+1] = array[i];
    }
    array[0] = x; 
    return array
}

var array = [1,2,3,4,5];
var x = 1
console.log(pushFront(array, x))

"----------------------------------------------------------------"


var array = [1,2,3,4,5];

function popFront(array) {
    var temp = array[0]; 
    for (var i = 1; i < array.length; i++) {
        array[i-1] = array[i];
    }
    
    console.log(temp);
    console.log(array)
}

console.log(popFront(array))

"----------------------------------------------------------------"


function insertAt(array, val, y) {

    for (var i = array.length - 1; i >= y; i--) {

        arr[i+1] = arr[i];

    }

    arr[y] = val; 
}

console.log(array, 3, 4)


// Bonus Challenge!
function swapPairs(array) {

    for (var i = 0; i < array.length - 1; i += 2) {

        var temp = array[i];

        array[i] = array[i+1];

        array[i+1] = temp;
        
    }
}

