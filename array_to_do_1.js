function pushFront(array, val) {
    for (var i = array.length - 1; i >= 0; i--) {
        array[i+1] = array[i];
    }
    array[0] = val; 
    return array
}

var array = [1,2,3,4,5];
var val = 1
console.log(pushFront(array, val))

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


function insertAt(array, val, index) {

    for (var i = array.length - 1; i >= index; i--) {

        arr[i+1] = arr[i];

    }

    arr[index] = val; 
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

