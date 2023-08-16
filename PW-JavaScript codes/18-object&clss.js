
class Product{
    // properties  , variables, data member
    name;
    price;
    rating;

    // behaviours ~ Function ~ member  function
    display(){
    console.log("Display the current product");
      }

}
const p = new Product(); // new creats an empty plan object
console.log(p);
p.display();