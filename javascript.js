const input = document.querySelector(".task-input");
const button = document.querySelector(".add-button");
const lista = document.querySelector(".task-list");

function addTask() {
  const valor = input.value;

  const item = document.createElement("li");
  item.textContent = valor;

  lista.appendChild(item);

  input.value = "";

  button.addEventListener("click", addTask);
}
