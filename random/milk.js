/*
Uzduotis:
- gaminam pieno kmokteilius
- gaunam uzsakymu kieky per diena(vienetais) 
- gaunam vienos porcijos dydi(litrais)
- vienos karves duodamo pieno kiekis per diena (litrais)
- reikia rasti, kiek reikia tureti karviu, norint patenkinti visus uzsakymus

*/





/*function milk(dienosUzsakymai, porcijosDydis, gaunamasPienas){
  const reikamasKiekis = dienosUzsakymai * porcijosDydis;
  console.log(reikamasKiekis);
  const karviuKiekis = Math.ceil(reikamasKiekis / gaunamasPienas);
  return karviuKiekis;

}

console.log(milk(10, 0.5, 9),'->', 1);
console.log(milk(100, 0.5, 9),'->', 6);

console.log(milk(-100, 0.5, 9),'->', 6);
console.log(milk(100,-0.5, 9),'->', 6);
console.log(milk(100, 0.5,-9),'->', 6);

console.log(milk('labas', 0.5, 9),'->', 6);
console.log(milk(100, true, 9),'->', 6);
console.log(milk(100, 0.5, 'pasideram'),'->', 6);
console.log(milk());*/





function milk(dienosUzsakymai, porcijosDydis, gaunamasPienas){

    if(typeof dienosUzsakymai !== 'number'){
        return 'errrorrr pirmas';
    }
    if(dienosUzsakymai < 0){
        return 'errrorrr pirmas'
    }
    if(typeof porcijosDydis !== 'number'){
        return 'errrorrr antras';
    }
    if(typeof gaunamasPienas !== 'number'){
        return 'errrorrr trecias';
    }
    const reikamasKiekis = dienosUzsakymai * porcijosDydis;
    console.log(reikamasKiekis);
    const karviuKiekis = Math.ceil(reikamasKiekis / gaunamasPienas);
    return karviuKiekis;
  
  }
  
  //console.log(milk(10, 0.5, 9),'->', 1);
  //console.log(milk(100, 0.5, 9),'->', 6);
  
  //console.log(milk(-100, 0.5, 9),'->', 6);
  //console.log(milk(100,-0.5, 9),'->', 6);
  //console.log(milk(100, 0.5,-9),'->', 6);
  
  console.log(milk('labas', 0.5, 9));
  console.log(milk(100, true, 9));
  console.log(milk(100, 0.5, 'pasideram'));
  //console.log(milk());
  