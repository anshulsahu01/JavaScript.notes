let arr=[1,2,3,4,5];
arr.push(6,7);
console.log(arr);

//element add krna ho to aise krte hai

arr.pop();
console.log(arr); //last element hatane ke liye pop use krte hai

arr.shift();
console.log(arr); //first se 

arr.unshift(9);
console.log(arr); //first mai add

let a1=[1,2,3,4,5];
let a2=[6,7,8,9]
let a3= a1.concat(a2); //dono ko add krne ke liye
console.log(a1,a2,a3);

let s= a3.join("@");
console.log(s);// a3 mai sb ke bich mai @ lag jayga

a3.reverse();
console.log(a3);// reverse krne ke liye

console.log(a3.indexOf(2));

let arr1 =[ ,1,23,3,,4,5,6];
console.log(arr1.slice(2,5));
