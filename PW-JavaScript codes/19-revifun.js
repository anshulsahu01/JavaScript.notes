function registerPwuser(user='abhi'){
    if(user== undefined){
        return "plz pass the username"
    }

    return user + ' is registerd at pw'
    //  yaha ye jo + hai iska mtlv ye hai ki dono ko jodna
}
// console.log(registerPwuser("anshul"));
// console.log(registerPwuser("anshul"));
//undefined


//  amazon shoping cart

function cartBillTotal(...numbers){
    // take a variable total
    let total =0
//  loop all values
for(const num of numbers){
    total += num
}
// return total
return total
}

// objects

// const user = {
//     id : '1234'
//     name : 'anshul sahu'
//     email:" anshulsahu@gmail.com"
// }

// function adduser(obj){
//     console.log('a user name ${obj.name}got an email${obj.email}');
// }


//adduser(user)

function addTwonumbers(num1,num2){
    return num1+num2
}
//normal fun
const addTwonumbersv2 =(num1,num2)=>{
    return num1+num2
}
//aro fun
const addTwonumbersv3 =(num1,num2)=> num1+num2
//aisw bhi linkh sakte hai
const addTwonumbersv4 = num1=>'5'
const addTwonumbersv5 = num1=>({email:"anshul@gmail.com"})
const addTwonumbersv6 = (num1,num2)=>({email:"anshul@gmail.com"})


