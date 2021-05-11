/*
ARRAY

array metodai:
1).push()    - prideti i gala nauja reiksme
2).unshift() - prideti i prieki nauja reiksme
3).pop()     - isimti is galo(paskutini)
4).shift()   - isimti is priekio(pirmaji)
5).reverse() - vercia teksta atvirksciai, 
               is galo i prieki, is priekio i gala
6).concat()  - sudeti kelis sarasus i viena
*/

const marks = [10, 2, 5, 8, 4, 7];
const size = marks.length;

const firstMarks = marks[0];
const second = marks[1];
const last = marks[size - 1];

console.log(marks);
console.log('pirmas;', firstMarks);
console.log('antras:',second);
console.log('paskutinis:', last);

//tektu sarasai
const dictionary = ['labas', 'rytas', 'sakau', 'tau']

const paskutinisZodis = dictionary[dictionary.length - 1];
console.log(paskutinisZodis);


console.log("_________________🚀");

//array metodai

const abc = ['b', 'c'];
console.log(abc);

abc.push('d');
console.log(abc);

abc.shift();
console.log(abc);

abc.pop();
console.log(abc);

abc.unshift('a');
console.log(abc);

console.log(abc.reverse());
console.log(abc);


console.log('____________🛴');

//senesnis sarasu sudejimo budas
const a1 = ['a','b'];
const a2 = ['c','d'];
const a12 = a1.concat(a2);

console.log(a2);
console.log(a1);
console.log(a12);

console.log(['a', 'b'].concat(['c', 'd']));

//modernesnis, lengviau skaitomas sarasu sudejimo budas
//(pirma antras ...)
const modern1 = [...a1, ...a2];
console.log(modern1);

//modernesnis, lengviau skaitomas sarasu sudejimo budas
//(antras pirmas(reverse)...)
const modern2 = [...a2, ...a1];
console.log(modern2);
