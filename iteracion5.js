
let total = 0;
let suma = 0;
let sumaString = 0;
function averageWord(array) {
    for (let i=0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            suma = suma + array[i];
        }else{
            sumaString = sumaString + array[i].length;
        }
        total = suma + sumaString;
    }
    return total
} 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

console.log(averageWord(mixedElements));