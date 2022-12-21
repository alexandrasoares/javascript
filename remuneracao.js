function ganhoPorHora(salario, horasTrabalhadas) {
    const salarioHora = (salario / horasTrabalhadas);

    //return Math.round(salarioHora); //retorna o valor inteiro sem casas decimais
    //return salarioHora.toFixed(2) //retorna o valor com casas decimais setadas na funcao
    return salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}); // formatacao para retornar o tipo da moeda e as casas decimais necessarias
}

console.log(ganhoPorHora(8000, 176));