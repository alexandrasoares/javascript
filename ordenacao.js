const lista = [10, 1, 5, 9, 8, 12, 15];

console.log('Usando somente o sort para ordenacao');
console.log(lista.sort()); // essa ordenacao nao sera conforme o esperado devido o retorno da funcao sorte, que obedece o padrao de ordenacao alfabetica da tabela unicode. O correto nesse caso sera criar uma funcao de comporacao e entao usar o sort para fazer a ordenacao.

console.log('--------------------------------------------------------');
function compararNumeros(a, b) {
    if (a == b) {
        return 0;
    }

    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1
    }
};

console.log('Usando uma funcao para comparar numeros e assim usar o sort para ordenar');
console.log(lista.sort(compararNumeros));
console.log('--------------------------------------------------------');
console.log('Usando uma funcao anonima para simplificar o codigo');

console.log(lista.sort((a, b) => a-b));
