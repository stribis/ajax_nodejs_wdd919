
// fetch('data.json')
// .then(response => {
//   response.json()
//   .then( json => {
//     console.log(json)
//   })
// })

async function logData (){
  let response = await fetch('data.json')
  let data = await response.json()
  return data
}

console.log(logData())