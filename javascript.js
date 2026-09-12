const input = document.querySelector(".task-input");
const button = document.querySelector(".add-button");
const lista = document.querySelector(".task-list");
const saveButton = document.querySelector(".save-button");
const todoList = [];

function toggleState(id) {
  const index = todoList.findIndex((item) => item.id === id);
  const item = todoList[index];
  item.done = !item.done;
}

function addTask() {
  const valor = input.value;
  if (valor.length === 0) {
    alert("Campo nao pode ser vazio");
    return;
  }

  const item = document.createElement("li");
  item.textContent = valor;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const id = Math.random();
  checkbox.addEventListener("click", function () {
    toggleState(id);
  });

  item.appendChild(checkbox);
  lista.appendChild(item);
  todoList.push({
    id,
    valor,
    done: false,
  });
  input.value = "";
}

button.addEventListener("click", addTask);

function saveTask() {
  console.log("lista", todoList);
}

saveButton.addEventListener("click", saveTask);
