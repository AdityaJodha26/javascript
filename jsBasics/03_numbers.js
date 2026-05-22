//js has only one type of numbers which can have decimal or can be without decimal ;
// numbers are 64bit floating point ;
// adding numbers and string the result is string and addition goes from left to right ;
//NaN (not a number) is a js reserved words indicating that the result is not a number . type of nan is number ;
// Infinity or - Infinity is the result js gives when you the result is greater than the largest number there 

//****************************************************** */

// Numbers Method ; 
//1st is  toString() ; returns the number as a string  ; 
let x = 239 ; 
console.log(typeof x.toString()) ; 
// toFixed() ; it returns a string with the number written with a specified number of decimals 
let u = 232.344;
// console.log( u.toFixed(1)) ;

// toPrecision() returns a string with a number written with a specified length ; 
console.log(x.toPrecision(2));

//Converting a variable into a number 
// there are 3 methods 
// 1st is the number method itself ; 
console.log(Number(true)); // it can be used on dates also 
//2nd method is parseInt() method ; 
console.log(parseInt("29 38 " ))// returns an integer which comes first into a string ; 
//3rd method is parseFloat method ; 
console.log(parseFloat("243.32"))//returns an float number ; 


//****************************
//number properties 
console.log(Number.EPSILON) ; 
console.log(Number.MAX_SAFE_INTEGER) ;
console.log(Number.MIN_VALUE) ;

// BigInt ; 
const num = BigInt(23423) ; 
const num2 = 23434n ; 
console.log(typeof num2) ; 
const d = Number(num2) ; 
console.log(typeof d) ; 