/*
let and const
var myname = "sheeshpal";       
let myname = "sheeshpal";   //we can change name
const myname = "sheeshpal"  //we cannt change name

-------------
//normal function
function sayName(){
    console.log("Hii!");
}
sayName();

//arrow function
let sayName = (name)=>{         //this is known as function expression.
    console.log(name);
}
sayName("Hii");

let sayName = name => name;     //return name.

-------------
export and import.
code devide into different file and use them together with the help of important and export.

export : give permision to existing file methods to use in another file.
import : fetch method from another file to use in existing file.

Note: mention in script tag, type ="module"

fiel.1      customer.js
            const person = {
                name : "sheeshpal"
            }
            export default person;      //allow to use it another file.

file.2      sell.js
            export let hello = ()=>{        //normal export
                console.log("Hello!");
            }

            export let data = 10;

file.3      app.js
            import {hello} from './sell.js';                //import in app.js file
            import {data} from '.sell.js';
            hello();
            console.log(data);

            *******
            import {data as da} from './sell.js';
            or
            import {hello,data as da} from './sell.js';
            or 
            import * as bundle from './sell.js';
            
            bundle.hello();
            console.log(bundle.data);
            ******** defaul export
            we can use name directly as import time, no need curly bracket.
            
            import person from './customer.js';
            console.log(person);

            Or
            import ps from './customer.js'          //change directly name.
            console.log(ps);


-------------
            OOPs Concepts:  class & objects.

            class:blueprint of object.
            
            
            ******
            class Customer{
                constructor(name){
                    //no need to initialize with let & const.
                    this.name = name;
                }
                //for method no need use function keyword.

                buy(){
                    console.log("Hii!");
                }
            }

            let customer1 = new Customer("Sheeshpal");
            console.log(customer1);
            customer1.buy();        //use of method of class.
            console.log(customer1.name)         //access properties.

-----------Inheritance.
            class GuestCustomer extends Customer{       //inherte Customer properties in GuestCustomer.
                hello(){
                    console.log("hello!");
                }
            }


            let customer1 = new GuestCustomer("SheeshpalSinghSaini");
            console.log(custoer1);
            customer1.buy();

            *******
            we can define properties outside constructor without this.
            
            class Customer{
                constructor(name){
                    //no need to initialize with let & const.
                    this.name = name;
                }
                age = 22;
                //for method no need use function keyword.
                buy(){
                    console.log("Hii!");
                }
            }


            *******
            arrow function in class.

            class Customer{
                constructor(name){
                    //no need to initialize with let & const.
                    this.name = name;
                }
                age = 22;
                //for method no need use function keyword.
                buy = () =>{
                    console.log("Hii!");
                }
            }

----------spread and res operator(...): sign is same for both.
spread operator used in array and object.

let list = ['Audi','Honda','BMW']
let newlist = [...list,'ferrari'];          //add list into newlist.

let newlist = ['ferrair',...list];


let person={
    name:"sheeshpal",
    age = 28
}
let newPerson={
    ...person,  //add person all properties here.
    city: "delhi"
}

console.log(newPerson);

Note : when we use it inside a function. then it call rest operator.

********
function hello(a,b,c){
    return a+b+c;
}

hello(1,2,3);       //worked only for three or how many pass here.

for mutliple pass rest operator.
****
function hello(...all){
    console.log(all);       //all argument get as array element in all variable.
}
hello(1,2,3,4,5);


---------------- Destructring.
let list = ['audi','BMW','Honda'];
console.log(list[0]);

const [car1,car2,car3] = list;        //destructturing.

let [car1,,car2] = list;    //BMW not assign into any variable.

**** object Destructuring.
    const person = {
        name : "Sheeshpal",
        age = 28
    }
    console.log(person.age);

    let {name,age} = person;    // object destructuring.




----------- Reference(array,object) and primitive type (string, number)

let num1 = 100;
let num2 = num1;    //copy num1 into num2.
num2 = 50;          //num1 not effected.



//reference variable point to the location for this.

let person = {
    name : "Sheeshpal"
}
let person2 = person;
person2.name = "sheesh";        //change in both person1 & person2. same for array.
//we can use spred operator for this. if no change required.
console.log(person1);
console.log(person2);


----------filter,map,reduce
1. map() : return a new array in that array we can change all the elements.
        Using map() allows us to iterate through all items in an array, performing actions on each item. The results of 
        this activity are returned to as a new array.   
    
        let arr1 = [2,5,7,10];
        let arr2 = arr1.map(function(x){
            return x*2; //return this value one by one.
        })
        console.log(arr2);

        ***** using with arrow method.
        let arr2 = arr1.map(x=>x*2);
        console.log(arr2);

2. filter() : return only true vlaue;

        let arr2 = arr1.filter(function(x){
            if(x%2==0){
                return x;
            }
        })

        or let arr2 = arr1.filter(x => x%2==0);
        console.log(arr2);

3. reduce(): * executes a reducer function for array element.
             * returns a single value: the function accumulated result.
             * doesn't execute the function for empty array elements.
             * doesn't change thr original array.
             
            Syntax:
                array.reduce(function(total,currentValue,currentIndex,arr),initialValue);

                total|Accumulator: initialValue,or previously returned value of the function.
                currentValue: the value of the current element.
                currentIndex: optional, index of the current element.
                arr: optional, the array the current element belongs to.
                initialValue:   optional, A value to be passed to the function as the initial value.

            example:
                let arr = [8,2,3,4,5,6];
                let sum = arr.reduce((accum,curr)=>{
                        return accum+curr;
                })






















                



*/