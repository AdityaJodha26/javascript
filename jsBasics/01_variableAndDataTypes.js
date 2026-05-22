//variables are data contianers which store data .
// identifier is the unique name give to those variables . 
// let variable have block scope and cannot be redeclared in the same scope. 
// const variable cannot be reassigned . const defined a constant reference to a value.(eg you can change the elements of a const array but you cannot reassign the array)
//javascript  have 8 datatypes ; 
let name = "aditya" // string 
console.log(typeof name) ; 
let age = 20 ; 
let earthage = 200n ; 
console.log(typeof earthage) ; 
let experience = null ; 
let bankbalance ;
console.log(typeof bankbalance) ;
let genderismale = true ; 
let obj = {n : name ,umr :age} ; 
console.log(obj) ;
let sy = Symbol() ; 
console.log(sy) ;     
// == comparision operator is used for same value , === comp. oper is used for same value as well as same type ; 

//Ternary Operator - condition ? exp1 : exp2 ; 

//destructring - is a feature in js used to extract values from arrays and objects and store them into variables 
const arr = [0 ,20 ,340 ] ; 
let firstel = arr[0] ; 
console.log(firstel) ; 
const [a,,c] = arr ; 
console.log(a) ; 
// can be used to swap values MAIN USE ;
let a1 = 10 ; 
let b = 3 ; 
[a1,b] = [b,a1] ; 
console.log(b) ;