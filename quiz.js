// TUDO SOBRE O QUIZ  
//declarando variaveis

// Declarando variáveis
let nome = prompt("Qual é o seu nome?");
let tipoTerreno = prompt("Em que tipo de terreno você pretende andar de bicicleta? (por exemplo: estrada, trilha, cidade)");
let distânciaPretendida = prompt("Qual é a distância média que você planeja percorrer em cada passeio de bicicleta?");
let experiênciaCiclismo = prompt("Qual é o seu nível de experiência em ciclismo? (por exemplo: iniciante, intermediário, avançado)");
let orçamento = prompt("Qual é o seu orçamento para comprar uma bicicleta?");
let preferênciaMarchas = prompt("Você prefere uma bicicleta com muitas marchas para várias opções de velocidade ou uma bicicleta de marcha única mais simples?");
let tamanhoQuadro = prompt("Qual é a sua altura? (para ajudar a determinar o tamanho ideal do quadro)");
let preferênciaMarca = prompt("Você tem alguma preferência por uma marca específica de bicicleta?");
let estiloPedalada = prompt("Qual é o seu estilo de pedalada? (por exemplo: casual, competitivo, lazer)");
let corPreferida = prompt("Qual cor você prefere para sua bicicleta?");

let msg = document.getElementById("msg");

// Concatenando todas as mensagens em uma única string
msg.innerHTML = `Olá ${nome}, obrigado por responder ao nosso quiz!<br>`;
msg.innerHTML += `Com base nas suas respostas, recomendamos uma bicicleta para ${tipoTerreno}.<br>`;
msg.innerHTML += `Com uma distância média de ${distânciaPretendida} por passeio.<br>`; 
msg.innerHTML += `Como você é um ciclista ${experiênciaCiclismo}, sugerimos uma bicicleta de ${preferênciaMarchas} Qtd(Marchas)<br>`;
msg.innerHTML += `Com um quadro para uma pessoa de ${tamanhoQuadro}<br>`;
msg.innerHTML += `E que se encaixe dentro do seu orçamento de ${orçamento}.<br>`;
msg.innerHTML += `Sua preferência de marca é ${preferênciaMarca}, e sua cor preferida é ${corPreferida}.<br>`;
msg.innerHTML += `Esperamos que você encontre a bicicleta perfeita para suas necessidades!`;


