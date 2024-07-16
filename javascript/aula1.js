/* const variavel1 = 1//number 
const variavel2 = 'texto'; // string
const booleano = true; // boolean true ou false
const nulo = null;
const undefined;

const object = {
    nome: "Monise",
    idade: 25
}

objeto.nome = "Maria"

const array = ["teste", 2525 , true]

const soma = 1 + 1;
const subtracao = 2 - 1
const multiplicacao = 2 *1
const divisao = 4/2


let valorConstante  = 'constante';
const array = [];
array.push(20);

const objeto = {
    aluno: 'Monise',
};
objeto.aluno = 'Euclides';
console.log (objeto);

let variavel2 = 'valor fora';
function teste () {
    variavel2 = 'valor dentro';
    variavel2 = 'mudamos o valor dentro';
    console.log(variavel2);
}
teste();
console.log(variavel2);


function teste 2 (variavel) {
    variavel2 = 'mudou 2';
    variavel = 'mudou 3';
console.log (variavel) */

/* teste ();
console.log (variavel2);

var variavelGlobal = '';

function teste() {
   var variavelGlobal = 'oi';
   teste2 ();
}

teste2 () {
   variavelGlobal = 'tchau'; 
}

teste ();
console.log (variavelGlobal);

const aluno = 'Monise'
if(aluno == 'Monise') {
    console.log ('Monise');
} else {
    console.log('Maria');
}
let numero = 22;
if (numero =='22'); {
console.log('Ele é igual a 22');
}
else {
    console.log('Ih, é igual não pai');
}

numero = 40
if(30 >= numero) {
    console.log ('É maior');
}
else if(30 !=numero){

}

const numero = 5

if (numero > 2 && numero < 6) {
    console.log('Ele esta nesse intervalo');
}

if (numero > 2 || numero < 6) {
    console.log('Ele esta nesse intervalo de novo');
}


 */
/* 
function nomeFuncao(params) {



}

const funcao = 
const array = ["String", 123123, true,"mamama", funcao]

array [0] = "Não quero string"
console.log(array);

const numeros = [1,2,3,4];
numeros.push(5)
console.log(numeros);

/* numeros.pop()
console.log(numeros); */

/* 
numeros.map((item)=> {
    console.log(item);
})

const testeNumeros = numeros.filter ((item) => item != 2)
console.log(testeNumeros);

const teste = ["Vasco", "Fluminense", "Corinthians"]
const testeTime =teste.filter. ((time)=> time != "Vasco")
console.log (testeTime);
const testeNumeros = numeros.filter ((item)=> item !=2)
console.log(testeNumeros);

const pessoa = {
    nome: "João",
    iadade: 25,
    profissao: "Arquiteto",
    saudacao: function () {
        console.log ("Oi mundo")
    }
}

console.log(pessoa);
console.log(pessoa.nome)
console.log(pessoa['nome'])

pessoa.nome = "Adriana";
console.log(pessoa);

delete pessoa.profissao;
console.log(pessoa)

pessoa.saudacao() */ //

/* for(let i=0; i<5; i++) {
    if(i == 2) {
        continue
    }
    console.log
} */
/* 
let i = 0
while(i<5) {
    console.log(i);
    i++
}

 */
/* 
let i = 0
do {
    console.log (i);
    i++
}while( i<5) */


/* 
const pessoas = [
    {

        nome: "Euclides",
        idade: 22,
        profissão: "Analista de sistemas"
    },
    {

        nome: "Linton",
        idade: 35,
        profissão: "Analista de sistemas"
    },
    {

        nome: "Adriana",
        idade: 20,
        profissão: "Analista de sistemas"
    },

    {

        nome: "Francisco",
        idade: 28,
        profissão: "Analista de sistemas"
    }
]

for(let contador = 0; contador < pessoas.length; contador++) {
    if (pessoas[contador].idade > 22) {
    console.log(pessoas[contador])
    }
}

pessoas.map((pessoa) => {
    if(pessoa.idade>22) {
        console.log(pessoa);
    }
})

const testePessoas = pessoas.filter ((pessoa) => pessoa.idade > 22);

console.log (testePessoas);




const pessoas = [
    {

        nome: "Monise",
        idade: 25,
        profissão: "Analista de sistemas"
    },
    {

        nome: "Linton",
        idade: 35,
        profissão: "Analista de sistemas"
    },
    {

        nome: "Adriana",
        idade: 20,
        profissão: "Analista de sistemas"
    },

    {

        nome: "Francisco",
        idade: 28,
        profissão: "Analista de sistemas"
    }
]

for(let contador = 0; contador < pessoas.length; contador++) {
    if (pessoas[contador].idade > 25) {
    console.log(pessoas[contador])
    }
}

pessoas.map((pessoa) => {
    if(pessoa.idade>25) {
        console.log(pessoa);
    }
})

const testePessoas = pessoas.filter ((pessoa) => pessoa.idade > 25);

console.log (testePessoas); */