// localStorage.clear();
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

if (!localStorage.getItem("todoList")) {
  localStorage.setItem("todoList", JSON.stringify([]));
} else {
  for (let item of JSON.parse(localStorage.getItem("todoList"))) {
    addItem(item);
  }
}

function addItemToLS(item) {
  const list = JSON.parse(localStorage.getItem("todoList"));
  list.push(item);
  localStorage.setItem("todoList", JSON.stringify(list));
}

function delFromLS(item) {
  const list = JSON.parse(localStorage.getItem("todoList"));
  const itemId = list.indexOf(item);
  list.splice(itemId, 1);
  localStorage.setItem("todoList", JSON.stringify(list));
}

function addItem(item) {
  const list = document.getElementById("list");
  if (item) {
    const li = document.createElement("li");
    li.className = "item";
    const p = document.createElement("p");
    p.innerText = item;
    const div = document.createElement("div");
    div.className = "btns";
    const btnStatus = document.createElement("button");
    const btnDel = document.createElement("button");
    btnStatus.onclick = (e) => changeStatusOfItem(e.currentTarget);
    btnDel.onclick = (e) => delItem(e.currentTarget);
    btnStatus.className = "btn";
    btnDel.className = "btn";
    const imgStatus = document.createElement("img");
    const imgDel = document.createElement("img");
    imgDel.className = "icon";
    imgDel.src = "imgs/delete.svg";
    imgDel.alt = "";
    imgStatus.className = "icon";
    imgStatus.src = "imgs/complete.svg";
    imgStatus.alt = "";
    li.appendChild(p);
    li.appendChild(div);
    div.appendChild(btnStatus);
    div.appendChild(btnDel);
    btnStatus.appendChild(imgStatus);
    btnDel.appendChild(imgDel);
    list.appendChild(li);
  }
}

function handleSubmit(e) {
  e.preventDefault();
  let input = document.getElementById("input");
  addItemToLS(input.value);
  addItem(input.value);
  input.value = "";
}

function changeStatusOfItem(e) {
  let curVal = e.firstElementChild;
  if (curVal.src.endsWith("imgs/complete.svg")) {
    curVal.src = "imgs/complete-true.svg";
  } else {
    curVal.src = "imgs/complete.svg";
  }
}

function delItem(e) {
  e.parentNode.parentNode.remove();
  delFromLS(e.parentNode.parentNode.firstElementChild.innerText);
}
