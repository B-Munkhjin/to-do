const input = document.querySelector(`#input`);
const addElement = document.querySelector(`#add`);
const tasksContainer = document.querySelector(`#taskContainer`);
const deleteButton = document.getElementById("delete");

const allBtn = document.querySelector(`#all`);
const activeBtn = document.querySelector(`#active`);
const completedBtn = document.querySelector(`#completed`);

let tasks = [];
let taskId = 1;
let bugd = [];
let idevhtei = [];
let duussan = [];

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
  renderTasks();
};
const renderTasks = () => {
  let taskElementHTML = "";
  tasks.forEach((task) => {
    const taskElement = createTask(task);
    taskElementHTML += taskElement;
  });
  tasksContainer.innerHTML = taskElementHTML;
};
const createTask = (task) => {
  return `<div class="taskBox inter">
            <input type="checkbox" name="checkBox" onclick="yesNo(${
              task.id
            })" ${task.isComplete && "checked"} />
            <p class="taskText inter">${task.text}</p>
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
  console.log(tasks);
};

// const category = (taskId) => {
//   tasks = tasks.map((task) => {
//     if (task.id === taskId) {
//       bugd.push;
//       onclick;
//     }
//     if (task.id === taskId && task.isComplete === true) {
//       duussan.push;
//     }
//     if (task.id === taskId && task.isComplete === false) {
//       idevhtei.push;
//     }
//   });
// };
console.log(tasks);
///////delete- eventListener ajillahgui XXXXXXXXXXXXXXXXXX
const deleted = (taskId) => {
  tasks = tasks.filter((task) => {
    if (task.id === taskId) {
      return false;
    } else {
      return true;
    }
  });
  renderTasks();
};
allBtn.addEventListener("click", color);
addElement.addEventListener("click", add);
