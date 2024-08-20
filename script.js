


// Define player data
const player1Data = {
  name: "Jogador 1",
  number: 1,
  position: 1,
};

const player2Data = {
  name: "Jogador 2",
  number: 2,
  position: 1,
};

// Define questions and answers
const originalQuestions = [

{ question: "Qual é o resultado de 2 + 3?", answer: "5" },
  { question: "Resolva a equação para x: 3(x - 1) = 6", answer: "3" },
  { question: "Calcule a área de um quadrado com lado de comprimento 3 unidades.", answer: "9" },
  { question: "Se um retângulo tem comprimento 4 unidades e largura 3 unidades, qual é sua área?", answer: "12" },
  { question: "Qual é o resultado de 6 ÷ 3?", answer: "2" },
  { question: "Simplifique a fração: 4/8", answer: "1/2" },
  { question: "Calcule o perímetro de um retângulo com lados de comprimento 4 unidades e largura 6 unidades.", answer: "20" },
  { question: "Resolva a equação para x: 2x + 3 = 11", answer: "4" },
  { question: "Qual é o volume de uma caixa com comprimento 2 unidades, largura 3 unidades e altura 4 unidades?", answer: "24" },  { question: "Qual é o resultado de 2 + 3?", answer: "5" },
  { question: "Resolva a equação para x: 2(x - 4) = 6", answer: "7" },
  { question: "Calcule a área de um quadrado com lado de comprimento 4 unidades.", answer: "16" },
  { question: "Se um retângulo tem comprimento 6 unidades e largura 4 unidades, qual é sua área?", answer: "24" },
  { question: "Qual é o resultado de 10 ÷ 2?", answer: "5" },
  { question: "Simplifique a fração: 6/9", answer: "2/3" },
  { question: "Qual é o resultado de 2 + 2?", answer: "4" },
  { question: "Resolva a equação para x: 3(x - 1) = 6", answer: "3" },
  { question: "Calcule a área de um quadrado com lado de comprimento 3 unidades.", answer: "9" },
  { question: "Se um retângulo tem comprimento 4 unidades e largura 3 unidades, qual é sua área?", answer: "12" },
  { question: "Qual é o resultado de 6 ÷ 3?", answer: "2" },
  { question: "Simplifique a fração: 4/8", answer: "1/2" },
  { question: "Calcule o perímetro de um retângulo com lados de comprimento 4 unidades e largura 6 unidades.", answer: "20" },
  { question: "Resolva a equação para x: 2x + 3 = 11", answer: "4" },
  { question: "Qual é o volume de uma caixa com comprimento 2 unidades, largura 3 unidades e altura 4 unidades?", answer: "24" },
  { question: "Qual é o resultado de 2 + 3?", answer: "5" },
  { question: "Resolva a equação para x: 2(x - 4) = 6", answer: "7" },
  { question: "Calcule a área de um quadrado com lado de comprimento 4 unidades.", answer: "16" },
  { question: "Se um retângulo tem comprimento 6 unidades e largura 4 unidades, qual é sua área?", answer: "24" },
  { question: "Qual é o resultado de 10 ÷ 2?", answer: "5" },
  { question: "Simplifique a fração: 6/9", answer: "2/3" },
  { question: "Calcule o perímetro de um retângulo com lados de comprimento 5 unidades e largura 7 unidades.", answer: "24" },
  { question: "Resolva a equação para x: 3x + 5 = 20", answer: "5" },
  { question: "Qual é o volume de uma caixa com comprimento 3 unidades, largura 2 unidades e altura 4 unidades?", answer: "24" },
  { question: "Qual é o resultado de 4 + 7?", answer: "11" },
  { question: "Simplifique a expressão: 5y - 2y + 4y", answer: "7y" },
  { question: "Resolva a equação para z: 3z + 6 = 15", answer: "3" },
  { question: "Calcule a área de um triângulo com base 6 unidades e altura 4 unidades.", answer: "12" },
  { question: "Qual é o dobro de 8?", answer: "16" },
  { question: "Simplifique a expressão: 6a - 3a + 5a", answer: "8a" },
  { question: "Resolva a equação para x: 4(x - 2) = 20", answer: "7" },
  { question: "Qual é o resultado de 3 x 5?", answer: "15" },
  { question: "Resolva a equação para x: 2(x - 3) = 8", answer: "7" },
  { question: "Calcule a área de um quadrado com lado de comprimento 6 unidades.", answer: "36" },
  { question: "Se um retângulo tem comprimento 8 unidades e largura 5 unidades, qual é sua área?", answer: "40" },
  { question: "Qual é o resultado de 12 ÷ 4?", answer: "3" },
  { question: "Simplifique a fração: 8/12", answer: "2/3" },
  { question: "Calcule o perímetro de um retângulo com lados de comprimento 9 unidades e largura 5 unidades.", answer: "28" },
  { question: "Resolva a equação para x: 3x + 7 = 22", answer: "5" },
  { question: "Qual é o volume de uma caixa com comprimento 4 unidades, largura 3 unidades e altura 6 unidades?", answer: "72" },
  { question: "Qual é o resultado de 8 + 17?", answer: "25" },
  { question: "Simplifique a expressão: 3y - 2y + 5y", answer: "6y" },
  { question: "Resolva a equação para z: 4z + 9 = 25", answer: "4" },
  { question: "Calcule a área de um triângulo com base 10 unidades e altura 8 unidades.", answer: "40" },
  { question: "Qual é o dobro de 15?", answer: "30" },
  { question: "Simplifique a expressão: 4a - 2a + 7a", answer: "9a" },
  { question: "Resolva a equação para x: 5x - 8 = 12", answer: "4" },
  { question: "Calcule o volume de um cubo com aresta de comprimento 3 unidades.", answer: "27" },
  { question: "Qual é a soma dos ângulos internos de um triângulo?", answer: "180" },
  { question: "Simplifique a expressão: 5b - (2b + 3b)", answer: "0" },
  { question: "Resolva a equação para y: 2y/4 = 3", answer: "6" },
  { question: "Qual é o resultado de 25 - 13?", answer: "12" },
  { question: "Simplifique a expressão: 6c - 2c + 4c", answer: "8c" },
  { question: "Resolva a equação para x: 2(x + 5) = 16", answer: "3" },
  { question: "Calcule a área de um retângulo com lados de comprimento 12 unidades e largura 7 unidades.", answer: "84" },
  { question: "Qual é o resultado de 18 ÷ 3?", answer: "6" },
  { question: "Simplifique a fração: 15/20", answer: "3/4" },
  { question: "Calcule o perímetro de um quadrado com lado de comprimento 9 unidades.", answer: "36" },
  { question: "Resolva a equação para x: 3x - 10 = 17", answer: "9" },
  { question: "Qual é o resultado de 5²?", answer: "25" },
  { question: "Simplifique a expressão: 2m + 3m - m", answer: "4m" },
  { question: "Resolva a equação para a: 2(a - 5) = 18", answer: "14" },
  { question: "Simplifique a expressão: 5p - 2p + 8p", answer: "11p" },
  { question: "Resolva a equação para x: 4(x + 2) = 36", answer: "7" },

  { question: "Qual é o resultado de 3³?", answer: "27" },
  { question: "Simplifique a expressão: 6d + 2d - 3d", answer: "5d" },
  { question: "Resolva a equação para y: 3y/2 = 9", answer: "6" },
  { question: "Qual é a soma dos ângulos internos de um quadrado?", answer: "360" },
  { question: "Simplifique a expressão: 4r - (r + 2r)", answer: "r" },
  { question: "Resolva a equação para z: 5z - 12 = 8", answer: "4" },
  { question: "Calcule a área de um trapézio com bases de comprimento 6 e 8 unidades e altura 5 unidades.", answer: "35" },
  { question: "Qual é o resultado de 14 ÷ 2?", answer: "7" },
  { question: "Simplifique a fração: 10/15", answer: "2/3" },
  { question: "Resolva a equação para x: 2x - 5 = 11", answer: "8" },
  { question: "Qual é o resultado de 2⁴?", answer: "16" },
  { question: "Simplifique a expressão: 7a - 3a + 6a", answer: "10a" },
  { question: "Resolva a equação para b: 2(b/3) = 5", answer: "7.5" },
  { question: "Qual é o resultado de 16 x 3?", answer: "48" },
  { question: "Simplifique a expressão: 2q + 5q - 3q", answer: "4q" },
  { question: "Resolva a equação para x: 3(x - 4) = 21", answer: "11" },
  { question: "Calcule a área de um retângulo com lados de comprimento 15 unidades e largura 8 unidades.", answer: "120" },
  { question: "Qual é o resultado de 10 + 2²?", answer: "14" },
  { question: "Simplifique a expressão: 8e - (3e - 2e)", answer: "7e" },
  { question: "Resolva a equação para y: 4y/2 = 10", answer: "5" },
  { question: "Qual é a soma dos ângulos internos de um pentágono?", answer: "540" },
  { question: "Simplifique a expressão: 6m - 4m + 2m", answer: "6m" },
  { question: "Resolva a equação para z: 2z + 8 = 16", answer: "4" },

  { question: "Qual é o resultado de 18 ÷ 2?", answer: "9" },
  { question: "Simplifique a fração: 12/18", answer: "2/3" },
  { question: "Calcule o perímetro de um triângulo com lados de comprimento 7, 12, e 15 unidades.", answer: "34" },
  { question: "Resolva a equação para x: 4x - 7 = 25", answer: "8" },
  { question: "Qual é o resultado de 3³ - 2²?", answer: "23" },
  { question: "Simplifique a expressão: 5n + 2n - n", answer: "6n" },
  { question: "Resolva a equação para a: 3(a - 2) = 15", answer: "7" },
  { question: "Qual é o resultado de 9 x 7?", answer: "63" },
  { question: "Simplifique a expressão: 4x + 2 - 4x", answer: "2" },
  { question: "Resolva a equação para y: 3(y + 4) = 21", answer: "3" },
  { question: "Calcule a área de um quadrado com lado de comprimento 5 unidades.", answer: "25" },
  { question: "Qual é o resultado de 14 ÷ 7?", answer: "2" },
  { question: "Simplifique a fração: 15/25", answer: "3/5" },
  { question: "Calcule o perímetro de um retângulo com lados de comprimento 6 unidades e largura 8 unidades.", answer: "28" },
  { question: "Resolva a equação para x: 2(x + 3) = 16", answer: "5" },
  { question: "Qual é o volume de uma caixa com comprimento 5 unidades, largura 4 unidades e altura 7 unidades?", answer: "140" },
  { question: "Qual é o resultado de 5 + 3²?", answer: "14" },
  { question: "Simplifique a expressão: 2y - 3y + 6y", answer: "5y" },
  { question: "Resolva a equação para z: 5z - 10 = 15", answer: "5" },
  { question: "Calcule a área de um triângulo com base 8 unidades e altura 6 unidades.", answer: "24" },
  { question: "Qual é o triplo de 9?", answer: "27" },
  { question: "Simplifique a expressão: 7p - (2p + 4p)", answer: "p" },
  { question: "Resolva a equação para x: 3x - 6 = 12", answer: "6" },
  { question: "Calcule o volume de um paralelepípedo com comprimento 3 unidades, largura 5 unidades e altura 7 unidades.", answer: "105" },
  { question: "Qual é a soma dos ângulos internos de um hexágono?", answer: "720" },
  { question: "Simplifique a expressão: 4q - 2q + 5q", answer: "7q" },
  { question: "Resolva a equação para y: 2y/3 = 8", answer: "12" },
  { question: "Qual é o resultado de 20 - 8?", answer: "12" },
  { question: "Simplifique a expressão: 6r - 3r + 2r", answer: "5r" },
  { question: "Resolva a equação para x: 2(x - 4) = 14", answer: "9" },
  { question: "Calcule a área de um retângulo com lados de comprimento 10 unidades e largura 3 unidades.", answer: "30" },
  { question: "Qual é o resultado de 24 ÷ 4?", answer: "6" },
  { question: "Simplifique a fração: 16/24", answer: "2/3" },
  { question: "Calcule o perímetro de um quadrado com lado de comprimento 12 unidades.", answer: "48" },
{ question: "Resolva a equação para x: 4x - 9 = 15", answer: "6" },
{ question: "Qual é o resultado de 6²?", answer: "36" },
{ question: "Simplifique a expressão: 3m + 2m - m", answer: "4m" },
{ question: "Resolva a equação para a: 3(a - 1) = 15", answer: "6" },

];

let questions = [...originalQuestions];


function rollDice() {
  return Math.floor(Math.random() * 6) + 1 ;
}
// Select the roll dice button
const rollDiceButton = document.getElementById("roll-dice");

// Initial and final positions of the ladders
const ladders = {
  7: 16,
  14: 32,
  27: 55,
  41: 85,
  49: 67,
  60: 80,
  66: 77,
  82: 91,
};

// Initial and final positions of the snakes
const snakes = {
  43: 2,
  34: 25,
  38: 20,
  65: 47,
  86: 53,
  99: 8,
};

// Function to move the player
function movePlayer(player, steps) {
  // Move the player to the next position
  player.position += steps;
  if (player.position >= 100) {
    player.position = 100;
    Swal.fire({
      title: 'Parabéns!',
      text: `${player.name} ganhou o jogo!`,
      icon: 'success'
    });
    rollDiceButton.disabled = true;
  }
  renderPlayers();

  // Check if the player has reached a ladder or snake
  if (ladders.hasOwnProperty(player.position)) {
    player.position = ladders[player.position];
    Swal.fire({
      title: 'Subiu a escada!',
      text: `${player.name} subiu a escada para a casa ${player.position}!`,
      icon: 'success'
    });
  } else if (snakes.hasOwnProperty(player.position)) {
    player.position = snakes[player.position];
    Swal.fire({
      title: 'Caiu na cobra!',
      text: `${player.name} caiu na cobra para a casa ${player.position}!`,
      icon: 'error'
    });
  }

  // Check if the player has reached square 100
  if (player.position >= 100) {
    Swal.fire({
      title: 'Parabéns!',
      text: `${player.name} ganhou o jogo!`,
      icon: 'success'
    });
    rollDiceButton.disabled = true;
  }

  renderPlayers(); // Update the player's position in the UI
}


// Function to play the round
function playRound(player) {

  if (questions.length === 0) {
    // Reset the questions array to the original questions
    questions = [...originalQuestions];
  }
  // Ask a question to the player
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  questions.splice(randomIndex, 1);

  Swal.fire({
    title: `${player.name}, ${randomQuestion.question}`,
    input: 'text',
    inputPlaceholder: 'Your answer',
    allowOutsideClick: false
  }).then((result) => {
    if (result.value.toLowerCase() === randomQuestion.answer.toLowerCase()) {
      Swal.fire(
        'Resposta correta!',
        'Sua resposta está correta!',
        'success'
      ).then(() => {
        const steps = rollDice();
        dice.classList.add("show"); // Show the dice
        // Roll the dice for the current player
        document.getElementById("dice-number").textContent = steps;

        // Reset the animation
        document.getElementById("dice").style.animation = "none";
        setTimeout(function () {
          document.getElementById("dice").style.animation = "";
        }, 10);
        setTimeout(() => {
          dice.classList.remove("show");
        }, 2000);

        setTimeout(() => {
          movePlayer(player, steps);
        }, 2000);

        renderPlayers();
      });
    } else {
      Swal.fire(
        'Resposta incorreta!',
        'Sua resposta está incorreta.',
        'error'
      );
    }
  });
}

// Function to render the players
// Função para renderizar os jogadores
// Função para renderizar os jogadores com animação
function renderPlayers() {
  // Seleciona os elementos dos jogadores
  const player1Element = document.getElementById("player1");
  const player2Element = document.getElementById("player2");

  // Adiciona a classe de animação aos jogadores
  player1Element.classList.add("player-animation");
  player2Element.classList.add("player-animation");

  // Obtem os elementos dos quadrados com base na posição dos jogadores
  const square1Element = document.getElementById(`square${player1Data.position}`);
  const square2Element = document.getElementById(`square${player2Data.position}`);

  // Calcula o centro do quadrado para player1
  const square1Rect = square1Element.getBoundingClientRect();
  player1Element.style.position = 'absolute';
  player1Element.style.left = `${square1Rect.left + window.scrollX + (square1Rect.width - player1Element.offsetWidth) / 2}px`;
  player1Element.style.top = `${square1Rect.top + window.scrollY + (square1Rect.height - player1Element.offsetHeight) / 2}px`;

  // Calcula o centro do quadrado para player2
  const square2Rect = square2Element.getBoundingClientRect();
  player2Element.style.position = 'absolute';
  player2Element.style.left = `${square2Rect.left + window.scrollX + (square2Rect.width - player2Element.offsetWidth) / 2}px`;
  player2Element.style.top = `${square2Rect.top + window.scrollY + (square2Rect.height - player2Element.offsetHeight) / 2}px`;
}



let isPlayer1Turn = true; // Start with player 1

rollDiceButton.addEventListener("click", () => {
  if (isPlayer1Turn) {
    // Player 1 rolls the dice
    playRound(player1Data);
  } else {
    // Player 2 rolls the dice
    playRound(player2Data);
  }

  // Switch turn
  isPlayer1Turn = !isPlayer1Turn;
});

// Initially render the players
renderPlayers();
