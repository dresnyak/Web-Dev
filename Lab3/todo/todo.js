let todo = {
    tasks: [],
    addTask(theme, desc){
        this.tasks.push({theme, desc});
    },
    getTask(theme){
        for (let task of this.tasks){
            if (task.theme === theme){
                return task;
            }
        }
        return null;
    },
    setTask(theme, desc){
        for (let task of this.tasks){
            if (task.theme === theme){
                task.desc = desc;
            }
        }
    },
    deleteTask(theme){
        for (let task of this.tasks){
            if (task.theme === theme){
                task.desc = null;
                task.theme = null;
            }
        }
    }
}

function renderTasks() {
    const container = document.getElementById("taskList");
    container.innerHTML = ""; // очищаем

    for (let task of todo.tasks) {
        if (task.theme !== null) {
            const div = document.createElement("div");
            div.innerHTML = `<b>${task.theme}</b>: ${task.desc}`;
            container.appendChild(div);
        }
    }
}

document.getElementById("addButton").addEventListener("click", function(){
    const theme = document.getElementById("theme").value;
    const desc = document.getElementById("desc").value;
    todo.addTask(theme, desc);
    renderTasks();
})

document.getElementById("deleteButton").addEventListener("click", function(){
    const theme = document.getElementById("deleteTheme").value;
    todo.deleteTask(theme);
    renderTasks();
})
document.getElementById("findButton").addEventListener("click", function(){
    const theme = document.getElementById("findTheme").value;
    const result = todo.getTask(theme);
    const container = document.getElementById("taskList");
    if (result){
        container.innerHTML = `Найдено ${result.theme}: ${result.desc}`;
    }else{
        container.innerHTML = `Не найдено`
    }

})