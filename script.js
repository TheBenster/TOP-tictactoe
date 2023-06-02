let container = document.querySelector('.container');
let modal = document.getElementById('nameForm');
let player1input = document.getElementById('player1Name');
let player2input = document.getElementById('player2Name');
let submit = document.querySelector('.submit');
let retry = document.querySelector('.retrying')

submit.addEventListener('click', ()=>{
    modal.style.display = 'none'
    container.style.display = 'grid'
    player1Name = player1input.value;
    player2Name = player2input.value;
    console.log(player1Name)
})

const gameBoard = (() => {
  let boardArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  for (i = 0; i < boardArray.length; i++) {
    let board = boardArray[i];
    for (_ = 0; _ < board.length; _++) {
      let block = document.createElement('div')
      block.classList.add('block')
      container.appendChild(block)
      block.setAttribute('id', 'cell ' + board[_])

    }
  }
})();

const Players = (name) => {
  const getScore = () => score;
  const getPlayerTurn = () => playerTurn;
}

const Game = () => {
  let player1Turn = true;
  let player2Turn = false;
  let blocks = document.querySelectorAll('.block');
  let selectedCells = [];

  const winningPatterns = [
    ['cell 1', 'cell 2', 'cell 3'],     // Top row
    ['cell 4', 'cell 5', 'cell 6'],     // Middle row
    ['cell 7', 'cell 8', 'cell 9'],     // Bottom row
    ['cell 1', 'cell 4', 'cell 7'],     // Left column
    ['cell 2', 'cell 5', 'cell 8'],     // Middle column
    ['cell 3', 'cell 6', 'cell 9'],     // Right column
    ['cell 1', 'cell 5', 'cell 9'],     // Top-left to bottom-right diagonal
    ['cell 3', 'cell 5', 'cell 7']      // Top-right to bottom-left diagonal
  ];

  const checkWin = (playerSymbol) => {
    for (let pattern of winningPatterns) {
      let hasWon = true;
      for (let cellId of pattern) {
        if (!selectedCells.includes(cellId) || document.getElementById(cellId).dataset.symbol !== playerSymbol) {
          hasWon = false;
          break;
        }
      }
      if (hasWon) {
        return true;
      }
    }
    return false;
  }
  

  blocks.forEach((block) => {
    let winnerPlayer
    block.addEventListener('click', (event) => {
      const clickedCell = event.target.id;
      if (selectedCells.includes(clickedCell)) {
        console.log('Cell already selected!');
        return;
      }
      selectedCells.push(clickedCell);

      let playerSymbol;
      if (player1Turn) {
        block.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
        playerSymbol = 'X';
        player1Turn = false;
        player2Turn = true;
      } else if (player2Turn) {
        block.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
        playerSymbol = 'O';
        player1Turn = true;
        player2Turn = false;
      }
      

      block.dataset.symbol = playerSymbol;
      
      if (checkWin(playerSymbol)) {
        if(playerSymbol == 'X'){
            winnerPlayer = player1Name;
        }else if(playerSymbol == 'O'){
            winnerPlayer = player2Name
        }
        console.log(`${winnerPlayer},`, playerSymbol, 'wins!');
        let btn = document.createElement('btn')
        btn.textContent = 'Retry?'
        btn.classList.add('retry')
        retry.appendChild(btn)

        btn.addEventListener('click', document.location.reload())
      }
    })
  })
}

Game();
