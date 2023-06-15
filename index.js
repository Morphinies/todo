const form = document.getElementById("form");
form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  const input = document.getElementById("input");
  const list = document.getElementById("list");
  console.log(input.value);
  console.log(list);
  //   list += document.createElement("li");
}
