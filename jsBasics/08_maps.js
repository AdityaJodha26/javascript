// Maps are js objects which store key-value pairs
// keys can be of any type
// size property to find size of the map 

// create a new Map  with new Map() and then set values using set() 
const map1 = new Map() ;
map1.set(1 , "aditya") 
map1.set(2 , "sanvi") 
console.log(map1)
//2nd) is pass an array in the new Map(arr) method 

// map Methods 
//1) get method - get the value of a key 
console.log(map1.get(1))
//2) delete method removes a set element 
//3) has() returns true if a key exist in a map
console.log(map1.has(2))
//4) forEach() runs a function for each element 
console.log(map1.forEach((x)=> console.log(x.concat(" is  the best"))))

//to iterate we use for of ; 
for(let x of map1){
    console.log(x)
}
//5)entries() returns an iterator object with the key values in a map 
for(let x of map1.entries()){
    console.log(x)
}
//6) keys() method returns an iterator object with the keys in the map 
for(let x of map1.values()){
    console.log(x)
}
//7) values() return the values 