
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  response.json()
  .then( json => {
    console.log(json)
    populateList (json) 
  })
})

function populateList (data) {
  const list = document.querySelector('ul')
  list.innerHTML = ''

  data.forEach(user => {
    const newUser = document.createElement('li')
    const template = 
    `<img src="https://robohash.org/${user.username}.png">
      <ul>
        <li>Name: ${user.name}</li>
        <li>Username: ${user.username}</li>
        <li>Email: ${user.email}</li>
        <li>website: ${user.website}</li>
      <ul>`
    newUser.innerHTML = template
    list.appendChild(newUser)
  });
  
}

