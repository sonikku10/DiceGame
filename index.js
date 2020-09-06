var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice2.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1-6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1-6.png

var image1 = document.querySelectorAll("img")[0];  //player1 dice
var image2 = document.querySelectorAll("img")[1];  //player2 dice

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!"
}




/*
if (randomNumber1 == 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

if (randomNumber2 == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!"
}
*/
