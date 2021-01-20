/* Global Variables */

const amiibo_url = 'https://www.amiiboapi.com/api/'
const games_endpoint = `${amiibo_url}gameseries`
const amiibos_endpoint = `${amiibo_url}amiibo/?gameseries=`

async function displayData() {
  // Request to the Amiibo API gameseries endpoint
  const response = await fetch(games_endpoint)
  const data = await response.json()

  // create new array with all games (some are repeats)
  const onlyNames = []
  data.amiibo.forEach(game => {
    onlyNames.push(game.name)
  });
  // Filter throught the onlyNames array and get rid of repeats
  const uniqueNames = [...new Set(onlyNames)]

 


  // create select
  const gameList = document.createElement('select')
  gameList.setAttribute('id','games')
  gameList.setAttribute('name','games')
  // add options to select
  uniqueNames.forEach(game => {
    gameList.innerHTML += `<option value="${game}">${game}</option>`
  })
  // add select to the form
  document.querySelector('.games').appendChild(gameList)
  // add a submit button to the form
  const submitButton = document.createElement('input')
  submitButton.setAttribute('type', 'submit')
  document.querySelector('.games').appendChild(submitButton)


  document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault()
    const gameName = document.querySelector('#games').value
    displayAmiibos (gameName)
  })


}


async function displayAmiibos (gameName) {
  // Request to the Amiibo API with a query
  const queryUrl = amiibos_endpoint + gameName
  const response = await fetch(queryUrl)
  const data = await response.json()

  console.log(data)
  document.querySelector('.amiibos').innerHTML = ""
  // Log every amiibo of the selected game
  data.amiibo.forEach(amiibo => {
    document.querySelector('.amiibos').innerHTML += 
    `
    <ul class="amiibo_item">
      <li><span>Amiibo Series: </span>${amiibo.amiiboSeries}</li>
      <li><span>Character: </span>${amiibo.character}</li>
      <li><span>Game Series: </span>${amiibo.gameSeries}</li>
      <li><img src="${amiibo.image}" alt="${amiibo.name}"></li>
      <li><span>Name: </span>${amiibo.name}</li>
      <li><span>Type: </span>${amiibo.type}</li>
    </ul>
    `
  })
}

displayData()