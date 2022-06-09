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

nextDog.addEventListener("click", nextSlide)
var currentSlideIndex = 0;

function nextSlide() {
  var file = dogPics[currentSlideIndex].image;
  var url = "./Assets/images/doggypics/" + file;
  var pics = document.getElementById("dogPics");
  var dogText = document.getElementById("dogText")
  var dogName = document.getElementById("dogName")
  // var prev = document.createElement("button")
  // var prevText = document.createTextNode("Previous Doggie!");
  // prev.appendChild(prevText);
  // var prevEl = document.getElementById("dogSlideBtns")
  // prevEl.appendChild(prev);
  dogText.innerHTML = "<p>" + dogPics[currentSlideIndex].text +"</p>"
  nextDog.textContent = "Next Doggie";
  dogName.textContent = dogPics[currentSlideIndex].name
  pics.innerHTML = "<img src=" + url + ">"
  
  currentSlideIndex++;
  if( currentSlideIndex >= dogPics.length ) {
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



btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}



catBtn.addEventListener ("click", function() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=10', {
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
    var Fact = document.createElement('p')
    Fact.textContent = data[randomNum].text
    catFact.innerHTML = '';
    catFact.appendChild(Fact);
  })
});
