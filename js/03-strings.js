/*

STRINGS(tekstas)

Iniciavimo(rasymo, kodavimo) budai:
1)viengubos (') kabutes
2)dvibubos (¨) kabutes
3)backtick (`) kabutes

*/
const kabutes1 = "Labas";
const kabutes2 = `vakaras`;
console.log(kabutes1, kabutes2);

//Viengubos (') kabutes
const kabutes21 = "Viengubos (') kabutes";
console.log(kabutes21);

//Dvigubos (¨) kabutes
const kabutes12 = 'Dvigubos (¨) kabutes';
console.log(kabutes12);

// Viengubos (') ir dvigubos (") kabutes.
const kabutes1e = 'Viengubos (\') ir dvigubos (") kabutes';
console.log(kabutes1e);

const kabutes2e = "Dvigubos (\") ir viengubos (') kabutes";
console.log(kabutes2e);

// Tekste backslash \ yra jega!
const backslash = "Tekste backslash \\\ yra jega!";
console.log(backslash);

/*Vardenis ir Pavardenis su tarpu
(galima tarpa po vardenis, galima supliusinti kabutese tarpa)*/
const vardass = "Vardenis";
const pavarde = "Pavardenis";

const fullName = vardass + " " +  pavarde;
console.log(fullName);

// Sveiki, as esu Vardenis!
const sayHi = "Sveiki, as esu" + " " + vardass + "!";
console.log(sayHi);

//HTML kodas kodinimas JS:
//(\n - enter, prmetimas i kita eilute)
//(\t - tab)

const imgSrc = './img/logo.png';
const HTML = '<header>\n\
                  <img src="' + imgSrc + '" alt="logo" class="logo">\n\
                     <nav>\n\
                        <a href="#">Link</a>\n\
                        <a href="#">Link</a>\n\
                        <a href="#">Link</a>\n\
                        <a href="#">Link</a>\n\
                     </nav>\n\
            </header>';
console.log(HTML);

//kitas pvz su kabutemis sudedant teksta(nerekomenduotinas)
//(naudoti bactikus)
const H0  = '<header>' +
                 '<img>' +
                 '<nav>' +
                   '<a></a>' +
                   '<a></a>' +
                   '<a></a>' +
                 '</nav>'
            '</header>'



//Backtick(dolerio zenklas veikia tik su backtikais)
const H2 = ` <header>
                 <img src="${imgSrc}" alt="logo" class="logo">
                    <nav>
                       <a href="#">Link</a>
                       <a href="#">Link</a>
                       <a href="#">Link</a>
                       <a href="#">Link</a>
                    </nav>
            </header>;`
console.log(H2);

//Neveikia doleris(pvz)
const demo = "asd ${imgSrc} asd";
console.log(demo);










