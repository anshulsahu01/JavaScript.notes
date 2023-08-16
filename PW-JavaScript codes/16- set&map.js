let emptySet = new Set ()

// console.log(emptySet.size);

let myArray =[ 1,2,3,4]
let newSet = new Set([...myArray])

console.log(newSet);

newSet.add(2)
newSet.clear()
console.log(newSet);