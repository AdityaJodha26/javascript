//if you have to use quotes inside qoutes - method 1 - we have to use backslash \ escape character
let eg = " his family ancestor were the \"vikings\" from the north" ; 
console.log(eg)
//method 2 - TEMPLATE strings ; 
console.log(`hello mr please "study" consistently`) ; 

//can be used to write multiline string 
// INTERPOLATION  most imp use case ;
// it helps in using variable within the string ; 
const name = "aditya " 
const course = "btech" ; 
console.log(`he is ${name} and he is doing ${course}`) ; 
//string has a property named length 
console.log(course.length) ; 
//extracting String charaacter ; 
// 4 ways ; 
const str = "heyhowareyou" ; 
//1st. 
console.log(str.charAt(4)) ; // charAt  if the character is not found it gives an empty string 
console.log(str.at(3)) // 2nd at 
console.log(str.charCodeAt(2)) // gives the code character ; 

console.log(str[9]) ; 
// in this if the character is not found it gives undefined 
//concate  it joins 2 strings ;
const str2 = "iamgoodhowareyou" ; 
console.log(str.concat(str2)) ;
// you can also use + operator 
// extracting string parts 
// 1st is slice method slice(start, end) it is used to extract a part of the string return that in the new string 
console.log(str.slice(2,9)) ;
//2nd is substring diff between this and slice is that slice takes negative argument substring turns that into 0 ; 

// trim method you know remove spaces 

// padStart - it is used to insert something in the front of the string until the string reaches a certain length ;
//for eg 
let s = "hey" ;
console.log(s.padStart(9 , "I") ) ;  // rememner its syntax( first comes the max length , then comes what you have to add)
// padEnd ; sister of padStart

// repeat method retruns  the string as many times as written inside the repeat method 
console.log(s.repeat(3)); 

//replace method replaces a specified value with another value in the string ;
console.log(s.replace("hey" , "hi")); 
// to replace all the specified value we can use replaceAll method 

// one ofthe most important is 
// converting string into array ; 
// split method  - split(around we have to separate if the string is a sentence than we have to separate around spaces)
const sen = "tomorrow we will complete javascript" ;
let l = sen.split(" ");
console.log(l) ; 
//if the separator is "" , the returned array will be an array of single character ;
console.log(sen.split("")) 

//good question 1 
//  Write a function that reverses every word in a sentence
//     but keeps the word order the same.
//     reverseWords("hello world") → "olleh dlrow"
const sentence = "today i will not go to college" ;
let newsentence = sentence.split(" ").map(word=>word.split("").reverse().join("")).join(" ") ; 
console.log(newsentence) ; 

//good question2 
// Write a function that counts the occurrence of each
 //   character in a string and returns an object.
   // charCount("hello") → { h:1, e:1, l:2, o:1 }

const wo = "noway" ;
function count(word){
    let countObject = {}
    for(let char of word){
        countObject[char] = (countObject[char]||0) + 1 ;

    }console.log(countObject); 

}
//another good question is anagram ;
const w1 = "silent" ;
const w2 = "listen" ;
let neww1 = w1.split("").sort().join("") ;
let neww2 = w2.split("").sort().join("") ;
if(neww1==neww2) {
    console.log("true") ; 
}