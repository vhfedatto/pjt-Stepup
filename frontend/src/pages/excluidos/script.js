let waterAmount = 0;

function addWater() {
  waterAmount += 250;
  document.getElementById('water-count').innerText = `${waterAmount}ml`;
}
