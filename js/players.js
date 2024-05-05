// Obtiene los nombres de los jugadores y sus resultados del archivo JSON
function getPlayersData() {
    return fetch('../json/players.json')
      .then(response => response.json())
      .then(data => ({
        player1: {
          name: data.players.player1,
          score: data.results.player1Wins
        },
        player2: {
          name: data.players.player2,
          score: data.results.player2Wins
        }
      }));
  }
  
  // Cargar nombres de los jugadores, puntuaciones y mostrar el historial de victorias
  let player1 = { name: "", score: 0 };
  let player2 = { name: "", score: 0 };
  
  getPlayersData().then(playersData => {
    player1 = playersData.player1;
    player2 = playersData.player2;
  
    document.getElementById("player1Name").innerHTML = player1.name;
    document.getElementById("player2Name").innerHTML = player2.name;
  
    document.getElementById("player1Wins").innerHTML = "Victorias: " + player1.score;
    document.getElementById("player2Wins").innerHTML = "Victorias: " + player2.score;
  });
  