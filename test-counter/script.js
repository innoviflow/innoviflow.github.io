const correctButton = document.getElementById('correctButton');
const incorrectButton = document.getElementById('incorrectButton');
const resetButton = document.getElementById('resetButton');
const correctCountElement = document.getElementById('correctCount');
const incorrectCountElement = document.getElementById('incorrectCount');

let correctCount = 0;
let incorrectCount = 0;

correctButton.addEventListener('click', () => {
  correctCount++;
  correctCountElement.textContent = correctCount;
});

incorrectButton.addEventListener('click', () => {
  incorrectCount++;
  incorrectCountElement.textContent = incorrectCount;
});

resetButton.addEventListener('click', () => {
  correctCount = 0;
  incorrectCount = 0;
  correctCountElement.textContent = correctCount;
  incorrectCountElement.textContent = incorrectCount;
});
