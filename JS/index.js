//Función para elegir y recomendar disco de jazz
function jazzRecord(){
  let jazzrecord = prompt(`You chose ${genre}! Please, tell us your favourite ${genre} record`)
  if (jazzrecord == "") {
    alert ("We don't know that record, please tell us another so we can recommend you a new you'll enjoy")
    jazzRecord()
  }else{
    if(jazzrecord == "Miles Davis - Kind of Blue"){
    alert ("Great record! We recommend you: John Coltrane - A Love Supreme \nhttps://open.spotify.com/album/4o1ObbFgVBo6rxIdW2vnxM?si=xvvV9-I9QJShZjNMKrlSqw" )
  } else{
    alert ("Great record! We recommend you: Miles Davis - Kind of Blue \nhttps://open.spotify.com/album/1weenld61qoidwYuZ1GESA?si=QwW8wHRCQbWfBGRbR4MfKw")
  }
}
}
//Función para elegir y recomendar disco de rock
function rockRecord(){
  let rockrecord = prompt(`You chose ${genre}! Please, tell us your favourite ${genre} record`)
  if (rockrecord == "") {
    alert ("We don't know that record, please tell us another so we can recommend you a new one you'll enjoy")
    rockRecord()
  }else{
    if(rockrecord == "Led Zepellin - IV"){
    alert ("Great record! We recommend you: The Police - Outlandos D'Amour \nhttps://open.spotify.com/album/1H9g6j4Wwj6wh6p8YHVtkf?si=skTyluytSfSD3sT9VtsOjA" )
  } else{
    alert ("Great record! We recommend you: Led Zeppelin - Led Zeppelin IV \nhttps://open.spotify.com/album/5EyIDBAqhnlkAHqvPRwdbX?si=IEgM9EcHRaKxfIer0L6Zog")
  }
}
}
//Función para elegir y recomendar disco de pop
function popRecord(){
  let poprecord = prompt(`You chose ${genre}! Please, tell us your favourite ${genre} record`)
  if (poprecord == "") {
    alert ("We don't know that record, please tell us another so we can recommend you a new one you'll enjoy")
    popRecord()
  }else{
    if(poprecord == "Michael Jackson - Thriller"){
    alert ("Great record! We recommend you: Prince - Purple Rain \nhttps://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc?si=qCTsST6fSbCEhe75RsqHYQ" )
  } else{
    alert ("Great record! We recommend you: Michael Jackson - Thriller \nhttps://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ?si=7tJUyun-ToaqoU55C8cYuw")
  }
}
}



do { 
let name = prompt("Please enter your name:");
alert("Hi " + name + "! Please select your favorite music genre:\n1. Jazz\n2. Rock\n3. Pop\n4. None");

let genre = "";
let genreNumber = parseInt(prompt("Enter the number of your chosen genre:"));

switch(genreNumber) {
  case 1:
    genre = "Jazz";
    jazzRecord()
    break;
  case 2:
    genre = "Rock";
    rockRecord()
    break;
  case 3:
    genre = "Pop";
    popRecord()
    break;
  case 4:
    genre = "None";
    if (genre == "none"){
      alert("You chose " + genre + "! Please tell us your favorite " + genre.toLowerCase() + " record.");
    }else{
      alert("Sorry to hear that!")
      let newgenre = prompt("Please, tell us which genre you would choose and we will tell you when we have it available.")
      prompt(`Great! Please leave us your email and we'll tell you when we have ${newgenre} recommendations`)
      alert("Thank you")
    
    }
    break;
  default:
    alert("Invalid input, please choose a number between 1 and 4.");
    
    break;
}
var starAgain = confirm("Do you want to start again?");
}while (startAgain);