const taskFormEl = $("#task-form");
const taskDisplayEl = $(".swim-lanes");
const todoListEl = $("#todo-cards");
const inProgressListEl = $("#in-progress-cards");
const doneListEl = $("#done-cards");
const titleEl = $("#title");
const dueDateEl = $("#due-date");
const descriptionEl = $("#description");

function readTasksFromStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null) tasks = [];

    return tasks;
}

function addTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return crypto.randomUUID();
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
