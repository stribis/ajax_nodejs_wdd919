
document.querySelector('button').addEventListener('click', function (e) {
  e.preventDefault()

  // const data = {
  //   text: 'Hi',
  //   other: 'foo'
  // }

  fetch('example_script.php', {
    method: 'POST',
    body: 'Hi'
  }).then(response => {
    response.text().then( data => {
      console.log(data)
      document.querySelector('.container').innerText = data
    })
  })
})