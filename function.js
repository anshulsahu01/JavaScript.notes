function anshul(){
    console.log("hey dear");
}
// calling a function

anshul();

// function without parameters and return type

function greet() {
    console.log("hey there how are u");
    
}
// calling a function again

greet();
greet();
greet();

//function with parameters and return type


function add(x,y) {
    return x+y;
    
}

console.log( add(1,2));

// single parameter
function add(x,y=10) {
    return x+y;
    
}

console.log( add(1));

function add(x=10,y=16) {
    return x+y;
    
}

console.log( add(1));// value x mai 1 hi asign hogi



// function with unlimited parameter



