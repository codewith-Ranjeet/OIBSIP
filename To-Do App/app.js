const input = document.getElementById("task-input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task-list");

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
})

addBtn.addEventListener("click", () => {

    let task = input.value.trim();

    if (task.length > 0) {

        //creating a list item (li)
        let li = document.createElement("li");

        //creating unique ID for checkbox
        let checkboxId = "task-" + Date.now();
        // console.log(checkboxId);

        //creating a label for task text
        let taskText = document.createElement("label");
        taskText.htmlFor = checkboxId;
        taskText.className = "task-text";
        taskText.textContent = task;

        //creating a checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-check";
        checkbox.id = checkboxId;

        //Creating edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.className = "edit-btn";

        //creating delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete-btn";

        //EVENTS

        //checkbox
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskText.style.textDecoration = "line-through"
                checkbox.parentElement.style.opacity = "0.6";
            }
            else {
                taskText.style.textDecoration = "none"
                checkbox.parentElement.style.opacity = "1";
            }
        })

        //Edit button
        editBtn.addEventListener("click", () => {

            // If the task is completed, prevent editing
            if (checkbox.checked) {
                alert("You can't edit a completed task. Uncheck it first.");
                return;
            }

            //editing unchecked tasks
            if (editBtn.textContent === "✏️") {
                // Switch to editing mode
                const editInput = document.createElement("input");
                editInput.type = "text";
                editInput.value = taskText.textContent;
                editInput.className = "edit-input";

                li.replaceChild(editInput, taskText);
                editBtn.textContent = "✔️";
            } else {
                // Save the new text
                const newText = li.querySelector(".edit-input").value.trim();
                if (newText.length > 0) {
                    taskText.textContent = newText;
                    li.replaceChild(taskText, li.querySelector(".edit-input"));
                    editBtn.textContent = "✏️";
                } else {
                    alert("Task cannot be empty.");
                }
            }
        });


        //Delete button
        deleteBtn.addEventListener("click", () => {
            li.remove();
        })



        //child element assignment
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        //clearing input field
        input.value = "";
    }
    else {
        alert("Please enter a task.");
    }
})

// Clear completed tasks
const clearCompleteBtn = document.getElementById("clear-completed");

clearCompleteBtn.addEventListener("click", () => {
    const allTasks = document.querySelectorAll("li");
    allTasks.forEach((li) => {
        const checkbox = li.querySelector(".task-check");
        if (checkbox.checked) {
            li.remove();
        }
    })
})
//clear all tasks
const clearAllBtn = document.getElementById("clear-all");

clearAllBtn.addEventListener("click", () => {
    if (taskList.children.length > 0) {
        if (confirm("Are you sure you want to clear all tasks?")) {
            taskList.innerHTML = "";
        }
    }
})
