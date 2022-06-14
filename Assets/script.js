var humanName = document.getElementById("name");
var emailAddy = document.getElementById("email");
var furryName = document.getElementById("furry");
var submitBtn = document.getElementById("submitBtn");
var modal = document.getElementById("myModal");
var btn = document.getElementById("adoptBtn");
var span = document.getElementsByClassName("close")[0];
var catFact = document.getElementById("catFacts");
var catBtn = document.getElementById("catBtn");
var nextDog = document.getElementById("nextDoggie");
var dogBtn = document.getElementById("dogBtn");
var dogFact = document.getElementById("dogFacts");
var weather = document.getElementById("weatherDisplay");

// Dog slides pics and bio

var dogPics = [
    {name : "Labby",
     image: "labby.JPG",
     text : "a lovely Labrador.  Great with kids and adults alike! Loves to play fetch and is the goodest of boys."},
    {name: "Leafy",
     image: "leavy.jpeg",
     text : "don't touch his leaf! A shepherd mix, he's very adventerous and would be a perfect companion for an active lifestyle."},
    {name: "Captain Jack",
     image: "pirate.jpg",
     text : "he thinks he's a pirate! arrr.  This doggie pirate is ready to embark on adventure with his new human."},
    {name: "Snarly",
     image: "snarly.jpg",
     text: "extra moody, all the time! Don't let this bad boy fool you.  He's a big softie and loves cuddles."},
    {name: "Tonguey",
     image: "tongueOut.jpg",
     text: "tongue out like Jordan! Don't take offense to his tongue out at you.  We promise it's very cute."}
];
// Function for click to next dog
nextDog.addEventListener("click", nextSlide)
var currentSlideIndex = 0;

function nextSlide() {
  var file = dogPics[currentSlideIndex].image;
  var url = "./Assets/images/doggypics/" + file;
  var pics = document.getElementById("dogPics");
  var dogText = document.getElementById("dogText")
  var dogName = document.getElementById("dogName")
  dogText.innerHTML = "<p>" + dogPics[currentSlideIndex].text +"</p>"
  nextDog.textContent = "Next Doggie";
  dogName.textContent = dogPics[currentSlideIndex].name
  pics.innerHTML = "<img src=" + url + ">"
  
  currentSlideIndex++;
  if( currentSlideIndex === dogPics.length ) {
  currentSlideIndex = 0;
}
}

// function executed on click of submit that stores pertinent data to local storage.

submitBtn.addEventListener("click", function() {
    var potentialClient = {
                humanName: humanName.value,
                emailAddy: emailAddy.value,
                furryName: furryName.value.trim()
  };
  
  localStorage.setItem("potentialClient", JSON.stringify(potentialClient));
  return;
  });

   ///// code for modal

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


// Function to pull cat facts from API
catBtn.addEventListener ("click", function() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    randomNum = Math.floor(Math.random() * data.length)
    console.log(data);
    var Fact = document.createElement('h3')
    Fact.textContent = data[randomNum].text
    catFact.innerHTML = '';
    catFact.appendChild(Fact);
  })
});

dogBtn.addEventListener ("click", function() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=10', {
  // method: 'GET', //GET is the default.
  // credentials: 'same-origin', // include, *same-origin, omit
  // redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    randomNum = Math.floor(Math.random() * data.length)
    console.log(data);
    var Fact = document.createElement('h3')
    Fact.textContent = data[randomNum].text
    dogFact.innerHTML = '';
    dogFact.appendChild(Fact);
  })
});

// Cat slides pics and bio
var catPics = [
  {name : "Tom",
   image: "catGlasses.jpg",
   text : "Easygoing and sweet, Tom will always choose affection. He loves jazz music and a good backrub."},
  {name: "Fred",
   image: "cat2.jpg",
   text : "Meet handsome Fred! He is a bit of a character, which makes for the most interesting of companion"},
  {name: "King",
   image: "Cat3.jpg",
   text : "He thinks he's a King! King is ready to embark on adventure with his new human."},
  {name: "Ramsey",
   image: "cat4.jpg",
   text: "Don't let this bad boy fool you. He will judge your food choices but he is a big softie and loves cuddles."},
  {name: "Queen",
   image: "cat5.jpg",
   text: "Queen will be a wonderful best friend and companion. If you're looking for a smart, affectionate, laid-back feline companion, Queen may be the lady for you!"}
];
// Function click to next cat
nextCat.addEventListener("click", nextSlidecat)
var currentSlideIndex = 0;

function nextSlidecat() {
var file = catPics[currentSlideIndex].image;
var url = "./Assets/images/catPics/" + file;
var pics = document.getElementById("catPics");
var catText = document.getElementById("catText")
var catName = document.getElementById("catName")
// var prev = document.createElement("button")
// var prevText = document.createTextNode("Previous Cat!");
// prev.appendChild(prevText);
// var prevEl = document.getElementById("catSlideBtns")
// prevEl.appendChild(prev);
catText.innerHTML = "<p>" + catPics[currentSlideIndex].text +"</p>"
nextCat.textContent = "Next Cat";
catName.textContent = catPics[currentSlideIndex].name
pics.innerHTML = "<img src=" + url + ">"

currentSlideIndex++;
if( currentSlideIndex >= catPics.length ) {
currentSlideIndex = 0;
}
}

// function displaySlides(num) {
//   var x;
//   var slides = document.getElementsByClassName("catSlide");
//   if (num > slides.length) { currentIndex = 1 }
//   if (num < 1) { currentIndex = slides.length }
//   for (x = 0; x < slides.length; x++) {
//       slides[x].style.display = "none";
//   }
//   slides[currentIndex - 1].style.display = "block";
// }

// function setSlides(num) {
//   displaySlides(currentIndex += num);
// }

// var currentIndex = 1;
// displaySlides(currentIndex);

// function setSlides(num) {
//   displaySlides(currentIndex += num);
// }

// function display(num) {
//   var x;
//   var catSlides = document.getElementsByClassName("catSlide");
//   if (num > slides.length) { currentIndex = 1}
//   if (num < 1) { currentIndex = slides.length}
//   for (x = 0; x < slides.length; X++){
//         slides[x].style.display = "none";
//   }
//   slides[currentIndex - 1].style.display = "block";

// }




fetch('http://api.openweathermap.org/geo/1.0/zip?zip=85028,US&appid=a46321094570747c6e960f39cd5b1559', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    localStorage.setItem ("longitude", data.lon);
    localStorage.setItem ("latitude", data.lat);
  });

  var latitude = localStorage.getItem("latitude");
  var longitude = localStorage.getItem("longitude");

  fetch('https://api.openweathermap.org/data/3.0/onecall?lat='+ latitude + '&lon=' + longitude + '&appid=a46321094570747c6e960f39cd5b1559', {
    method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

