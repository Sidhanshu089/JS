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
    // console.log("hello");
    
}
// console.log(typeof myfunction);



// ++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive), Heap(Reference/Non-Primitive)

let myyoutubname = "xyzgaming"
// let anothername = myyoutubname
let anothername = "abcgames"

// console.log(anothername);
// console.log(myyoutubname);

let user1 = {
    emaiid: "abc@gmail.com",
    upi: "okasbi"
}

let user2 = user1
user2.emaiid = "sidhanshu@mail.com"
console.log(user1.emaiid);
console.log(user2.emaiid);


