# Campo de Futebol
Atividade cena DJW - Campo de futebol<br>

# Descrição
Leonardo e Lucas Noel<br>

# HTML
Fizemos a estrutura inicial, colocamos o ícone e adicionamos o Canvas, definimos seus pixels e linkamos o JavaScript e o CSS.<br>

# CSS
No CSS, apenas definimos a cor de fundo do site.<br>

# JavaScript
Criamos uma variável onde capturamos o elemento com o id "canvas". Depois, criamos outra variável que recebe o elemento "ctx" em um contexto 2D.<br>

## Campo
Para o campo, colocamos a cor e a posição do retângulo.<br>

### Linhas do Campo
Para as linhas nas laterais, colocamos a cor, o tamanho da linha e definimos as suas posições iguais às do campo.
<img src="img/campo.png" width="600px" height="300px"><br>

## Escanteios
Os escanteios fizemos com a curva quadrática, definimos o ponto final e inicial da linha e puxamos a curva do meio dela.
<img src="img/escanteio.png" width="600px" height="300px"><br>

## Linha do meio
Para a linha do meio, apenas definimos o ponto onde se iniciaria e terminaria.
Para o círculo do meio, apenas colocamos o código padrão do círculo e deixamos a linha grossa. Para a bola no círculo central, apenas mudamos o raio do círculo, diminuindo-o.
<img src="img/campo.png" width="600px" height="300px"><br>

## Área
Apenas criamos um quadrado maior e outro menor e colamos a linha.
Para as meia-luas que ficam na grande área, apenas fizemos um círculo pela metade e colocamos false ou true para mudarmos o sentido que a meia-lua está. A marca do pênalti usamos um círculo e preenchemos ele.

<img src="img/areas.png" width="600px" height="300px"><br>

## Jogadores
Usamos o mesmo código de círculo em todos os jogadores, apenas mudando sua posição e adicionamos borda, alterando a cor dele para jogadores do Corinthians e Chelsea. Adicionamos números aos jogadores com o texto e colocamos a mesma posição dos círculos.

<img src="img/jogadores.png" width="600px" height="300px"><br>

## Placar
Fizemos dois retângulos, um preto e outro azul, e adicionamos uma borda nele todo. Colocamos um texto para adicionar os números do placar, um texto para o nome 'Corinthians' e outro texto para 'Chelsea'. E por fim, uma linha para dividi-lo ao meio.  

<img src="img/placar.png" width="600px" height="300px"><br>
## Bola
Apenas adicionamos uma imagem da bola e definimos a sua posição.
<img src="img/bola2.png" width="600px" height="300px"><br>

# Resultado Final
<img src="img/bola2.png" width="600px" height="300px">



