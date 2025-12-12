const input = document.querySelector(`#input`);
const addElement = document.querySelector(`#add`);
const tasksContainer = document.querySelector(`#taskContainer`);
const deleteButton = document.getElementById("delete");
const clearBtn = document.getElementById("clearCompleted");

const allBtn = document.querySelector(`#all`);
const activeBtn = document.querySelector(`#active`);
const completedBtn = document.querySelector(`#completed`);

let tasks = [];
let taskId = 1;

const add = () => {
  const todoText = input.value;
  const task = {
    id: taskId,
    text: todoText,
    isComplete: false,
  };
  taskId++;
  tasks.push(task);

  clearInput();
  renderTasks(tasks);
  updateCounter();
};
const renderTasks = (tasks) => {
  let taskElementHTML = "";
  tasks.forEach((task) => {
    const taskElement = createTask(task);
    taskElementHTML += taskElement;
  });
  tasksContainer.innerHTML = taskElementHTML;
  updateCounter();
};
const createTask = (task) => {
  return `<div class="taskBox inter">
            <input type="checkbox" name="checkBox" onclick="yesNo(${
              task.id
            })" ${task.isComplete && "checked"} />
            <p class="taskText inter ${task.isComplete ? "line" : ""}" > ${
    task.text
  }</p>
            <button id="delete" class="deleteBox" onclick="deleted(${
              task.id
            })">Delete</button>
        </div>`;
};
const clearInput = () => {
  input.value = "";
};
const yesNo = (taskId) => {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, isComplete: !task.isComplete };
    } else {
      return task;
    }
  });
  renderTasks(tasks);
  updateCounter();
};
const clearCompleted = () => {
  const hariu = confirm("Are you sure you want to clear all completed tasks?");
  if (!hariu) {
    return;
  }
  tasks = tasks.filter((task) => !task.isComplete);
  renderTasks(tasks);
  updateCounter();
};
function updateCounter() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.isComplete).length;
  count.innerHTML = ` <div class="bottom-line"></div>    ${completed} of ${total} tasks completed <button id="clearCompleted" class="clear" onclick="clearCompleted()">Clear  Completed</button>`;
}

const category = (categoryValue) => {
  if (categoryValue === "Active") {
    const categoryTasks = tasks.filter((task) => {
      if (task.isComplete === true) {
        return false;
      } else {
        return true;
      }
    });
    renderTasks(categoryTasks);
  }
  if (categoryValue === "Completed") {
    const categoryTasks = tasks.filter((task) => {
      if (task.isComplete === true) {
        return true;
      } else {
        return false;
      }
    });
    renderTasks(categoryTasks);
  }
  if (categoryValue === "All") {
    renderTasks(tasks);
  }
};

const deleted = (taskId) => {
  const answer = confirm("Are you sure you want to delete this task?");
  if (!answer) {
    return;
  }

  tasks = tasks.filter((task) => {
    if (task.id === taskId) {
      return false;
    } else {
      return true;
    }
  });
  renderTasks(tasks);
  updateCounter();
};
// counter ////////////////////////////////////////
const many = addElement.addEventListener("click", add);
allBtn.addEventListener("click", () => {
  category("All");
  allBtn.classList.add("active-color");
  activeBtn.classList.remove("active-color");
  completedBtn.classList.remove("active-color");
});
activeBtn.addEventListener("click", () => {
  category("Active");
  activeBtn.classList.add("active-color");
  allBtn.classList.remove("active-color");
  completedBtn.classList.remove("active-color");
});
completedBtn.addEventListener("click", () => {
  category("Completed");
  completedBtn.classList.add("active-color");
  allBtn.classList.remove("active-color");
  activeBtn.classList.remove("active-color");
});
