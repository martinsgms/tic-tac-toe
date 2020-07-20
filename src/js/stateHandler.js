function setUpInitialState() {
    currentMove = 0;
    player = 'O';

    gameStatus.innerHTML = 'Click any pannel to start';
    
    cleanPannel();

    for (let i = 0; i < p.length; i++) 
        p[i].addEventListener('click', action);
    
}

const reset = () => {
    setUpInitialState(); 
    gameStatus.classList.remove('pointer');
    gameStatus.removeEventListener('click', reset);
}

function cleanPannel() {
    p.map(e => {
        e.innerHTML = '';
        e.classList.remove('winner');
        e.classList.remove('no-winner');
    });
}

function blockPannel() {
    for (let i = 0; i < p.length; i++) 
        p[i].removeEventListener('click', action);
}