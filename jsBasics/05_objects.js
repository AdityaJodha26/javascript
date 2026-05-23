/* Objects are variable that can store values and functions 
values can be stored as key: values pair called properties 
functions can be stored as key : fn pair called methods . */
const car={
    model : 2003 ,
    color : "black" , 
    start : ()=> "starting" , 
    brake : ()=> "applying brake"
}
console.log(car.start());
car.milage = 13 ; 
console.log(car) ;

//********************************** 
/* Objects Properties
can be accessed by 3 ways 
- dot notation -  objectName.property 
- bracket notation - objectName["property"] 

add properties 
delete properties - use delete keyword 
check if a property exist - use in keyword 

*/

/*
Objects Method 
methods are the actions that can be performed on objects , 
Methods are functions stored as property value ; 

this KEYWORD 
in object method this refers to the object 

to access object method we have to use '()' ; 
car.start() ; */

//********************** */
/* this keyword 
refer to the object that is calling the object method 
it is used so that we can use the same method with diff objects

alone used this refers to the global object */

// Object display ;
// For in loop
for ( let x in car){
    console.log(x +" "+ car[x]) ;
    
}

//object.values() creates an array from the properties value
const arr = Object.values(car) ;
console.log(arr.toString()) ; 
//object.entries used to access all the keys and values simultaneously 
for(let [key , value] of Object.entries(car)){
    console.log(key +" "+ value) ; 
}

//**************************************/
/* Object constructor function 
when many objects of same types are needed than we construct an object constructor 
*/
function Person(first ,last , age ){
    this.firstname = first ,
    this.lastname = last ,
    this.age = age 
}
const p1 = new Person("michael" , "jackson" , 50) ;
console.log(p1); 
//adding a property to an object 
p1.job = "dancer and singer" ;
console.log(p1.job); 

// to add a new property or method to the object constructor function 
// we have to add that its prototype 
Person.prototype.nationality = "english" ; 
console.log(p1.nationality) ;
