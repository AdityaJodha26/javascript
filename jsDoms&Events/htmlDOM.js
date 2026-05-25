// DOM - Document Object Model  - it is an object model for html document 
// browser loads a html page it creates a tree like representation of the html document 
// Html dom is used to access html elements 
// using dom we can change the content of html elements 
// change the style , add or delete html elements

// DOM API (application programming interface ) is a set of methods and properties that allow javascript to change the content ,add or delete the html elements 
// DOM API ablities - it allows us to find and select a element , change element content and attribute ,add remove or modify elements change css style and add event listener to react to user input

//*********************** */
// Selecting Html Elements 
// we can find the html element by the following ways 
//1) By id 
const para = document.getElementById("firstpara") ;

console.log(para.textContent) ; 

//2) by TagName 
const clickButton = document.getElementsByTagName("button")
console.log("selected") ; 

//3) by ClassName 
const head = document.getElementsByClassName("main")
console.log(head) 

//4) by CSS selector - a) querySelector() method
//querySelector(.class || #id || tagname || div p (nested selector)) 
// it selects and return the first matching element only
const btn = document.querySelector("button")
console.log("yeah")

// b) querySelectorAll - selects all the matching elements 
const btnn =document.querySelectorAll("button")
btnn.forEach((x)=>{console.log(hello)});

//********************** */
//Changing HTML 
// dom allows js to change the text and the content of html elements 
// 1) innerHTML - is used to get or change the html content 
console.log(para.innerHTML) 
console.log(para.innerHTML="why not you")
console.log(head.innerHTML="hata sawan ki ghata batti bujha tv chala gaadi bhaga toliya sukha jawaani luta ")