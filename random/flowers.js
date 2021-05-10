/*
Uzduotis:
 - duodama kiek turim geliu
 - duodama kiek vina gele susilaukia gelyciu
 - duodama kiek turiu vazonu
 REIKIA RASTI - keliu vazonu truksta?
*/





function flowers(geles, ugliai, vazonai){
    const visoGeliu= geles * ugliai + geles;
    const reikiaVazonu = visoGeliu - vazonai;

if( reikiaVazonu < 0){
    return 0;
    
  }
   return reikiaVazonu
}

console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 2, 100), '->', 0);