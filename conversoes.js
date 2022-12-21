// tipo de dado
// booleanos

// conversao implicita ---> permite converter um tipo em outro (numeros em strings, vice e versa e outras possibilidades)

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // retorna false porque mesmo que ambos sejam numeros, o tipo nao è equivalente

console.log(numero == numeroString); // com a comparacao implicita, utilizamos dois simbolos de iguais para que seja feito somente a comparacao dos tipos

console.log(numero + numeroString); // o numero è concatenado e è feito uma fusao com as duas variaveis, ja que ambas tem tipos diferentes.

// conversao explicita

// Number()
// String()

console.log(numero + Number(numeroString)); // Number() è uma funcao do javascript que è responsavel por fazer uma conversao da variavel com valor string para number.
