document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addTask();
  }
})

function deleteTask(tasks: HTMLElement, li: HTMLElement) {
  const button: HTMLElement = document.createElement("button");
  button.className = "bg-white rounded-[10px] p-1 ml-5 h-10 self-center hover:outline-white hover:outline-solid hover:outline-offset-2 active:outline-gray-500 active:outline-solid active:bg-gray-500"

  button.innerHTML =
  `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
  <path 
  d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z">
  </path>
  </svg>`;

  tasks.append(button);
  button.addEventListener("click", () => {
    tasks.removeChild(li);
    tasks.removeChild(button);
  })
}

function addTask() {
  const giveTask = document.getElementById("giveTask")! as HTMLInputElement;
  const tasks: HTMLElement = document.getElementById("tasks")!;
  let tasks_array: String[] = [];

  if (giveTask.value !== "") {
    tasks_array.push(giveTask.value);

    const li: HTMLElement = document.createElement("li");
    li.innerText = giveTask.value.toString();
    li.className = "text-white text-3xl font-bold m-2"
    tasks.append(li);
    giveTask.value = ""
    
    for (const task in tasks_array) {
      deleteTask(tasks, li);
    }

    console.log(tasks_array);

  } else {
    alert("Must input a task!");
  }
}

function App() {

  return (
    <>
      <header>
        <h1 className="text-7xl text-center font-bold text-rose-800 font-paintbrush m-10">To-Do List</h1>
      </header>
      <main>
        <form className="flex justify-center">

          <input type="text" placeholder="Insert task" id="giveTask" className="
          block bg-rose-300 border-rose-800 border-[3px] border-r-0 rounded-r-none rounded-2xl font-bold text-2xl placeholder:text-center placeholder:text-white text-rose-800 text-center w-60 focus:outline-none"
          />

            <button type="button" onClick={addTask} className="
          text-white font-bold bg-rose-800 border-[3px] border-rose-800 border-l-0 rounded-l-none rounded-2xl w-25 active:bg-rose-400 active:text-rose-800">
            Submit
            </button>

        </form>

        <div className="flex flex-col items-center justify-center bg-rose-800 rounded-2xl p-10 m-20">
          <ul id="tasks" className="flex flex-row">

          </ul>
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
