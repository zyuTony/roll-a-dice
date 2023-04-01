const clickBtn = document.getElementById("click-btn");
const clicksDisplay = document.getElementById("clicks");
let clicks = 0;

clickBtn.addEventListener("click", () => {
  clicks++;
  clicksDisplay.textContent = clicks;
});
