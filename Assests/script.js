var humanName = document.getElementById("name");
var emailAddy = document.getElementById("email");
var furryName = document.getElementById("furry");
var submitBtn = document.getElementById("submitBtn");
var modal = document.getElementById("myModal");
var btn = document.getElementById("adoptBtn");
var span = document.getElementsByClassName("close")[0];
var catFact = document.getElementById("catFacts");
var catBtn = document.getElementById("catBtn");


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
  fetch('https://cat-fact.herokuapp.com/facts', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    randomNum = Math.floor(Math.random() * 5)
    console.log(data);
    var Fact = document.createElement('p')
    Fact.textContent = data[randomNum].text
    catFact.innerHTML = '';
    catFact.appendChild(Fact);
  })
});


/modal start/ 
const modalOpen = document.getElementById('modalOpen');
const modalContainer = document.getElementById('modalContainer');
const submitBtn = document.getElementById('submitBtn');

modalOpen.addEventListener('click', () => {
  modalContainer.classList.add('show')
});

submitBtn.addEventListener('click', () +.{
  modalContainer.classList.remove('show')
})