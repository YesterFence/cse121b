/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let results = null;
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => 
{
    templeData.forEach(temple => 
    {
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
    const getTemples = async () => {
        try {
            const response = await fetch(url);
            const templeData = await response.json();
            console.log(templeData); // Log the fetched data to the console
            displayTemples(templeData);
        } catch (error) {
            console.error('Error fetching temple data:', error);
        }
    };
};

/* reset Function */
const reset = () => 
{
    templesElement.innerHTML = "";
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;

        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;

        case 'older':
            const olderTemples = temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case 'all':
            displayTemples(temples);
            break;

    }
}

getTemples();

/* Event Listener */
const filteredElement = document.getElementById('filtered');

filteredElement.addEventListener('change', () => 
{
    filterTemples(templeList);
});