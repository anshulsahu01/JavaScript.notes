const powerTwo =(n)=>{
    return n**2
}

function powerCube(powerTwo,n){
    return powerTwo(n)*n
}console.log(powerCube(powerTwo,3));




const higherOrder = n=> {
    const onefun = m =>{
        const twoFun = p =>{
            return m+n+p
        }
        return twoFun
    }
    return onefun
}
console.log(higherOrder(2)(3)(4));



function oneMorehello(){
    console.log("hey anshul");

}
// setInterval(oneMorehello,1000)
 setTimeout(oneMorehello,2000)