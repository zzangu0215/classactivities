// Write Your Code Below
function checkEquality(x, y) {
    if (x === y) {
        console.log('They are equal in type and value');
    }
    else if (x == y) {
        console.log('They are equal in value');
    }
    else {
        console.log('The values are not equal');
    }
}

checkEquality(15, 10);