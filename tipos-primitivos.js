// tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

// NaN -> Not a Number

const alura = "Alura";

console.log(alura * primeiroNumero);
console.log('---------------------');

// teplate string ou template literal (pesquisar)

const cidade = 'belo horizonte';
const input = 'Belo Horizonte';

console.log('Sem toLowerCase');
console.log(cidade === input); // retorna false porque a validacao nao consegue diferenciar letras maiusculas de minisculas
console.log('---------------------');
console.log('Com toLowerCase');
console.log(cidade === input.toLowerCase()); // retorna true porque o metodo toLowerCase converte todas as letras em minusculas, sendo assim igualando uma palavra na outra.

console.log('---------------------');
console.log('Identificar quantidade de caracteres em uma variavel');
const senha = 'minhaSenha123';

console.log(senha.length);



console.log('Validando verdadeiro e falso usando booleano');

const primeiroValor = 5;
const segundoValor = 10;

console.log(primeiroValor === segundoValor); // retorna false porque 5 e diferente de 10 

// = atribui um valor para a variavel
// == compara os valores
// === compara os valores e o tipo


