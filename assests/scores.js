var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var allscores = JSON.parse(localStorage.getItem("allscores")) || [];

var MAX_HIGH_SCORES = 5;
// localStorage.setItem("allscores", JSON.stringify(allScores));

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });

if (allscores !== null) {
  for (var i = 0; i < allscores.length; i++) {
    var createLi = document.createElement("li");
    createLi.classList.add("scoreitem");
    createLi.textContent = allscores[i].initials + " " + allscores[i].score;
    highScore.appendChild(createLi);
  }
}