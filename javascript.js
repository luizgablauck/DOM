const input = document.querySelector(".task-input");
const lista = document.querySelector(".task-list");
const saveButton = document.querySelector(".save-button");
const marcar = document.querySelector(".check");

const todoList = [];

function updateTitle(id, value) {
  const index = todoList.findIndex((item) => item.id === id);
  const item = todoList[index];
  item.valor = value;
}

let isAllChecked = false;

function markAll() {
  todoList.forEach(function (item) {
    item.done = !isAllChecked;
  });

  isAllChecked = !isAllChecked;

  const checkboxes = document.querySelectorAll(".is-done-checkbox");

  //for (
  //  let index = 0, checkboxLength = checkboxes.length;
  //  index < checkboxLength;
  // index += 1
  // ) {
  // const checkbox = checkboxes[index];
  // checkbox.checked = isAllChecked;
  // }

  checkboxes.forEach(function (checkbox, index, pareten, luiz) {
    checkbox.checked = isAllChecked;
  });

  marcar.textContent = isAllChecked ? "Desmarcar todes" : "Marcar todes";
}

marcar.addEventListener("click", markAll);

function toggleState(id, element) {
  const index = todoList.findIndex((item) => item.id === id);
  const item = todoList[index];
  item.done = !item.done;

  element.classList.toggle("is-done");
}

function deleteTask(id, item) {
  const index = todoList.findIndex(function (item) {
    return item.id === id;
  });

  todoList.splice(index, 1);

  item.remove();
}

function addTask() {
  const valor = input.value;
  if (valor.length === 0) {
    alert("Campo nao pode ser vazio");
    return;
  }

  const item = document.createElement("li");
  //item.textContent = valor;
  const id = Math.random();

  const titulo = document.createElement("input");
  titulo.value = valor;
  titulo.classList.add("input-title");
  titulo.addEventListener("input", function (event) {
    updateTitle(id, event.target.value);
  });

  item.appendChild(titulo);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("is-done-checkbox");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", function () {
    deleteTask(id, item);
  });

  checkbox.addEventListener("click", function () {
    toggleState(id, item);
  });

  item.appendChild(checkbox);
  item.appendChild(deleteButton);
  lista.appendChild(item);
  todoList.push({
    id,
    valor,
    done: false,
  });
  input.value = "";
}

function saveTask() {
  console.log("lista", todoList);
}

saveButton.addEventListener("click", saveTask);

function onSubmitTask(event) {
  event.preventDefault();
  addTask();
}

const form = document.getElementById("form");
form.addEventListener("submit", onSubmitTask);

function salvar(callback) {
  const nome = "luiz";
  console.log("chamei server, salvando no banco");

  setTimeout(function () {
    console.log("server retornou, chamando callback");
    callback(nome);
  }, 5000);
}

function salvarCallback(nome) {
  console.log(nome);
}

salvar(salvarCallback);
