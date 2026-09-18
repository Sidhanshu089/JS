const marvelHeroes = ["ironMan","Spiderman","Hulk"]
const dcHeroes = ["Superman","Batman","Flash"]
// marvelHeroes.push(dcHeroes)// push works on existing array no new array needed
// console.log(marvelHeroes);
// const allheroes = marvelHeroes.concat(dcHeroes)// concat creates new array
// console.log(allheroes);
const allnewheroes = [...marvelHeroes, ...dcHeroes]// spread operator
// console.log(allnewheroes);

const anotherarr = [1,2,3,[4,5,6],7,[8,9[10,11]]]
const usablearr = anotherarr.flat(Infinity)
// console.log(usablearr);

// console.log(Array.isArray("SIDHANSHU"))
// console.log(Array.from("SIDHANSHU"));
// console.log(Array.from({name: "Sidhanshu"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));





