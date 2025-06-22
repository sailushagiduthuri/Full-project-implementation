document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    };
    taskList.appendChild(li);
  });
}