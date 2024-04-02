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
    const card = $("<div>");
    card.addClass("card task-card draggable my-3");
    card.attr("data-task-id", task.id);

    const cardHeader = $("<div>");
    cardHeader.addClass("card-header h4");
    cardHeader.text(task.title);

    const cardBody = $("<div>");
    cardBody.addClass("card-body");

    const taskDescription = $("<p>");
    taskDescription.addClass("card-text");
    taskDescription.text(task.description);

    const taskDueDate = $("<p>");
    taskDueDate.addClass("card-text");
    taskDueDate.text(task.dueDate);

    const button = $("<button>");
    button.addClass("btn btn-danger delete");
    button.text("Delete");
    button.attr("data-task-id", task.id);
    button.on('click', handleDeleteTask);

    if (task.dueDate && task.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(task.dueDate, 'MM/DD/YYYY');

        if (now.isSame(taskDueDate, 'day')) {
            card.addClass('bg-warning text-white');
        } else if (now.isAfter(taskDueDate)) {
            card.addClass('bg-danger text-white');
            button.addClass('border-light');
        }
    }

    cardBody.append(taskDescription, taskDueDate, button);
    card.append(cardHeader, cardBody);

    return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const tasks = readTasksFromStorage();

    todoListEl.empty();
    inProgressListEl.empty();
    doneListEl.empty();

    for (let task of tasks) {
        const card = createTaskCard(task);

        switch (task.status) {
            case "to-do":
                todoListEl.append(card);
                break;
            case "in-progress":
                inProgressListEl.append(card);
                break;
            case "done":
                doneListEl.append(card);
                break;
        }
    }

    $(".draggable").draggable({
        opacity: 0.75,
        zIndex: 100
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    const tasks = readTasksFromStorage();

    $("#formModal").modal('hide');

    const task = {
        id: generateTaskId(),
        title: titleEl.val(),
        dueDate: dueDateEl.val(),
        description: descriptionEl.val(),
        status: "to-do"
    };

    tasks.push(task);
    addTasksToStorage(tasks);

    titleEl.val("");
    dueDateEl.val("");
    descriptionEl.val("");

    renderTaskList();
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
