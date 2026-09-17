const accountId = 13342
let accountEmail = "xyz@cvg.com"
var accountPass = "1232"
accountCity = "Haryana"
let accountState;

// accountId = 3424 // not allowed constant cant change
accountEmail = "abc@my.com"
accountPass = "2345"

console.log(accountId);
/*
Prefer no to use var 
because of issue in block scope and functional scope
*/

// console.log(accountEmail);
// console.log(accountPass);

console.table([accountEmail, accountPass, accountCity, accountState])
