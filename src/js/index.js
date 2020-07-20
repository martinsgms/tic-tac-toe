const $ = document.querySelector.bind(document);

const p = [$('#panel-0'), $('#panel-1'), $('#panel-2'),
           $('#panel-3'), $('#panel-4'), $('#panel-5'),
           $('#panel-6'), $('#panel-7'), $('#panel-8')
          ];

var gameStatus = $('#game-status');
var gameScore = $('#game-scoreboard');
var score = new Map([['X', 0], ['O', 0]]);
var currentMove;
var player;

window.onload = () => {
    setUpInitialState();
}
