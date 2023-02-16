const faturamentoMensal = require('./faturamento.json');
console.log(faturamentoMensal)

// Função para calcular estatísticas de faturamento
function calcularEstatisticasFaturamento(faturamentoMensal) {
    let diasFaturados = [];
    let somaFaturamento = 0;
    let maiorFaturamento = 0;
    let menorFaturamento = Number.MAX_SAFE_INTEGER;

    // Percorre cada dia do mês
    for (let dia in faturamentoMensal) {
        let valorFaturamento = faturamentoMensal[dia];
        if (valorFaturamento > 0) {
            diasFaturados.push(valorFaturamento);
            somaFaturamento += valorFaturamento;
            if (valorFaturamento > maiorFaturamento) {
                maiorFaturamento = valorFaturamento;
            }
            if (valorFaturamento < menorFaturamento) {
                menorFaturamento = valorFaturamento;
            }
        }
    }

    let mediaFaturamento = somaFaturamento / diasFaturados.length;
    let diasAcimaDaMedia = diasFaturados.filter(dia => dia > mediaFaturamento).length;

    return {
        "menorFaturamento": menorFaturamento,
        "maiorFaturamento": maiorFaturamento,
        "diasAcimaDaMedia": diasAcimaDaMedia
    };
}

// Chamada da função para calcular estatísticas de faturamento
let estatisticas = calcularEstatisticasFaturamento(faturamentoMensal.Janeiro);

// Imprime os resultados
console.log("Menor faturamento: " + estatisticas.menorFaturamento);
console.log("Maior faturamento: " + estatisticas.maiorFaturamento);
console.log("Dias acima da média: " + estatisticas.diasAcimaDaMedia);
