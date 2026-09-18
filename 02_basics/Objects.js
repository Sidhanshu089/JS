// Singleton 
//--> when we create as literals no singleton created 
//--> if object made through constructor always singleton is created

// Object literals
const mySym = Symbol("Key1")
const jsuser = {
    name: "sid",
    "full-name": "sidhanshu Nandal",
    [mySym]: "myKey1",//to use it as symbol always put in []
    age: 21,
    location: "Rohtak",
    email: "sidhanshu@gmail.com",
    isloggedin: false,
    lastloggindays: ["Monday","Tuesday"]
}

// console.log(jsuser.email)// this is working but use below one method
// console.log(jsuser["email"])// more professionally used method
// console.log(jsuser["full-name"]);
// console.log(jsuser[mySym]);
// console.log(typeof jsuser[mySym]);

jsuser.email = "sid@mail.com"
// Object.freeze(jsuser)//--> it will lock the entity to change further
jsuser.email = "sid@orkoot.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello jsuser");
    
}

console.log(jsuser.greeting());
// console.log(jsuser.greeting);


jsuser.greetings2 = function(){
    console.log(`Hello jsuser, ${this.name}`);
    
}

console.log(jsuser.greetings2());




