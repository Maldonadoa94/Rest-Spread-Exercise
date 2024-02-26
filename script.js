// Given this function:

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

// Refactor it to use the rest operator & an arrow function:

// Write an ES2015 Version

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);   //one line, using rest ...args and => functions

// Findmin
const findMin = (...args) => Math.min(...args); //spread args in Math.min function, while using rest to pass ...args as parameters

// MergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});  //...obj1 spreads keys and values into the new object of objects

// DoubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];    //spread array parameter elements into new array, spread args array into new array with elements doubled using map


// -------------------------------------------
// SLICE AND DICE!
// -------------------------------------------

/** remove a random element in the items array
and return a new array without that item. */

/* function removeRandom(items) {

} */

const removeRandom = items => {
    let i = Math.floor(Math.random() * items.length);   //get random index
    return [...items.slice(0, i), ...items.slice(i + 1)];   //return new array without item at i
}

//--------------------------------------------------------------
/** Return a new array with every item in array1 and array2. */

/* function extend(array1, array2) {

} */

const extend = (array1, array2) => [...array1, ...array2];  //spread array values from both arrays into single implicitely returned array

//--------------------------------------------------------------
/** Return a new object with all the keys and values
from obj and a new key/value pair */

/* function addKeyVal(obj, key, val) {

} */

const addKeyVal = (obj, key, val) => {
    let obj2 = {...obj};                //copy obj into obj2
    obj2[key] = val;                    //add new key/val pair to new obj and return
    return obj2;
}

//--------------------------------------------------------------
/** Return a new object with a key removed. */

/* function removeKey(obj, key) {

} */

const removeKey = (obj, key) => {
    let obj2 = {...obj};                //copy obj into obj2
    obj2[key] = undefined;              //set key to undefined, removing it and return obj2
    return obj2;
}

//--------------------------------------------------------------
/** Combine two objects and return a new object. */

/* function combine(obj1, obj2) {

} */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

//--------------------------------------------------------------
/** Return a new object with a modified key and value. */

/* function update(obj, key, val) {

} */

const update = (obj, key, val) => {
    let obj2 = {...obj};                //copy obj into obj2
    obj2[key] = val;                    // ??? Same logic as addKeyValue ???
    return obj2;
}