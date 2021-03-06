const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
async function getPeopleInSpace(url) {
  const peopleResponse = await fetch(url);
  const peopleJSON = await peopleResponse.json();

  const profiles = peopleJSON.people.map(async (person) => {
    const craft = person.craft;
    const profileResponse = await fetch(wikiUrl + person.name); // making a call to the wikipedia API
    const profileJSON = await profileResponse.json(); // parsing the response to JSON file

    return {...profileJSON, craft}; // combining all the profile in profileJSON and the spacestation from craft
  });

  return Promise.all(profiles)
}


// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    const img_src = (person.thumbnail && person.thumbnail.source) ? person.thumbnail.source : "";
    section.innerHTML = `
      <img src=${img_src}>
      <span>${person.craft}</span>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
  });
}

btn.addEventListener('click', async (event) => {
  event.target.textContent = "Loading...";
  
  const astros = await getPeopleInSpace(astrosUrl);
  generateHTML(astros);

  event.target.remove();

});