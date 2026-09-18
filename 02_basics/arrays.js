// Arrays

const myarr = [0,1,2,3,4]
console.log(myarr);

// console.log(typeof myarr);
// console.log(myarr[0]);
myarr.push(6)
// console.log(myarr);

myarr.pop()
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

const newarr = myarr.join()// join functions merges the arrays and convert it into string
// console.log(newarr);
// console.log(typeof newarr);

// slice, splice
console.log("A ", myarr);
const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1 ,3)
console.log("C ", myarr);
console.log(myn2);









