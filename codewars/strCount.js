/*
"Hello", 'o' => 1
"Hello", 'l' => 2
"", 'z'      => 0
*/

function strCount(str, letter){  
   let kiekis = 0;

   for (let i = 0; i < str.length; i++) {
       const element = str[i];

       if(element === letter){
        kiekis++;
       }
    }  
  
   return kiekis;
}


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);