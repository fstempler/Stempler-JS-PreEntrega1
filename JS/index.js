
//Función para elegir y recomendar disco de jazz
function jazzRecord(){
  let recordName = prompt(`You chose Jazz! Please, tell us your favourite Jazz record`)
  if (recordName == "") {
    alert ("We don't know that record, please tell us another so we can recommend you a new one you'll enjoy")
    jazzRecord()
  }else{
    if(recordName == "Miles Davis - Kind of Blue"){
    alert ("Great record! We recommend you: John Coltrane - A Love Supreme \nhttps://open.spotify.com/album/4o1ObbFgVBo6rxIdW2vnxM?si=xvvV9-I9QJShZjNMKrlSqw" )
  } else{
    alert ("Great record! We recommend you: Miles Davis - Kind of Blue \nhttps://open.spotify.com/album/1weenld61qoidwYuZ1GESA?si=QwW8wHRCQbWfBGRbR4MfKw")
  }
}
}
//Función para elegir y recomendar disco de rock
function rockRecord(){
  let recordName = prompt(`You chose ${genre}! Please, tell us your favourite ${genre} record`)
  if (recordName == "") {
    alert ("We don't know that record, please tell us another so we can recommend you a new one you'll enjoy")
    rockRecord()
  }else{
    if(recordName == "Led Zepellin - IV"){
    alert ("Great record! We recommend you: The Police - Outlandos D'Amour \nhttps://open.spotify.com/album/1H9g6j4Wwj6wh6p8YHVtkf?si=skTyluytSfSD3sT9VtsOjA" )
  } else{
    alert ("Great record! We recommend you: Led Zeppelin - Led Zeppelin IV \nhttps://open.spotify.com/album/5EyIDBAqhnlkAHqvPRwdbX?si=IEgM9EcHRaKxfIer0L6Zog")
  }
}
}
//Función para elegir y recomendar disco de pop
function popRecord(){
  let recordName = prompt(`You chose ${genre}! Please, tell us your favourite ${genre} record`)
  if (recordName == "") {
    alert ("We don't know that record, please tell us another so we can recommend you a new one you'll enjoy")
    popRecord()
  }else{
    if(recordName == "Michael Jackson - Thriller"){
    alert ("Great record! We recommend you: Prince - Purple Rain \nhttps://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc?si=qCTsST6fSbCEhe75RsqHYQ" )
  } else{
    alert ("Great record! We recommend you: Michael Jackson - Thriller \nhttps://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ?si=7tJUyun-ToaqoU55C8cYuw")
  }
}
}

let trueOfalse = true; 
//Función para recomendar disco. Una vez ingresado el disco preferido recomienda uno del género con su link a Spotify. Si el disco ingresado es el que figura en la función elige la 2da opción. 
function record(genreNumber){
  switch (genreNumber) {
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
  //Si no se ingresa un número válido se repite la petición hasta que se ingrese.
    let genreNumber = parseInt(prompt("INVALID number " + name + " Please choose your favorite music genre: \n1 Jazz \n2 Rock \n3 Pop \n4 None "))
    record(genreNumber);
  
  }

}

//Se pide ingresar el nombre hasta que se ingresa
let truOfalse = true
let name = prompt("Please enter your name:");

while (trueOfalse) {
  if (name == "" ){
    
    name = prompt("Please enter your name:");
        
  } else {
    let genreNumber = parseInt(prompt("Hi " + name + "! Please choose your favorite music genre: \n1 Jazz \n2 Rock \n3 Pop \n4 None "))
    record(genreNumber);
    trueOfalse = false; 
  }
}

