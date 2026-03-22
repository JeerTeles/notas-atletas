let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }  
];

// USANDO O MÉTODO sort() PARRA EXIBIR OS ATLETAS EM ORDEM ALFABÉTICAS
atletas.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
});

// USANDO MÉTODO for() COM O MÉTODO SORT PARA ORDENAR AS NOTAS DOS ATLETAS EM ORDEM CRESCENTE
for (let i = 0; i < atletas.length; i++) {
    atletas[i].notas.sort(function(a, b) {
        return a - b;
    })
}

function calcularMediaDoAtleta(notas) {
    let notasComputadas = notas.slice(1, 4);

    let soma = 0;
    notasComputadas.forEach(function(nota) {
        soma += nota;
    });
    
    let media = soma / notasComputadas.length;
   
    return {
        valorMedia: media,
        notasUtilizadas: notasComputadas.join(", ")
    };
}

atletas.forEach(atleta => {
    let resultado = calcularMediaDoAtleta(atleta.notas);
    console.log(`Atleta: ${atleta.nome.toUpperCase()}`);
    console.log(`Notas Ordenadas: ${atleta.notas.join(", ")}`);

    console.log(`Notas Válidas de ${atleta.nome}: ${resultado.notasUtilizadas}`);
    console.log(`Média (sem extremos): ${resultado.valorMedia.toFixed(2)}`);
    console.log("------------------------------------------------------");
});

