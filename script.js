


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
const questions = [
  { question: "Qual é o resultado de 3 x 5?", answer: "15" },
  { question: "Simplifique a expressão: 2x + 4 - 3x", answer: "x + 4" },
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
  { question: "Calcule a área de um círculo com raio 7 unidades (use π = 3.14).", answer: "153.86" },
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
  { question: "Calcule a área de um triângulo equilátero com lado de comprimento 9 unidades. (Utilize raiz de 3 = 1,7)", answer: "34.42" },
  { question: "Simplifique a expressão: 5p - 2p + 8p", answer: "11p" },
  { question: "Resolva a equação para x: 4(x + 2) = 36", answer: "7" },
  { question: "Calcule a área de um círculo com raio 5 unidades (use π = 3.14).", answer: "78.5" },
  { question: "Qual é o resultado de 3³?", answer: "27" },
  { question: "Simplifique a expressão: 6d + 2d - 3d", answer: "5d" },
  { question: "Resolva a equação para y: 3y/2 = 9", answer: "6" },
  { question: "Calcule o volume de uma esfera com raio 4 unidades (use π = 3.14).", answer: "268.08" },
  { question: "Qual é a soma dos ângulos internos de um quadrado?", answer: "360" },
  { question: "Simplifique a expressão: 4r - (r + 2r)", answer: "r" },
  { question: "Resolva a equação para z: 5z - 12 = 8", answer: "4" },
  { question: "Calcule a área de um trapézio com bases de comprimento 6 e 8 unidades e altura 5 unidades.", answer: "35" },
  { question: "Qual é o resultado de 14 ÷ 2?", answer: "7" },
  { question: "Simplifique a fração: 10/15", answer: "2/3" },
  { question: "Calcule o perímetro de um círculo com raio 6 unidades (use π = 3.14).", answer: "37.68" },
  { question: "Resolva a equação para x: 2x - 5 = 11", answer: "8" },
  { question: "Qual é o resultado de 2⁴?", answer: "16" },
  { question: "Simplifique a expressão: 7a - 3a + 6a", answer: "10a" },
  { question: "Resolva a equação para b: 2(b/3) = 5", answer: "7.5" },
  { question: "Calcule a área de um pentágono regular com lado de comprimento 4 unidades.", answer: "6.88191" },
  { question: "Qual é o resultado de 16 x 3?", answer: "48" },
  { question: "Simplifique a expressão: 2q + 5q - 3q", answer: "4q" },
  { question: "Resolva a equação para x: 3(x - 4) = 21", answer: "11" },
  { question: "Calcule a área de um retângulo com lados de comprimento 15 unidades e largura 8 unidades.", answer: "120" },
  { question: "Qual é o resultado de 10 + 2²?", answer: "14" },
  { question: "Simplifique a expressão: 8e - (3e - 2e)", answer: "7e" },
  { question: "Resolva a equação para y: 4y/2 = 10", answer: "5" },
  { question: "Calcule o volume de um cilindro com raio 3 unidades e altura 10 unidades (use π = 3.14).", answer: "282.6" },
  { question: "Qual é a soma dos ângulos internos de um pentágono?", answer: "540" },
  { question: "Simplifique a expressão: 6m - 4m + 2m", answer: "6m" },
  { question: "Resolva a equação para z: 2z + 8 = 16", answer: "4" },
  { question: "Calcule a área de um círculo com raio 9 unidades (use π = 3.14).", answer: "254.34" },
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
  { question: "Se um círculo tem raio 10 unidades, qual é sua circunferência? (use π = 3.14)", answer: "62.8" },
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
  { question: "Calcule a área de um círculo com raio 6 unidades (use π = 3.14).", answer: "113.04" },
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
  { question: "Calcule a área de um triângulo equilátero com lado de comprimento 7 unidades. (Utilize raiz de 3 = 1,7) ", answer: "20.82" },
  { question: "Calcule a área de um hexágono regular com lado de comprimento 6 unidades. (Utilize raiz de 3 = 1,7) ", answer: "91.80" },
];


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

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
// Function to play the round
function playRound(player) {
  // Ask a question to the player
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  Swal.fire({
    title: `${player.name}, ${randomQuestion.question}`,
    input: 'text',
    inputPlaceholder: 'Your answer'
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
function renderPlayers() {
  // Select the HTML elements of the players
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  // Set the position of the players based on the position of the houses
  const squareSize = 100;
  const boardSize = 10;
  const player1Position = boardSize - Math.floor((player1Data.position - 1) / boardSize) - 1;
  const player2Position = boardSize - Math.floor((player2Data.position - 1) / boardSize) - 1;
  const player1X = ((player1Data.position - 1) % boardSize) * squareSize + squareSize / 2;
  const player2X = ((player2Data.position - 1) % boardSize) * squareSize + squareSize / 2;
  const player1Y = player1Position * squareSize + squareSize / 2;
  const player2Y = player2Position * squareSize + squareSize / 2;

  // Set the position of the players in CSS
  player1.style.top = `${player1Y}px`;
  player1.style.left = `${player1X}px`;
  player2.style.top = `${player2Y}px`;
  player2.style.left = `${player2X}px`;
}

// Select the roll dice button
const rollDiceButton = document.getElementById("roll-dice");

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
