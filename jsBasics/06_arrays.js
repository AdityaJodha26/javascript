// Array is  a list of values which can be of diff data types
// toString() to convert to string
// arrays are objects 
// Properties - arr.length ( to find length ) , arr.sort to sort the array ; 
// Adding new element - push() method 
// traversing - Array.forEach() method 
const arr = [ 2, 4,32,5,6,4,36] ;
arr.push(34) ; 
console.log(arr) ; 
function print(value){
    console.log(value)
}
arr.forEach(print) ; //forEach(callback fn) ;
// to identify any variable as array - use 
console.log(Array.isArray(arr)) //method 
// 2nd we can use instanceof method 
console.log(arr instanceof Array) ; 

//***************************** */ 
// Array Methods ; 
// 1) at() gives element at(pos) written position 
console.log(arr.at(3))
// 2) join() - it joins all array elements into a string 
console.log(typeof arr.join())
// 3) pop() used to remove elements ;
// 4) shift() it removes the 1st element of array and shift other elements to a lower index 
console.log(arr.shift())// it returns the shifted element
// 5) unshift() it adds a element in the beginning of the array ;
console.log(arr.unshift(3)) ;// unshift method returns the new array length ;
// 6) concat() it basically adds 2 arrays it returns a new array does not change the original ones
// 7) copyWithin()  - copy arr elements to another positions in an array
console.log(arr)
console.log(arr.copyWithin(3,0 )) // it overwrites the existing values 
// flattening of an array is the process of reducing the dimensionality of an array 
// 8) flat() ;  creates new array with subarray elements concatened to a specified length 
const num = [3, 3,5 ,3 ,6,8] ;

console.log(num.flat())
console.log(num.flat().flat())

// 9) flatmap() method first map all the elements of an array and then creates a new array by flattening the array 
console.log(num.flatMap(x=>[x,x*2])) ;
// 3 => [3,6] mapped 1st and then flatten this  to 3,6
//it takes the array and maps each element (perform the callback fn) 
console.log(num.map(x => [x,x*2])) // it doesnt flatten ; 
// uses 
// splitting words 
// const sentences = ["hello world", "javascript is fun"];
// const words = sentences.flatMap(str => str.split(" "));
// console.log(words);

// 10) splice() method adds new items to an array 
const fruit = ["kiwi" , "mango" , "banana"] ;
console.log(fruit)
fruit.splice(/*pos*/ 1 , /* no of el to be removed */0 ,"orange");
console.log(fruit)
// smartly can be used to remove elements ;
// toSpliced() method creates a new array

//slice() method removes the elements and creates a separate array for them
// slice(start , end(excluded)) ;
const fr = fruit.slice(1,3) ; 
console.log(fr)

//************************* */
// Array Search Method 
// 1) indexOf() searches an array for an element value and return its position
console.log(fruit.indexOf("orange",0)) ; //indexOf(item , start) 
// 2) lastIndexOf() gives last index of the element ; 
// 3) includes() allow us to check whether the array contains a part.el or not 
console.log(fruit.includes("orange")) ; 

//Sorting Methods 
// sort() 
// reverse() 
// toSorted() 
// toReversed() 

// Array Iterating Method 
// 1) map() method creates a new array by performing a function on each element 
const n = [1,3,5] ;
const newn = n.map(x => x*3 ) ; 
console.log(newn) 
//2) flatmap() 
//3) filter() it creates a new arr with those elements which passes a test 
const age = [13,42,15,18,24]
const eligibelforvoting = age.filter(eligibility) ;
function eligibility(value){
    return value>18
}
console.log(eligibelforvoting) ;
// 4) reduce() in js is used to reduce an array into a single value ;
const maxage = age.reduce((a,b) => b>a ? b:a) 
console.log(maxage)
const sum = age.reduce((a,b)=> a+b) 
console.log(sum)
const fruitss = ["apple" , "mangoes" , "orange" , "apple"]
const count = fruitss.reduce((acc , fruit)=>{
    acc[fruit] = (acc[fruit]||0 )+1;
    return acc ;
} ,{}) ; 
console.log(count) ; 
//5) every() method checks if all the array values pass a test ;
const elg = [23 ,33,55,67,77] 
const allpassed = elg.every(pass) ;
console.log(allpassed) ; 
function pass(value){
    return value>33
 }
 //6) some() method checks if some elements pass the test or not ;

 // Array.from()
//method returns an Array object from 
// any iterable object , or any object with the length property 
const st = "heyIam Aditya" ;
console.log(Array.from(st));// it has an optional parameter to run functionon every element of the new array

// entries() method returns an array iterator object with the key/value pair
const sports = ["cricket" , "football"] ;
const ob = sports.entries() ; 
console.log(typeof ob) ; 
for(let x of ob){
    console.log(x ) ; 
} 
const rate = [2323,434,566,452,777] 
const qual = rate.filter(x=>x>500) ;
console.log(qual) 

//flattening a nested array without using flat() ;
const Arr = [2,4,[5,6,[5]],6] ;
function flattening(arr){
    let flatarray = [] ;
    for(let x of arr){
        if(Array.isArray(x)){
          flatarray = flatarray.concat(flattening(x)) ;
        }else{
            flatarray.push(x) ;
            
        }
    }return flatarray ; 
}console.log(flattening(Arr))