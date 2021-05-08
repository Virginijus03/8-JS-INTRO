function love(leafCout){
    return leafCout % 2 === 0;

}

console.log(love(7),`->`,true);
console.log(love(70),`->`,false);