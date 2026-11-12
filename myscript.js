/* console.log("Hey there! What's up?");
console.log("I love Javascript!");
let fname = "Georgia";
let favColor = "purple";
let hometown = "Athens, Greece";
console.log("My name is " + fname + ", my favorite color is " + favColor + "and I am from " + hometown);

let favSumDest = "Ikaria";
let favHobby = "Walking";
document.write("My favorite summer destination is " + favSumDest + " and I really love " + favHobby);

document.write("Hello there!");

let userName = window.prompt("Enter your name:");
document.write(userName);

let userName = window.prompt("Enter your name:");
let favteam = window.prompt("Enter your favorite team:");
document.write("Hello " + userName + "! It's great to meet a fan of the " + favteam);

let userNum = parseFloat(window.prompt("Enter a number"));
document.write(userNum);

let userNum = Number(window.prompt("Enter a number"));
let newNum = userNum + 5;
document.write(newNum)

let birthYear = Number(window.prompt("Enter the year you were born:"));
let age = 2026-birthYear;
document.write("You are " + age);


let billAmount = Number(window.prompt("Enter the amount of the bill"));
let tax = billAmount * 0.08;
let tip = billAmount * 0.18;
let total = billAmount + tax + tip;
document.write("Your total is " + total);

let dollars = Number(window.prompt("Enter the dollar amount:"));
let euros = dollars * 0.89;
document.write("The equivalent in euros is " + euros);

let miles = Number(window.prompt("Enter miles you run this morning:"));
let kilometers = miles * 1.60934;
document.write("The equivalent in kilometers is " + kilometers);

let age = Number(window.prompt("Enter your age:"));
if (age <= 18){
    document.write("You are 18 or younger!");
} else {
    document.write("You are older than 18");
} 

let place = Number(window.prompt("Enter your place in the competition:"));
if (place === 1) {
    document.write("You got the Gold Medal!");
} else if (place === 2) {
    document.write("You got the Silver Medal!");
} else if (place === 3) {
    document.write("You received the Bronze!");
} else {
    document.write("I am sorry! No medal for you!");
} 

let age = Number(window.prompt("Enter your age:"));
if (age === 18) {
    document.write("You are 18!!");
} else if (age > 18){
    document.write("You are older than 18!");
} else {
    document.write("You are younger than 18");
} 

document.getElementById("changetxt").textContent = "fourth";

document.getElementById("cat").textContent = "This is a dog!";
document.getElementById("changepic").src = "images/dog.png";

let fruits = ["apple", "banana", "orange", "pear"];
document.write("My favorite fruit is " + fruits[1] + "<br>");
document.write(fruits.length + "<br>");
document.write(fruits);

function greet() {
let name = window.prompt("Enter your name:");
document.getElementById("welcome").textContent = "Welcome to my site " + name;
}

function change(){
    document.getElementById("cat").textContent = "This is a dog";
    document.getElementById("changepic").src = "images/dog.png";
}
*/

let images = ["images/latte.jpg","images/cold_brew.jpg","images/pastries.jpg"];
let currentImage = 0; 

function nextImage(){
    currentImage = currentImage + 1;  // move forward
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    document.getElementById("slideshow").src= images[currentImage];
}

function previousImage(){
    currentImage = currentImage -1; // move backwards
    if (currentImage < 0) {             //if it reaches the first image
        currentImage = images.length -1;  // jumps to the last image
    }
     document.getElementById("slideshow").src= images[currentImage];
}