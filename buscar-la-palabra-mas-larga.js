

function findLongestWord(array) {
    let longest = array[0];
    for(let longitud of array) {
        if(longitud.length > longest.length) {
            longest = longitud;
        }
    }
    return longest
}
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
console.log(findLongestWord(avengers));
