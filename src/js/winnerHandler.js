function hasWinner() {
    let pannelValue = p.map(e => e.innerHTML);

    for (i = 0,  j = 1,  k = 2; i < 7, j < 8, k < 9; i+=3, j+=3, k+=3) 
        if (verifyIfInPannelsHasWinner([pannelValue[i], pannelValue[j], pannelValue[k]])) 
            return win([i, j, k]);

    for (i = 0,  j = 3,  k = 6; i < 2, j < 6, k < 9; i++, j++, k++) 
        if (verifyIfInPannelsHasWinner([pannelValue[i], pannelValue[j], pannelValue[k]])) 
            return win([i, j, k]);    
        
    if (verifyIfInPannelsHasWinner([pannelValue[0], pannelValue[4], pannelValue[8]])) 
        return win([0, 4, 8]); 
           
    if (verifyIfInPannelsHasWinner([pannelValue[2], pannelValue[4], pannelValue[6]])) 
        return win([2, 4, 6]);    
}

function win(pannels) {
    pannels.map(e => p[e].classList.add('winner'));
    
    gameStatus.classList.add('pointer');
    gameStatus.addEventListener('click', reset);
    gameStatus.innerHTML = `${player} wins! <ins>Click here to reset...</ins>`;
    
    score.set(player, score.get(player) + 1); 
    gameScore.innerHTML = `X: ${score.get('X')} - O: ${score.get('O')}`;
    
    return true;
}

function noWinner() {
    p.map(e => e.classList.add('no-winner'));
    
    gameStatus.classList.add('pointer');
    gameStatus.innerHTML = 'Click here to reset...';
    gameStatus.addEventListener('click', reset);
}

function verifyIfInPannelsHasWinner(pannels) {
    return pannelsIsNotEmpty(pannels) && pannelsIsEquals(pannels)
}

function pannelsIsNotEmpty(pannels) {
    return !pannels[0] == false && !pannels[1] == false && !pannels[2] == false;
}

function pannelsIsEquals(pannels) {
    return pannels[0] === pannels[1] && pannels[1] === pannels[2];
}