const form = document.getElementById("form");
const btnsComplete = document.getElementsByClassName("btn-complete");
for (let btnComplete of btnsComplete) {
  btnComplete.addEventListener("click", (btnComplete) =>
    changeStatusOfItem(btnComplete)
  );
}

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  const input = document.getElementById("input");
  const list = document.getElementById("list");
  // list += document.createElement("li");
  console.log(input.value);
  console.log(list.innerHTML);

  const li = document.createElement("li");
  li.className = "item";
  const p = document.createElement("p");
  p.innerText = input.value;
  const div = document.createElement("div");
  div.className = "btns";
  const btn = document.createElement("button");
  btn.className = "btn btn-complete";
  const img = document.createElement("img");
  img.className = "icon";
  img.src = "imgs/complete.svg";
  img.alt = "";
  li.appendChild(p);
  li.appendChild(div);
  div.appendChild(btn);
  btn.appendChild(img);

  list.appendChild(li);
}

function changeStatusOfItem(btnComplete) {}
