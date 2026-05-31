// functions are objects  - arguments.length = the number of arguments received by the functions 
// toString() returns a method as a string

//Callback Function is a function which is passed as an argument into another function
      // a callback function is intended to be executed later
      // when you a fn as an argument do not use parenthesis
      
//this keyword - when it is used in a function it refers to the object 
    // functions are object methods
    // when this is used inside the function this refers to the object that owns that method
    // in default function this refers to the global object 
    // in strict it is undefined 
    // this in event handlers refers to the element
    // arrow function do not have their own this they inherit from surrounding object 

// call() method is used to call a function with a specific this 
      // it used to pass an object into another function of another method 
      // where this in the function refers to the object we have passed 
      //eg
      function greet(greeting){
            console.log(greeting+" "+this.name) ;
      }
      const p = {name: "SooryaVanshi"}
      greet.call(p,"Khamma Ghani") ;
      // syntax - functionName.call(this.obj , arg1 , arg2);
      // it does not create a New Function 

// apply() method is used to call a funtion with object as an arguments 
      // this is the first arg and then other arg are passed as an array ;
      // we can use one object method on other object ;
      const person = {
            fullName : function(){
                  console.log( this.firstName + this.lastName) ;

            }
      } 
      const p1 = {
            firstName: "vaibhav" ,
            lastName: "SuryaVanshi"
      }
      person.fullName.apply(p1);

// bind() method does run the function immediatelly but it creates a new function which can be called later
      // first arg is this and the other arg become permanent for the new function 
      const greetTo = greet.bind(p,"Jai mata di") ;
      greetTo();

      // the most important use case of bind 
      // is to Preserve this when the function is used as a callback 
      const per = { firstName:"Ajay" , lastName: "sing" ,
            fullName:function(){
             console.log(this.firstName +" "+ this.lastName);
            }
      }
      // setTimeout(per.fullName , 2000) ; 
      // const newp = per.fullName.bind(per) ;
      // setTimeout(newp , 3000)

//IIFE immediately invoked function expression ; 
      // IIFE is function that invokes itself when defined
      // normally function runs when it is called but IIFE runs when js engine reads it 
      // an IIFE is defined and executed at the same time 
      // it is used to create a private scope or to run setup code once 
      // EveryThing inside an iife is private means cannot be accessed from outside 
      ;(function (name){
            console.log("hello"+ name) ; 
      })("Aditya") ; 
      // how IIFE works 
            // function expression can be made self invoking 
            // self invoking function expression is invoked automatically without being called ;
            // parentheses around the function tell js to read it as an expression 
            // function expression will execute automatically if the expression is followed by() ; 
      // 

// Lexical scoping - means the scope of a variable is defined where it is written not where it is called 
      // a function can access - its own variable , its outer function variable and the global variable 

// closure is created when the function remembers and can access variables from its outer scope even after the outer function has finished execution

function outer(){
      let count = 0 ; 
      return function(){
            count++ ; 
            console.log(count)
      }
}
const fn = outer(); 
fn() ; 
fn() ; 