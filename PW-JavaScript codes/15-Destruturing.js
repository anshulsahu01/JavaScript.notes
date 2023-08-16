let arrOne = [1,2,3,4,5]
let arrTwo =[6,7,8,9]

// const threeArray = arrOne.concat(arrTwo)
// const threeArray =[ arrOne ,arrTwo]

const threeArray = [ ...arrOne, ...arrTwo]
console.log(threeArray);

//+++++++++++++++++++++++++++++++++

function manyArguments(){
    let args = Array.from (arguments)
    let finalArr = args.map(e=>e)
    console.log(finalArr);
}
