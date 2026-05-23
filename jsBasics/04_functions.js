//what are functions - these are the reusable code which work when they are called 
//how it is created  function keyword than function name parenthesis { code} ;
function multiply(a,b){
    return a+b  ;
}
// call the funtion 
console.log(multiply(3 , 43)) ; 

// functions input and output 
// parameter - are the values sent to the function - these are the variables written inside the function definition 
//arguments are the values received by the function 

// function calling vs referencing - sayhello is the function , sayhello() is calling the function 

// for parameters in js you do not have to define datatype in the function definition 
//js have a built in argument object  - argument object contains an array of arguments used when the function was called 
//eg '
let x = sum(1,3,4,56,67,74,64) ;
function sum(){
    let totalsum = 0 
    for(let i = 0 ; i < arguments.length ; i++){
        totalsum += arguments[i] ;
    }return totalsum ;
}console.log(x);

//function Rest Parameter ; 
//rest parameter( ...words) binds  various arguments in an array 
function Sum(...args) {
  let Sum = 0;
  for (let arg of args) Sum += arg;
  return Sum;
}

let y = Sum(4, 9, 16, 25, 29, 100, 66, 77);
//so it is used when we want a function which can take as many arguments 

//arguments are passed by. value not by their reference ;
//changes to arguments inside the function do not reflect outside the function ;
// on the other hand Objects are passed by reference

//********************************************* 
/* Function Expression 
function stored in a variable . the variable can be used as a function 
function stored in variable do need name
function expression need semicolon at the end  */ 
const sub = function(a,b){ return a-b } ; 
console.log(sub(4,2))
//function declaration can be called before they are defined whereas function expression cant because of hoisting 

// Arrow functions 
// allow shorter syntax for function expression  - function , return and curly brackets are removed ; 
const add = (a,b) => a+b ;
console.log(add(3,5)) ; 
// if the function has only one statement that returns a value you can use the aboveeg
// Arrow function does not have their own this 
// they take it from surrounding


// Write an arrow function that takes any number of arguments
 // and returns their sum using rest parameters.
// sum(1, 2, 3, 4, 5) → 15
const q1sum = (...nums) =>{
    return nums.reduce((total , num)=> total + num  , 0) ;
} 
console.log(q1sum(2,4,56,7,3,12))