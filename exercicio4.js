const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o valor total do faturamento
const totalFaturamento = Object.values(faturamento).reduce((acc, curr) => acc + curr);

// Calcula o percentual de representação de cada estado
const representacao = {};
for (const estado in faturamento) {
    representacao[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + "%";
}

// Exibe o resultado
console.log(representacao);

