window.addEventListener('load', () => {
    const form = document.querySelector('#newtaskform');
    const input = document.querySelector('#inputnewtask');
    const list_const = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if (!task) {
            alert("Please enter a task !!!");
            return;
        }

        const task_const = document.createElement("div");
        task_const.classList.add("task");

        const task_content_const = document.createElement("div");
        task_content_const.classList.add("content");
        // task_content_el.innerText = task;

        task_const.appendChild(task_content_const);

        const task_input_const = document.createElement("input");
        task_input_const.classList.add("text");
        task_input_const.type = "text";
        task_input_const.value = task;
        task_input_const.setAttribute("readonly", "readonly");

        task_content_const.appendChild(task_input_const);

        const task_actions_const = document.createElement("div");
        task_actions_const.classList.add("actions");

        const task_edit_const = document.createElement("button");
        task_edit_const.classList.add("edit");
        task_edit_const.innerHTML = "Edit";

        const task_delete_const = document.createElement("button");
        task_delete_const.classList.add("delete");
        task_delete_const.innerHTML = "Delete";

        task_actions_const.appendChild(task_edit_const);
        task_actions_const.appendChild(task_delete_const);

        task_const.appendChild(task_actions_const);

        list_const.appendChild(task_const);

        input.value = "";

        task_edit_const.addEventListener('click', () => {
            if (task_edit_const.innerText.toLowerCase() == "edit") {
                task_input_const.removeAttribute("readonly");
                task_input_const.focus();
                task_edit_const.innerText = "Save";
            } else {
                task_input_const.setAttribute("readonly", "readonly");
                task_edit_const.innerText = "Edit";
            }

        });

        task_delete_const.addEventListener('click', () => {
            list_const.removeChild(task_const);
        });
    });
});