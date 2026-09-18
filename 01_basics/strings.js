const name = "sid"
const repocount = 5
// console.log(name + repocount + " Value");
// console.log(`hello my name is ${name} and my repoCount is ${repocount}`);// this is known as srtring interpolition
const igname = new String('ivory-hghh')
// console.log(igname[0]);
// console.log(igname.__proto__);
// console.log(igname.length);
// console.log(igname.toUpperCase());
// console.log(igname.charAt(2));
// console.log(igname.indexOf('y'));

const newstring = igname.substring(0,3)
// console.log(newstring);

const morestring = igname.slice(-2,3)

const name1 = "sid"
const name2 = "  sid  "
console.log(name1);//--> sid
console.log(name2);//-->   sid  .
console.log(name2.trim());//--> sid
const url = "https://sidhanshu.com/sidhanshu%20nandal"
console.log(url.replace('%20','-'))//--> https://sidhanshu.com/sidhanshu-nandal
console.log(url.includes('mukesh'))//--> false
console.log(igname.split('-'));//--> ['ivory','hghh']





