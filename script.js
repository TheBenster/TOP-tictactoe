let container = document.querySelector('.container');

const gameBoard = (() => {
    let boardArray = [
        ['X','X', 'X'],
        ['O', 'O', 'O'],
        ['X','O', 'X']
    ]
    for(i=0; i< boardArray.length; i++){
        let board = boardArray[i];
        for(_=0; _<board.length; _++){
            let block = document.createElement('div')
            block.classList.add('block')
            container.appendChild(block)
            // Adds the X!! saving this for when i actually incorporate logic.
            block.addEventListener('click', ()=>{
                block.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>'
                
            })
            // will add the O
            block.addEventListener('click', ()=>{
                block.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>'
            })
        }
    }
})();

const Players = (name)=>{
    const getScore = () => score;
    const getPlayerTurn = () => playerTurn;

}

const Game = () =>{

}