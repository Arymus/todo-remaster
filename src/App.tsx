function addTask() {
  const giveTask = document.getElementById("giveTask")! as HTMLInputElement;
  const tasks: HTMLElement = document.getElementById("tasks")!;
  let tasks_array: String[] = [];

  if (giveTask.value !== "") {
    tasks_array.push(giveTask.value);

    const li: HTMLElement = document.createElement("li");
    li.innerText = giveTask.value.toString();
    li.className = "text-white text-3xl font-bold"
    tasks.append(li);
    
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
          <ul id="tasks">

          </ul>
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
