console.log("Welcome to tic-tac-toe");

let farq = new Audio("farq.mp3");
let Audioturn = new Audio("turn.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Create an Audio object and specify the source (URL of the audio file)
let music = new Audio("farq.mp3");

// Find the button element in your HTML for toggling music
let playButton = document.getElementById("sound"); // Replace "sound" with your button's ID

// Add a click event listener to the button to toggle music
playButton.addEventListener("click", () => {
  if (music.paused) {
    music.play()
      .then(() => {
        console.log('Music is playing');
      })
      .catch((error) => {
        console.error('Error playing music:', error);
      });
  } else {
    music.pause();
    console.log('Music paused');
  }
});

// Function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.querySelectorAll('.boxtext');
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
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
      gameover.play();
      isgameover = true;
      document.querySelector('.imgbox img').style.width = "400px"; // Select the img element correctly
    }
  });
};

// Get all the box elements
let boxes = document.querySelectorAll('.box');
boxes.forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '' && !isgameover) {
      boxtext.innerText = turn;
      turn = changeTurn();
      Audioturn.play();
      checkWin();
      if (!isgameover) {
        document.querySelector(".info").innerText = "Turn For " + turn;
      }
    }
  });
});

// Add an event listener to the reset button
let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll('.boxtext');
  boxtexts.forEach(boxtext => {
    boxtext.innerText = "";
  });
  document.querySelector('.info').innerText = "Turn For X";
  isgameover = false;
  document.querySelector('.imgbox img').style.width = "0"; // Select the img element correctly
});
