/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Ryan Lee';
var currentYear = 2024;
let profilePicture = "images/rsz_pic_ryan.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("main picture img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", 'Profile image of ${fullName}');

/* Step 5 - Array */
const favoriteFood = ["Musubi", "Burritos", "Sandwiches"];
foodElement.textContent = favoriteFood.join(", ");

const newFavoriteFood = "Stir Fry";
favoriteFood.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;