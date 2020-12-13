const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Make an AJAX request
function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

function getProfiles(json) {
  json.people.map( person => { // iterate through the people array using map function
    getJSON(wikiUrl + person.name, generateHTML); // making AJAX request to the wikipedia API and pass in the astronauts name & using generate HTML function to generate html code and append it
  })
}

// Generate the markup for each profile
function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  const img_src = (data.thumbnail && data.thumbnail.source) ? data.thumbnail.source : "";
  section.innerHTML = `
    <img src=${img_src}>
    <span>${data.craft}</span>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>
  `;
}

btn.addEventListener('click', (event) => {
  getJSON(astrosUrl, getProfiles);
  event.target.remove();
});