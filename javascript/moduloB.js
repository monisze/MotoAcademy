/* const { nome, idade } = required(' ./moduloA');
console.log(nome);
console.log(idade)

console.log (soma(2,2))

console.log (areaCiruclo(2))
console.log(PI); */

/* const moduloA = require('./moduloA');

console.log(moduloA);
console.log (moduloA.nome);
console.log (moduloA.idade);
console.log (moduloA.cidade); 
 */
const moduloA = require('./moduloA');

console.log (moduloA);
moduloA.map((item) => { 
   console.log( item.time);
})


