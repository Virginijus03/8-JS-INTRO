/*

NUMBERS

1)teigiami, nulis, neigiami
2)desimtainiai, sveikieji
3)tikri skaiciai, begalybes, NaN

*/
const teigiamas = 5;
console.log(teigiamas);

const neigiamas = -8;
const nulis = 0;
const nulisMinus = -0;
console.log(nulis, nulisMinus);

const desimtainis = 3.141592564;
console.log("PY reiksme", desimtainis);

const begelybe = Infinity;
const begelybeMinus = -Infinity;
console.log("PVZ", begelybe, begelybeMinus);

const nesamone = NaN;
console.log(nesamone);

//NaN pavyzdys: kodas(nelogiskos matematines oprecijos, rezultatas)
const puseZodzio = "laba" / 2;
console.log(puseZodzio);


const a = 2;
const b = 3;
const c = 4;

const d = (a+ b) * c;

console.log(a, b, c, d);
console.log(a, b, c, (a+ b) * c);
//kitas variantas
console.log(`(${a} + ${b}) * ${c} = ${d}`);

const x = 2 * 4 / 8;
const y = 2 / 4 * 8;

console.log(x);
console.log(y);

console.log('_____________________');

const angle = 30;
const sin30 = Math.sin(angle / 180 * Math.PI);
console.log(sin30);

//saknies traukimas
console.log(Math.sqrt(81));

//pakelti laispniu
console.log(Math.pow(2, 3));
console.log(2 ** 3);

//liekana
console.log(17 % 5);

//https://en.wikipedia.org/wiki/Sine