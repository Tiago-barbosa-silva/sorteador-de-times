



function sorteador() {
    const playersInput = document.getElementById("player").value.trim();
    const players = playersInput.split("\n").filter(player => player.trim() !== "");
    const numberPlayers = document.querySelector (".numberPlayers")

    // if (players.length === 0) {
    //     alert("Por favor, insira os nomes dos jogadores.");
    //     return;
    // } else if (players.length < 6) {
    //     alert("Por Favor, insira no minimo 6 Jogadores")
    // }


    if( numberPlayers.value === 0 || players.length < numberPlayers.value ){
        alert("Numero De Jogadores Incorreto")
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

    if (leftovers.length > 0) {
        outputDiv.innerHTML += `

        <div class="leftover">
          <h3>Jogadores Reservas:</h3>
          <p>${leftovers.join(", ")}</p>
        </div>

      `;
    }



    const body = document.querySelector("body")

    body.style.alignItems = "normal"
    body.style.marginTop = "20px"


}




