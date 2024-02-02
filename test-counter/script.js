const correctButton = document.getElementById('correctButton');
const incorrectButton = document.getElementById('incorrectButton');
const resetButton = document.getElementById('resetButton');
const correctCountElement = document.getElementById('correctCount');
const incorrectCountElement = document.getElementById('incorrectCount');
const scoreElement = document.getElementById('score');

let correctCount = 0;
let incorrectCount = 0;
let score=0;

correctButton.addEventListener('click', () => {
  correctCount++;
  correctCountElement.textContent = correctCount;
  evaluateScore();
});

incorrectButton.addEventListener('click', () => {
  incorrectCount++;
  incorrectCountElement.textContent = incorrectCount;
  evaluateScore();
});

resetButton.addEventListener('click', () => {
  correctCount = 0;
  incorrectCount = 0;
  evaluateScore();
  correctCountElement.textContent = correctCount;
  incorrectCountElement.textContent = incorrectCount;
});

function evaluateScore () {
  if ((correctCount + incorrectCount)>0)
  score = Math.max(0,Math.floor(100*correctCount/(correctCount + incorrectCount)));
else 
  score = 0;

  scoreElement.textContent = score;
}
