
// create tasks array
let tasks = [];
// function to display tasks
function displayTasks() {
    let html = "";
    for (let i=0; i< tasks.length; i++) {
        html += `<li><span>${tasks[i]}</span><button onclick="removetask(${i})">Remove</button></li>`;
    }
    document.getElementById("list").innerHTML = html;
}
// function to add task
function addTask() {
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    if(text === "") {
        alert("Please enter a task");
        return;
    }
    tasks.push(text);
    taskInput.value = "";
    displayTasks();
}
// function to remove task
function removetask(i) {
    tasks.splice(i,1);
    saveTasks();
    displayTasks();
}
// fuction to clear all tasks
function clearall() {
    tasks = [];
    saveTasks();
    displayTasks();
}
// function to save tasks to local storage
function saveTasks(){
    localStorage.setItem("taska", JSON.stringify(tasks));// convert array to string and save
}
// function to load tasks from local storage
function loadTasks() {
    let saved = localStorage.getItem("taska");
    if(saved !== null) {
        tasks = JSON.parse(saved);// convert string back to array
    }
}
loadTasks();
displayTasks();
