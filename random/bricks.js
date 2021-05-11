/*
Uzduotis:
- gaunam kiek sienu turi namas
- gaunam kokio plocio viena siena (metrais)
- sienos neturi skyliu
- gaunam sienos aukasti, kuris visur yra vienodas
- turim plytoas dydis (aukstis ir plotis) (metrais)
- reikia suzinoti, kiek plytu mums reikes, jei plytu skaldyti negalima
*/


/*function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis) {
    let sumSienosPlotis = 0;

    for (let i = 0; i < sienuPlociai.length; i++) {
       sumSienosPlotis += sienuPlociai[i];
        
    }


    const plytuPlotyje = sumSienosPlotis / plytosPlotis
    const plytuAukstyje = sienosAukstis / plytosAukstis
    return plytuPlotyje + plytuAukstyje

}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);*/


console.log('_____________________________🚲');


function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis) {
    let sumSienuPlotis = 0;

    for (let i = 0; i < sienuPlociai.length; i++) {
        const sienosPlotis = sienuPlociai[i];
        sumSienosPlotis += sienuPlociai;
        
    }
    const plytuPlotyje = Math.ceil(sumSienuPlotis / plytosPlotis);
    const plytuAukstyje = Math.ceil(sienosAukstis / plytosAukstis);
    const plutuViso =plytuPlotyje + plytuAukstyje;

    return plytuViso;
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);