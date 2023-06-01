let container = document.querySelector('.container');

const gameBoard = (() => {
    let boardArray = [
        [1,2,3],
        [4, 5,6],
        [7,8,9]
    ]
    for(i=0; i< boardArray.length; i++){
        let board = boardArray[i];
        for(_=0; _<board.length; _++){
            let block = document.createElement('div')
            block.classList.add('block')
            container.appendChild(block)
            block.setAttribute('id', 'cell ' + board[_])
            
            }
    }
})();

const Players = (name)=>{
    const getScore = () => score;
    const getPlayerTurn = () => playerTurn;

}

const Game = () =>{
    let player1Turn = true;
    let player2Turn = false
    let blocks = document.querySelectorAll('.block')
    let selectedCells = [];

    blocks.forEach((block) =>{
        block.addEventListener('click', (event)=>{
                // add array for already selected cells, when a cell is clicked, push it to the array, and if it's noticed 
                //someone already clicked a selected cell, stop them somehow.
                let currentCell;
                

                const clickedCell = event.target.id;
                if(clickedCell == ""){
                    console.log('no')
                    return;
                }
                selectedCells.push(clickedCell)
                console.log(selectedCells)
                // finding out the exact location of an array to would help with the logic for winning the game.
                
            if(player1Turn){
                block.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>'
                player1Turn = false;
                player2Turn = true;
                
            }else if (player2Turn){
                block.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>'
                player1Turn = true;
                player2Turn = false;
            }

            selectedCells.forEach((cell)=>{
                console.log(cell)
            })
            
        })
    })
}

Game()
