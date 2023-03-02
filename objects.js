let obj ={ id:101,name:"anshul", salary:10000};
let emp=new Object();
emp.id=102;
emp.name="rahul";
console.log(emp);
console.log(obj);

function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;

}

const e = new Emp{103,"Amy",10200};
console.log(e);