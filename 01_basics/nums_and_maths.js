const num = 300
// console.log(num);//--> 300

const num2 = new Number(200)
// console.log(num2);//--> [Number: 200]
// console.log(num2.toString());
// console.log(num2.toFixed());
// console.log(num2.toExponential());

const anothernum = 1234.098
// console.log(anothernum.toPrecision(2));
// console.log(anothernum.toPrecision(3));
// console.log(anothernum.toPrecision(4));
// console.log(anothernum.toPrecision(5));
// console.log(anothernum.toPrecision(6));


const hundreds = 1000000
// console.log(hundreds.toLocaleString());//-->1,000,000 , bcz of US standards
// console.log(hundreds.toLocaleString('en-IN'));//--> 10,00,000 , bcz of Indian standards

// +++++++++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//--> 4
// console.log(Math.ceil(4.2));//--> 5
// console.log(Math.floor(4.9));//--> 4
// console.log(Math.random());//--> always value will come between 0 and 1
// console.log(Math.random()*10);//--> here there's a catch, the value can also come which is starting from 0
// console.log((Math.random()*10) + 1);//--> by this method the min value will become 1
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)






