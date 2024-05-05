let currentRound = 0;
let totalRounds = 0;

// Función para tirar el dado
function rollDice() {
  currentRound++;
  if (currentRound > totalRounds) {
    document.getElementById("rollButton").disabled = true;
    document.getElementById("resultMessage").style.display = "block";
    
    let winnerMessage;
    if (player1.score > player2.score) {
        winnerMessage = player1.name + " ganó con " + player1.score + " victorias.";
    } else if (player2.score > player1.score) {
        winnerMessage = player2.name + " ganó con " + player2.score + " victorias.";
    } else {
        winnerMessage = "¡Empataron! (qué garrón 🥲)";
    }
    
    document.getElementById("winnerMessage").innerText = winnerMessage;
    return;
}

  // Esto hace que salga un número random del 1-6 para el jugador 1
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;

  // Esto hace que agarre un dado random para el jugador 1
  const randomDice1 = "dice" + randomNumber1 + ".png";

  // Con la función anterior generás el nombre del archivo (imagen del dado) que usas acá
  const randomImageSource1 = "./images/dice/" + randomDice1;

  // Randomiza el dado del jugador 1
  const image1 = document.querySelectorAll(".img1")[0]; // selecciona el dado del jugador 1

  // Establece la imagen random para el jugador 1
  image1.setAttribute("src", randomImageSource1);

  // Esto hace lo mismo para el jugador 2
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const randomDice2 = "./images/dice/dice" + randomNumber2 + ".png";
  const image2 = document.querySelectorAll(".img2")[0]; // selecciona el dado del jugador 2
  image2.setAttribute("src", randomDice2);

  // Esto te dice cuál de los dos jugadores gana
  if (randomNumber1 > randomNumber2) {
    document.getElementById("player1Name").innerHTML = player1.name + " 😎";
    document.getElementById("player2Name").innerHTML = player2.name;
    document.querySelectorAll("h2")[0].innerHTML = "😎 " + player1.name + " gana";
    document.querySelectorAll("h2")[0].style.color = "#fefae0";
    document.body.style.backgroundColor = "#14213d";
    player1.score++;
  } else if (randomNumber2 > randomNumber1) {
    document.getElementById("player1Name").innerHTML = player1.name;
    document.getElementById("player2Name").innerHTML = player2.name + " 😎";
    document.querySelectorAll("h2")[0].innerHTML = player2.name + " gana 😎";
    document.querySelectorAll("h2")[0].style.color = "#ffddd2";
    document.body.style.backgroundColor = "#3d405b";
    player2.score++;
  } else {
    document.querySelectorAll("h2")[0].innerHTML = "¡Empate! 🤝";
    document.body.style.backgroundColor = "#393E46";
  }

  // Mostrar el contador de victorias actualizado
  document.getElementById("player1Wins").innerHTML = "Victorias: " + player1.score;
  document.getElementById("player2Wins").innerHTML = "Victorias: " + player2.score;

  // Actualizar los resultados en el archivo JSON
  updateResults();
}

// Función para reiniciar todo todo todo el juego
function restartGame() {
  currentRound = 0;
  totalRounds = 0;
  player1.score = 0;
  player2.score = 0;
  document.getElementById("roundsInput").value = 1;
  document.getElementById("player1NameInput").value = "";
  document.getElementById("player2NameInput").value = "";
  document.getElementById("player1Name").innerHTML = "Jugador 1";
  document.getElementById("player2Name").innerHTML = "Jugador 2";
  document.getElementById("player1Wins").innerHTML = "Victorias: 0";
  document.getElementById("player2Wins").innerHTML = "Victorias: 0";
  document.getElementById("resultMessage").style.display = "none";
  document.getElementById("rollButton").disabled = false;
  document.getElementById("startButton").style.display = "block";
  document.getElementById("rollButton").style.display = "none";
  document.getElementById("restartButton").style.display = "block";
  document.querySelectorAll("h2")[0].innerHTML = "Tirar Dados";
  document.body.style.backgroundColor = "#393E46";
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
  totalRounds = parseInt(document.getElementById("roundsInput").value);
  currentRound = 0;

  const player1Name = document.getElementById("player1NameInput").value;
  const player2Name = document.getElementById("player2NameInput").value;

  if (player1Name && player2Name) {
    player1.name = player1Name;
    player2.name = player2Name;

    document.getElementById("player1Name").innerHTML = player1.name;
    document.getElementById("player2Name").innerHTML = player2.name;

    document.getElementById("startButton").style.display = "none";
    document.getElementById("rollButton").style.display = "block";
    document.getElementById("restartButton").style.display = "block"; // Agregamos esto para mostrar el botón de reiniciar
  } else {
    alert("Por favor, ingresá los nombres de ambos jugadores.");
  }
});

const rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", rollDice);

// Event listener para el botón de reinicio
document.getElementById("restartButton").addEventListener("click", restartGame);