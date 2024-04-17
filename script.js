const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("nameInput");
const clickBtn = document.getElementById("clickBtn");
const totalClicks = document.getElementById("totalClicks");
const userName = document.getElementById("name");
const userLocation = document.getElementById("location");

let clicks = 0;

totalClicks.classList.add("hidden");
clickBtn.classList.add("hidden");
userName.classList.add("hidden");

submitBtn.addEventListener("click", function () {
  submitBtn.classList.add("hidden");
  nameInput.classList.add("hidden");
  totalClicks.classList.remove("hidden");
  clickBtn.classList.remove("hidden");
  userName.classList.remove("hidden");
});

clickBtn.addEventListener("click", function () {
  let valueOfInput = nameInput.value;
  console.log(valueOfInput);

  totalClicks.textContent = `Total clicks around the world: ${clicks++}`;

  userName.textContent = `${valueOfInput} just clicked`;
});
