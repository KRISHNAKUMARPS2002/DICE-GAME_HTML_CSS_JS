// Generate a random number for Dice One
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomImgSource1 = "images/" + randomDiceImg1;

// Set the image source for Dice One
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource1);


// Generate a random number for Dice Two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

// Set the image source for Dice Two
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player1 Wins"
} if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆 Player2 Wins"
} else {
    document.querySelector("h1").innerHTML = "It's Draw 🤝"
}

document.getElementById("refreshButton").addEventListener("click", function() {
    // Reload the page
    location.reload();
  });
  
