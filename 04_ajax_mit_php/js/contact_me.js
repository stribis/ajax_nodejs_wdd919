
document.querySelector('form').addEventListener('submit', function (e){
  // Stops the site from reloading
  e.preventDefault()

  const fd = new FormData(document.querySelector('form'))

  fetch('contact_me.php', {
    method: 'POST',
    body: fd
  })
  .then( response => {
    response.json()
    .then( data => { 
      document.querySelector('.results_container').innerText = data[1]
    })
  })
} ) 