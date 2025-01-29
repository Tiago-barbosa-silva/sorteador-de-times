



function sorteador() {
  const playersInput = document.getElementById("player").value.trim();
  const players = playersInput.split("\n").filter(player => player.trim() !== "");
  const numberPlayers = document.querySelector(".numberPlayers")




  if (players.length === 0 || players.length < numberPlayers.value ) {
    alert("Numero De Jogadores Incorreto")
    return;
  }else if ( numberPlayers.value == 0){
    alert("numero de equipes não selecionado")
    return;
  }

  const shuffledPlayers = players.sort(() => Math.random() - 0.5); // Embaralhar jogadores
  const teams = [];
  const teamSize = numberPlayers.value;

  // Dividir jogadores em times
  while (shuffledPlayers.length >= teamSize) {
    teams.push(shuffledPlayers.splice(0, teamSize));
  }

  // Jogadores que sobraram
  const leftovers = shuffledPlayers;

  // Exibir os resultados
  const outputDiv = document.getElementById("output");
  outputDiv.style.transform = "none"

  outputDiv.innerHTML = "";

  teams.forEach((team, index) => {
    outputDiv.innerHTML += `

        <div class="team">
          <h3>Time ${index + 1}</h3>
          <p>${team.join(" , ")} </p>
        </div>
      `;

  });

  const remainingPlayers = document.querySelector(".playerOver")
  remainingPlayers.style.transform = "none"

  let playersOver = ""

  if (leftovers.length > 0) {
    playersOver += `

        <div class="leftover">
          <h3>Jogadores Reservas:</h3>
          <p>${leftovers.join(", ")}</p>
        </div>

      `;

      remainingPlayers.innerHTML = playersOver
  }



  const body = document.querySelector("body")

  body.style.alignItems = "normal"
  body.style.marginTop = "20px"


}




