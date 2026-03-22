🏅 Sistema de Pontuação de Atletas (DevClub)
Este projeto é uma aplicação em JavaScript desenvolvida para calcular a pontuação média de atletas em uma competição, seguindo uma lógica de pontuação específica que descarta os valores extremos (o maior e o menor).

🚀 Funcionalidades
O script processa uma lista de objetos contendo o nome e as notas de cada atleta e realiza as seguintes operações:

1. Ordenação Alfabética: Organiza a lista de atletas pelo nome.

2. Ordenação de Notas: Ordena as notas de cada atleta em ordem crescente.

<<<<<<< HEAD
3. Tratamento de Dados: Remove a menor e a maior nota de cada atleta para garantir uma média mais justa (notas intermediárias).
=======
3.Tratamento de Dados: Remove a menor e a maior nota de cada atleta para garantir uma média mais justa (notas intermediárias).
>>>>>>> 1ba07d09780755cfe6869272ea17e7cdeb762862

4. Cálculo de Média: Calcula a média aritmética das notas restantes.

5. Exibição de Resultados: Formata e exibe os dados no console de maneira organizada.


📊 Regras de Negócio
Para cada atleta, o cálculo da média segue este fluxo:

São fornecidas 5 notas.

A maior e a menor nota são descartadas.

A média é calculada com as 3 notas centrais.


🛠️ Tecnologias Utilizadas
JavaScript (ES6+): Utilização de métodos modernos como sort(), slice(), forEach() e Template Literals.

Node.js: Ambiente de execução.
