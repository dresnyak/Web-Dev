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


