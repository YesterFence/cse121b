/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const templesElement = templeData;
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => 
{
    templeData.forEach(temple => {
        const articleElement = document.createElement('article');
        const headingElement = document.createElement('h3');
        const imgElement = document.createElement('img');

        headingElement.textContent = temple.templeName;
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(headingElement);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch(url);
    const templeData = await response.jason();
    templeList = templeData;

    displayTemples(templeList);
};

/* reset Function */
const reset = () => 
{
    templesElement.innerHTML = "";
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    const filter = document.getElementsById('filtered').value;

    switch (filter)
}

getTemples();

/* Event Listener */
