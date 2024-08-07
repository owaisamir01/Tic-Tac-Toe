console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

// Preload audio elements
music.preload = "auto";
audioturn.preload = "auto";
gameover.preload = "auto";

let turn = 'X';
let isgameover = false;

// Function to change turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

// Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON";
            isgameover = true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "250px";
            gameover.play();
        }
    });
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
})

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    isgameover = false;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    music.play();
})

// User interaction to enable audio on page load
window.addEventListener('click', () => {
    music.play();
}, { once: true });
