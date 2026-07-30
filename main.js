/* ===== Iona Coffee Shop - JavaScript ===== */
/* This one file is linked on every page. Each feature first checks that
   the element it needs is on the current page, so nothing errors. */

// 1) Welcome message (Home page)
var welcome = document.getElementById("welcome");
if (welcome) {
  welcome.textContent = "Welcome to the Iona Coffee Shop!";
}

// 2) Today's special (Home page) - array + button
var specials = ["Maple Latte", "Cold Brew", "Vanilla Chai", "Honey Oat Latte"];
function showSpecial() {
  var pick = specials[Math.floor(Math.random() * specials.length)];
  document.getElementById("special").textContent = "Today's special: " + pick;
}

// 3) Image slideshow (Home page) - array + Next/Previous
var photos = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
var current = 0;
function nextPhoto() {
  current = (current + 1) % photos.length;      // wraps back to the first
  document.getElementById("slide").src = photos[current];
}
function prevPhoto() {
  current = (current - 1 + photos.length) % photos.length;
  document.getElementById("slide").src = photos[current];
}

// 4) Contact form validation (Contact page)
function checkForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "") {
    alert("Please enter your name.");
    return false;                 // stops the form from submitting
  }
  if (email === "" || email.indexOf("@") === -1) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Thank you, " + name + "! Your message is on its way.");
  return true;
}
