
$.getJSON('data.json', function (data){
  console.log(data)
})

// $.get( 'data.json', function( data ) {
//   console.log( data );
// });


// $.ajax({
//   method: "POST",
//   url: "some.php",
//   data: { name: "John", location: "Boston" }
// })
//   .done(function( msg ) {
//     alert( "Data Saved: " + msg );
//   });