const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const rollOneDieBtn = document.getElementById("roll-1-die");
const rollTwoDiceBtn = document.getElementById("roll-2-dice");
const resultsList = document.getElementById("results-list");

const diceImages = [
  "1.png", // Dice 1
  "2.png", // Dice 2
  "3.png", // Dice 3
  "4.png", // Dice 4
  "5.png", // Dice 5
  "6.png", // Dice 6
];

let rollCount = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(dice, roll) {
  dice.src = diceImages[roll - 1];
}

function addResultToTheList(resultText) {
  const listItem = document.createElement("li");
  rollCount++;
  listItem.textContent = `#${rollCount}: ${resultText}`;
  resultsList.insertBefore(listItem, resultsList.firstChild);
}

rollOneDieBtn.addEventListener("click", () => {
  const roll1 = rollDice();

  updateDiceImage(dice1, roll1);
  dice2.style.display = "none";

  addResultToTheList(`You rolled a ${roll1}`);
});

rollTwoDiceBtn.addEventListener("click", () => {
  const roll1 = rollDice();
  const roll2 = rollDice();

  updateDiceImage(dice1, roll1);
  updateDiceImage(dice2, roll2);
  dice2.style.display = "inline-block";

  addResultToTheList(`You rolled a ${roll1} and a ${roll2}`);
});
