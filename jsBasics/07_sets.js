// Set is a collection of unique values 
// the values can be of any  type 
// set can be created in 2 ways 
/* 1) using new Set() keyword 
in which we pass an array to create a set */ 
const arr = [23,45,53,5,32,23,45] ;
const set = new Set(arr) ;
console.log(set)

// size property  set.size ; 

/* 2) create a set using new Set()
and then add values using add() method  ; 
*/

/* iteration in array can be done using 
for of loop 
*/ 
for( let x of set){
    console.log(x) ; 
}

// sets are objects 

/***************************** */ 
// Sets methods 
// 1) new Set() 
// 2) add() 
// 3) forEach() - function invokes a function for each set element 
console.log(set.forEach((x)=> console.log(x*2)))
// 4) values() function creates an iterator object with the values of the set 
const val = set.values() ;
console.log(val) ;
console.log(typeof val)
// that iterator object is usd to iterate through the set 
console.log(val.next())
//key() also do the same thing 
// 5) entries() it returns an iterator with (value , value) pair from the set as keys are not there
const en = set.entries() 
console.log(en) 
// 6) delete() deletes the element from the set returns true if it exist otherwise returns false 
// clear() delete all the elements and set becomes empty 

set.clear() ;
console.log(set)

//***************************** */ 
// Set logics 
const set1 = new Set(arr) ;
const arr2 = [1,3,55,6,2,5,634] 
const set2 = new Set(arr2) ; 
//1) Union 
console.log(set1.union(set2)) 
//2) intersection
console.log(set2.intersection(set1))
//3) difference() a.difference(b) means only those elements which are present in a 
// //4) symmetric diff means the common elements will be removed
// 5) intersection( )
// 6) isSupersetOf() b is a superset of a means that b contain all the elements of  a
// 70 isSubsetOf() a is the subset of b means all a elements are present inside b
// 8) isDisjointFrom() means no common element 