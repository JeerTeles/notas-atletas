🏅 Sistema de Pontuação de Atletas (DevClub)
Este projeto é uma aplicação em JavaScript desenvolvida para calcular a pontuação média de atletas em uma competição, seguindo uma lógica de pontuação específica que descarta os valores extremos (o maior e o menor).

🚀 Funcionalidades
O script processa uma lista de objetos contendo o nome e as notas de cada atleta e realiza as seguintes operações:

1. Ordenação Alfabética: Organiza a lista de atletas pelo nome.

2. Ordenação de Notas: Ordena as notas de cada atleta em ordem crescente.

3. Tratamento de Dados: Remove a menor e a maior nota de cada atleta para garantir uma média mais justa (notas intermediárias).

4. Cálculo de Média: Calcula a média aritmética das notas restantes.

5. Exibição de Resultados: Formata e exibe os dados no console de maneira organizada.


📊 Regras de Negócio
Para cada atleta, o cálculo da média segue este fluxo:

* São fornecidas 5 notas.

* A maior e a menor nota são descartadas.

* A média é calculada com as 3 notas centrais.


🛠️ Tecnologias Utilizadas
* JavaScript (ES6+): Utilização de métodos modernos como sort(), slice(), forEach() e Template Literals.

* Node.js: Ambiente de execução.

💻 Como Executar
1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório ou copie o código para um arquivo chamado index.js.

3. Abra o terminal na pasta do projeto.

4. Execute o comando: node index.js

📝 Exemplo de Saída
    Plaintext
    Atleta: BRUNO CASTRO
    Notas Ordenadas: 9, 9.5, 10, 10, 10
    Notas Válidas de Bruno Castro: 9.5, 10, 10
    Média (sem extremos): 9.83
------------------------------------------------------


