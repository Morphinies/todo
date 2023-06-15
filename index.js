const form = document.getElementById("form");
form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  const input = document.getElementById("input");
  const list = document.getElementById("list");
  list += document.createElement("li");
}
