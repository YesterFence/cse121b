/* LESSON 3 - Programming Tasks */

/* Profile Object  */
var myProfile = {
    name: "Ryan Lee",
    photo: "images/rsz_pic_ryan.jpg",
    favoriteFoods: ["Musubi", "Burritos", "Stir Fry"],
    hobbies: ["Rubix Cube", "Hiking", "Cooking"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push
({
    place: "Seattle",
    length: "24 years"
});

myProfile.placesLived.push
({
    place: "Salvador",
    length: "2 years"
});

myProfile.placesLived.push
({
    place: "Rexburg",
    length: "2 years"
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
var placesLivedList = document.querySelector("#places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});