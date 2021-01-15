

document.querySelector('button').addEventListener('click', function (e){ 
  e.preventDefault()

  const myInput = document.querySelector('input').value

  fetch(`https://api.unsplash.com/search/photos/?client_id=6b99c44af3b5ecf26972b41b9e4651ec31dfc4a8c13be8a8ca48eb34d8c4f8da&query=${myInput}`)
  .then(response => {
    response.json()
    .then( data => {
      console.log(data)
      // Reset Container content
      resetContent()
      // Insert images into gallery
      populateGallery(data)
    })
  })

})


function resetContent () {
  document.querySelector('.container').innerHTML = ''
}

function populateGallery (data) {
  for(let i = 0; i < 10; i++){
    const template = `<img src="${data.results[i].urls.small}" alt="${data.results[i].alt_description}">`
    const imageDiv = document.createElement('div')
    imageDiv.innerHTML = template

    document.querySelector('.container').appendChild(imageDiv)
  }
} 