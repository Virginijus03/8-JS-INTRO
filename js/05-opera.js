//operacijos, veiksmai pagal namu darbus


//skaiciu sujungimas
const s1 = 5;
const s2 = -3;
const s3 = 7;

const suma = s1 + s2 +s3;
console.log(suma);

//tekstu sujungimas
const w1 = "labas";
const w2 = "rytas";
const w3 = "tau";

const sakinys1 = w1 + ' ' + w2 + ' ' + w3;
console.log(sakinys1);

const sakinys2 = `${w1} ${w2} ${w3}`;
console.log(sakinys2);

//arreju(saraso) veiksmai is info jo viduje
//alternuojanti eilute(+-+-+-)veiksmai
const x = [10, 2, 8, 4];
const alternuojantiSuma = x[0] - x[1] + x[2] - x[3];
console.log(alternuojantiSuma);

console.log('_______________🛺');

//arreju(saraso) veiksmai is info jo viduje
const d = [s1, w2, w3];
console.log(d);

//senamadiskas variantas (arreju(saraso) veiksmai
// is info jo viduje)dvi sintakses
const sakinys3 = d[2] + ', ' + d[1] + ', '+ d[0];
console.log(sakinys3);

const sakinys4 = `${d[2]}, ${d[1]}, ${d[0]}`;
console.log(sakinys4);

//trecias budas dr - d array reversed
const d1 = [...d];
const dr = d1.reverse();
console.log(dr);

//trumpesnis naujoviskas naudoti .join();
const sakinys5 = dr.join(', ');
console.log(sakinys5);

//kombinuotas komandos naujoviskesnis
const d2 = [...d];
const sakinys6 = d.reverse().join(', ');
console.log(sakinys6);