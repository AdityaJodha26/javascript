// html events are things that happen to html elements ; 
// syntax - element event = "some javascript"
const submitB = document.getElementById("submitbutton") ;
submitB.onclick=()=>{
    submitB.innerHTML="nhi karna tha" ;

};
// Common HTML Events
// onchange , onclick , onmouseover, onmouseout ; 

// javascript event handler - is the js code runs when an event happens 
// event handlers can be used to handle user input , user actions and browser actions 

// addEventListener is the recommended way to handle any event
submitB.addEventListener("click" , ()=>{
    submitB.innerHTML="I love You" ; 
});
// common mouse events are 
// click , dbclick , mouseover , mouseout 

// keyboard input ;
// keydown - when key is pressed down , keyup when key is released

//Load Events 
// happen when the browser has finished loading an element 
// two most important are - 1) DOMContentLoaded - means when the web page is loaded  ; 2) load -when images ,,etc ; 

//DOMContentLoaded is fired when the browser has loaded the html page and created the Document object Model tree but not necessarily finished loadedd external links 
// load event is fired when all the resources are loaded , used when we required all the resources ;

// Timing Events 
// setTimeout - belongs to the window object can also be written as setTimeout ; 
function sayHello(){
    console.log("hello girls") ;

}
setTimeout(sayHello ,2000) ; // setTimeout method executes a function after some milliseconds 
// setTimeout(fn , timeinMS)  it calls the function only 1 time ; 

//2) setInterval() method executes a fn repeatedly after some milliseconds ;
//setInterval(sayHello , 4000) ; 