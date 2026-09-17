// Primitive
// 7 types: strings, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3
const isloggedin = false
const outsidetemp = null

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id == anotherid);

// const bignum = 3242562567386726537n // --> bigint
// const bignum = 3242562567386726537 // --> number
console.log(typeof bignum);

// Reference/Non-Primitive
// array, object, functions

const heroes = ["x","y","z"]
let myobj = {
    name:"sid", 
    age:21,

}

const myfunction = function(){
    console.log("hello");
    
}
console.log(typeof myfunction);
