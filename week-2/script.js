var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

function addTask() {
    var task = taskInput.value;
    if (task.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.innerText = task;
        taskList.appendChild(listItem);
        taskInput.value = "";
        listItem.onclick = function() {
            this.parentNode.removeChild(this);
        };
    }
}
addButton.addEventListener("click", addTask);
