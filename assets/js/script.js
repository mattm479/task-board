// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const taskFormEl = $("#task-form");

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
    event.preventDefault();

    const title = $("#title").val();
    const dueDate = $("#due-date").val();
    const description = $("#description").val();

    $("#formModal").modal('hide');

    const task = {
        id: generateTaskId(),
        title: title,
        dueDate: dueDate,
        description: description
    };

    createTaskCard(task);

    title.val("");
    dueDate.val("");
    description.val("");
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();

    taskFormEl.on('submit', handleAddTask);

    $(".lane").droppable({
        accept: ".draggable",
        drop: handleDrop
    });

    $("#due-date").datepicker({
        changeMonth: true,
        changeYear: true
    });
});
