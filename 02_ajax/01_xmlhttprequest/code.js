var xmlhttp = new XMLHttpRequest()

xmlhttp.onreadystatechange = function () {
  if(this.readyState == 4 && this.status == 200) {
    // Do something
    console.log(JSON.parse(this.responseText))
  }else { 
    // Something went wrong
    console.log('Error in the request')
    console.log('status: ', this.status)
  }
}

xmlhttp.open('GET', 'data.json')
xmlhttp.send()
