const scoreEl= document.querySelector("#score-display");

  // print scores on scores page
  const displayScores = () => {
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    const scoreBox = document.createElement("div");
    scoreBox.classList = "center-align";
    scoreBox.innerHTML = `<p class="flow-text">The Hall of Champions:</p>`;
    scoreEl.appendChild(scoreBox);
    console.log(highscores);

    // sort scores by highest score
    highscores.sort((a, b) => {
        return b.score - a.score;
    });
    highscores.forEach(function(score) {
        const champion = document.createElement("li");
        champion.textContent = score.name + " - " + score.score; 
        scoreBox.appendChild(champion);
    })
  }

  displayScores();