const action = (event) => {
    let t = event.target;
    
    gameStatus.innerHTML = `Current player: ${player}`;
    
    let currentPlayer = switchPlayer();
    t.innerHTML = currentPlayer;
    
    if(currentMove >= 4)
        if (hasWinner()) blockPannel();
    
    if(currentMove == 9)
        noWinner()
    
    t.removeEventListener('click', action);
}

function switchPlayer() {
    player = ((currentMove % 2) == 0) ? 'X': 'O';
    currentMove++
    return player;
}
