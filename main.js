let player1Score = 0;
let player2Score = 0;
let roundsLeft = 6;
const player1NameInput = document.getElementById('player1');
const player2NameInput = document.getElementById('player2');
let player1Name = '';
let player2Name = '';

function play(player1Choice) {
    if (!player1Name || !player2Name) {
        alert('Please enter both players\' names.');
        return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    const player2Choice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('rock').style.pointerEvents = 'none';
    document.getElementById('paper').style.pointerEvents = 'none';
    document.getElementById('scissors').style.pointerEvents = 'none';

    setTimeout(() => {
        document.getElementById('rock').style.pointerEvents = 'auto';
        document.getElementById('paper').style.pointerEvents = 'auto';
        document.getElementById('scissors').style.pointerEvents = 'auto';

        document.getElementById('result').innerText = `${player1Name} chose ${player1Choice}, ${player2Name} chose ${player2Choice}.`;

        if (player1Choice === player2Choice) {
            document.getElementById('result').innerText += " It's a tie!";
        } else if ((player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'scissors' && player2Choice === 'paper') ||
            (player1Choice === 'paper' && player2Choice === 'rock')) {
            document.getElementById('result').innerText += ` ${player1Name} wins!`;
            player1Score++;
        } else {
            document.getElementById('result').innerText += ` ${player2Name} wins!`;
            player2Score++;
        }

        document.getElementById('score').innerText = `Score: ${player1Name} - ${player1Score}, ${player2Name} - ${player2Score}`;

        roundsLeft--;

        if (roundsLeft === 0) {
            document.getElementById('gameData').style.display = 'table';
            document.querySelector('.options').innerHTML = '';
            displayGameData();
        }
    }, 1000);
}

function displayGameData() {
    const tableBody = document.querySelector('#gameData tbody');
    for (let i = 1; i <= 6; i++) {
        const rowData = document.createElement('tr');
        const player1Choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        const player2Choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        const result = determineResult(player1Choice, player2Choice);
        rowData.innerHTML = `<td>${i}</td><td>${player1Choice}</td><td>${player2Choice}</td><td>${result}</td>`;
        tableBody.appendChild(rowData);
    }
}

function determineResult(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "Tie";
    } else if ((player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')) {
        return player1Name;
    } else {
        return player2Name;
    }
}

function setPlayerNames() {
    player1Name = player1NameInput.value.trim();
    player2Name = player2NameInput.value.trim();
}

player1NameInput.addEventListener('input', setPlayerNames);
player2NameInput.addEventListener('input', setPlayerNames);