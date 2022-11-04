// Player Selection Start
function setValue(name) {
  const newLi = document.createElement("li");
  newLi.innerText = name;
  const ol = document.getElementById("players-list");
  ol.appendChild(newLi);
}

document.getElementById("players").addEventListener("click", function (event) {
  const name = event.target.parentNode.children[0].innerText;
  const nodeLength = document.querySelectorAll("#players-list li").length;

  if (nodeLength < 5) {
    setValue(name);
  } else {
    alert("Limit Exceeded");
  }
});
// Player Selection End
function setAmount(elementId, amount) {
  const element = document.getElementById(elementId);
  element.innerText = amount;
  return element;
}

function inputField(inputId) {
  const inputString = document.getElementById(inputId).value;
  const inputValue = parseInt(inputString);
  return inputValue;
}
// Calculation Start
document
  .getElementById("total-player-price")
  .addEventListener("click", function () {
    const playerList = document.querySelectorAll("#players-list li").length;
    const playerPrice = inputField("player-price");
    const playerCost = playerPrice * playerList;
    setAmount("player-cost", playerCost);
  });
document
  .getElementById("total-cost-btn")
  .addEventListener("click", function () {
    const managerPrice = inputField("manager-price");
    const coachPrice = inputField("coach-price");
    const playerCostString = document.getElementById("player-cost").innerText;
    const playerCost = parseInt(playerCostString);
    console.log(playerCost);
    const total = managerPrice + coachPrice + playerCost;
    setAmount("total-cost", total);
  });
